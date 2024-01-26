'use client';

import { useAction } from 'next-safe-action/hooks';
import { useState } from 'react';

import { Clipboard, Loader2, RotateCw } from '@cc3/design/ui/icons';

import type { getAssignment } from '@/server/api/data/assignment/get';
import { createToken, rotateToken } from '@/server/api/data/submit/token';

export function AssignmentToken({
  assignment,
}: {
  assignment: Awaited<ReturnType<typeof getAssignment>>;
}) {
  const [token, setToken] = useState(assignment.token || '');

  const rotate = useAction(rotateToken, {
    onSuccess: ({ token }) => {
      if (token) {
        setToken(token);
      }
    },
  });

  const create = useAction(createToken, {
    onSuccess: ({ token }) => {
      if (token) {
        setToken(token);
      }
    },
  });

  function handleCopyClick() {
    navigator.clipboard.writeText(token);
  }

  function handleRotateClick() {
    rotate.execute({
      assignmentId: assignment.id,
    });
  }

  function handleCreateClick() {
    create.execute({
      assignmentId: assignment.id,
    });
  }

  return (
    <div className="focus-within:border-tertiary flex h-9 w-full items-center overflow-hidden rounded-md border transition-colors focus-within:border">
      <div className="bg-secondary text-muted-foreground flex h-full shrink-0 items-center border-r px-2 text-sm">
        Token
      </div>
      {token && (
        <div className="text-muted-foreground flex h-full flex-1 grow items-center overflow-hidden bg-transparent px-2 font-mono text-sm">
          <span className="line-clamp-1">
            {token.slice(0, 40)}***********************
          </span>
        </div>
      )}
      {!token && (
        <button
          onClick={handleCreateClick}
          className="text-muted-foreground flex h-full flex-1 grow items-center justify-center bg-transparent px-2 font-mono text-sm"
        >
          {create.status === 'executing' && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}
          {create.status !== 'executing' && (
            <span className="line-clamp-1 block">Crear</span>
          )}
        </button>
      )}
      {token && (
        <button
          onClick={handleCopyClick}
          className="bg-secondary text-muted-foreground flex h-full shrink-0 items-center border-r px-2"
        >
          <Clipboard className="h-4 w-4" />
        </button>
      )}
      {token && (
        <button
          onClick={handleRotateClick}
          className="bg-secondary text-muted-foreground flex h-full shrink-0 items-center border-r px-2"
        >
          {rotate.status !== 'executing' && <RotateCw className="h-4 w-4" />}
          {rotate.status === 'executing' && (
            <RotateCw className="h-4 w-4 animate-spin" />
          )}
        </button>
      )}
    </div>
  );
}
