import { generateRandomString, isWithinExpiration } from 'lucia/utils';

import { db } from './db';

const EXPIRES_IN = 1000 * 60 * 60 * 2; // 2 hours

export type TokenTable = 'UserVerificationToken' | 'PasswordResetToken';

export async function generateToken(table: TokenTable, userId: string) {
  const storedUserTokens = await db
    .selectFrom(table)
    .selectAll()
    .where('user_id', '=', userId)
    .execute();

  if (storedUserTokens.length > 0) {
    const reusableStoredToken = storedUserTokens.find((token) => {
      // check if expiration is within 1 hour
      // and reuse the token if true
      return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2);
    });

    if (reusableStoredToken) return reusableStoredToken.id;
  }

  const token = generateRandomString(63);

  await db
    .insertInto(table)
    .values({
      id: token,
      user_id: userId,
      expires: new Date().getTime() + EXPIRES_IN,
    })
    .executeTakeFirst();

  return token;
}

export async function validateToken(table: TokenTable, token: string) {
  const storedToken = await db.transaction().execute(async (trx) => {
    const storedToken = await trx
      .selectFrom(table)
      .selectAll()
      .where('id', '=', token)
      .executeTakeFirst();

    if (!storedToken) throw new Error('Invalid token');

    await trx
      .deleteFrom(table)
      .where('user_id', '=', storedToken.user_id)
      .executeTakeFirst();

    return storedToken;
  });

  const tokenExpires = Number(storedToken.expires); // bigint => number conversion

  if (!isWithinExpiration(tokenExpires)) {
    throw new Error('Expired token');
  }

  return storedToken.user_id;
}

export async function isValidToken(table: TokenTable, token: string) {
  const storedToken = await db
    .selectFrom(table)
    .selectAll()
    .where('id', '=', token)
    .executeTakeFirst();

  if (!storedToken) return false;

  const tokenExpires = Number(storedToken.expires); // bigint => number conversion

  return isWithinExpiration(tokenExpires);
}
