'use client';

import { useState } from 'react';

import { Button } from '@cc3/design/ui/button';
import { Code } from '@cc3/design/ui/code';
import { ChevronLeft, ChevronRight } from '@cc3/design/ui/icons';
import { Prose } from '@cc3/design/ui/prose';
import * as Table from '@cc3/design/ui/table';

import type { getAssignment } from '@/server/api/data/assignment/get';

export function AssignmentDetails({
  submits,
}: {
  submits: Awaited<ReturnType<typeof getAssignment>>['submits'];
}) {
  const [index, setIndex] = useState(0);
  const submit = submits[index];

  function handlePrev() {
    setIndex((prev) => Math.max(prev - 1, 0));
  }

  function handleNext() {
    setIndex((prev) => Math.min(prev + 1, submits.length - 1));
  }

  return (
    <div className="flex w-full flex-col items-start gap-8">
      <div className="flex w-full flex-col items-start justify-start gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
          Intentos
        </h2>
        <div className="flex items-center gap-2">
          <span>
            #{index + 1}/{submits.length}
          </span>
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={handlePrev}
            disabled={index === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={handleNext}
            disabled={index === submits.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Table.Root>
        <Table.Header>
          <Table.Row className="hidden lg:table-row">
            <Table.Head>Nombre</Table.Head>
            <Table.Head>Nota</Table.Head>
            <Table.Head>Comentarios</Table.Head>
          </Table.Row>
          <Table.Row className="lg:hidden">
            <Table.Head>Nombre</Table.Head>
            <Table.Head>Nota</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {submit.metadata.map((item) => (
            <Table.Row key={`${submit.id}-${item.name}`}>
              <Table.Cell>
                <span className="text-primary line-clamp-1 font-medium">
                  {item.name}
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-primary font-mono font-medium">
                  {item.grade}
                </span>
              </Table.Cell>
              <Table.Cell className="hidden lg:table-cell">
                <span className="text-muted-foreground line-clamp-1 font-medium">
                  {item.comments}
                </span>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      {submit.stdout && (
        <div className="flex w-full flex-col items-start gap-4">
          <h2 className="font-mono text-lg font-semibold md:text-xl lg:text-2xl">
            Stdout
          </h2>
          <Prose className="m-0 max-w-full p-0 md:m-0 md:p-0 lg:m-0 lg:p-0">
            <Code language="bash">{submit.stdout}</Code>
          </Prose>
        </div>
      )}
      {submit.stderr && (
        <div className="flex w-full flex-col items-start gap-4">
          <h2 className="font-mono text-xl font-semibold md:text-2xl lg:text-3xl">
            Stderr
          </h2>
          <Prose className="m-0 max-w-full p-0 md:m-0 md:p-0 lg:m-0 lg:p-0">
            <Code language="bash">{submit.stderr}</Code>
          </Prose>
        </div>
      )}
    </div>
  );
}
