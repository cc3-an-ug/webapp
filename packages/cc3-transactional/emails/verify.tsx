import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type VerifyUserEmailProps = {
  email?: string;
  verifyLink?: string;
};

export function VerifyUserEmail({ email, verifyLink }: VerifyUserEmailProps) {
  const previewText = `Verificar cuenta para ${email}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src="https://github.com/cc3-an-ug.png"
                width="40"
                height="40"
                alt="Vercel"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              <strong>Verificar cuenta</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hola <strong>{email}</strong>,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Gracias por registrarte en la plataforma de CC3 AN{' '}
              <strong>Autograders</strong>. Para completar tu registro, por
              favor verifica tu cuenta.
            </Text>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                href={verifyLink}
                className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
              >
                Verificar ahora
              </Button>
            </Section>
            <Text className="text-[14px] leading-[24px] text-black">
              o copia y pega este enlace en tu navegador:{' '}
              <Link href={verifyLink} className="text-blue-600 no-underline">
                {verifyLink}
              </Link>
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Si no creaste una cuenta, o si crees que alguien está intentando
              crear una cuenta con tu correo electrónico, puedes escribirnos a
              los canales correspondientes.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

VerifyUserEmail.PreviewProps = {
  email: 'andres.cv@galileo.edu',
  verifyLink: 'https://vercel.com/teams/invite/foo',
} as VerifyUserEmailProps;

export default VerifyUserEmail;
