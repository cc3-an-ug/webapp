'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function GoHome() {
  const { push } = useRouter();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === '/') {
        push('/');
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [push]);

  return <></>;
}
