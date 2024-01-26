'use client';

import { useEffect, useState } from 'react';

import { SuccessSVG } from '@cc3/design/illustration/success';
import { Skeleton } from '@cc3/design/ui/skeleton';

const phrases = [
  'Como se llaman a 8 Hobbits? Un Hobbyte.',
  '¿Por qué C++ no le gusta C? Porque C no tiene clase.',
  '¿Qué le dijo un bit al otro? Nos vemos en el bus.',
  '¿Por qué los programadores siempre confunden Halloween con Navidad? Porque Oct 31 = Dec 25.',
];

export function AssignmentFooter({ loading }: { loading?: boolean }) {
  const [client, setClient] = useState(false);
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div className="flex w-full flex-col items-center">
      <SuccessSVG />
      {(!client || loading) && <Skeleton className="h-5 w-3/4" />}
      {client && !loading && (
        <span className="text-muted-foreground text-center text-sm">
          {phrase}
        </span>
      )}
    </div>
  );
}
