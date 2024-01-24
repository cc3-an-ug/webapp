import { format } from 'date-fns';

import { cn } from '@cc3/design/lib/utils';
import { Badge } from '@cc3/design/ui/badge';
import { Code } from '@cc3/design/ui/code';
import { Prose } from '@cc3/design/ui/prose';
import * as Table from '@cc3/design/ui/table';

import { getAssignment } from '@/server/api/data/assignment/get';

import { AssignmentChart } from './chart';

export default async function AssignmentPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const assignment = await getAssignment(id);
  const { maxScore, submits } = assignment;
  const metadata = submits[0]?.metadata || null;

  return (
    <div className="w-full space-y-16">
      <div className="flex w-full flex-col items-start justify-between gap-2 lg:flex-row">
        <div className="flex flex-col-reverse items-start gap-2 lg:flex-col">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            {assignment.name}
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-xs">Exp.</span>
            <Badge variant="secondary">
              {format(assignment.due, 'dd/MM/yyyy')}
            </Badge>
          </div>
        </div>
        <span className="font-mono text-2xl">
          <span
            className={cn(
              submits.length === 0 && 'text-red-500',
              maxScore < 61 && 'text-red-500',
              maxScore > 60 && maxScore < 81 && 'text-yellow-500',
              maxScore > 80 && 'text-green-500',
            )}
          >
            {maxScore}
          </span>
          /100
        </span>
      </div>
      <AssignmentChart />
      <div className="flex flex-col items-start gap-8">
        <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
          Detalle
        </h2>
        {metadata && (
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head>Nombre</Table.Head>
                <Table.Head className="w-20 lg:w-auto">Nota</Table.Head>
                <Table.Head className="hidden lg:table-cell">
                  Comentarios
                </Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {metadata.map((item) => (
                <Table.Row key={`${assignment.id}-${item.name}`}>
                  <Table.Cell>
                    <span className="text-primary font-medium">
                      {item.name}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-primary font-mono font-medium">
                      {item.grade}/100
                    </span>
                  </Table.Cell>
                  <Table.Cell className="hidden lg:table-cell">
                    <span className="text-muted-foreground font-medium">
                      {item.comments}
                    </span>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        )}
        <div className="flex w-full flex-col items-start">
          <h2 className="font-mono text-lg font-semibold md:text-xl lg:text-2xl">
            Stdout
          </h2>
          <Prose className="max-w-full px-0 md:px-0 lg:px-0">
            <Code language="bash">{` _
|-|  __
|=| [Ll]        Autograder
"^" ===='o

=>    Course | List


          `}</Code>
          </Prose>
        </div>
        <div className="flex w-full flex-col items-start">
          <h2 className="font-mono text-xl font-semibold md:text-2xl lg:text-3xl">
            Stderr
          </h2>
          <Prose className="max-w-full px-0 md:px-0 lg:px-0">
            <Code language="bash">{` _
|-|  __
|=| [Ll]        Autograder
"^" ===='o

=>    Course | List

✔ Got all courses successfully!

╔══════════════════════════════════════╤═════════════╤════════════════════╗
║ Id                                   │ Title       │ Description        ║
╟──────────────────────────────────────┼─────────────┼────────────────────╢
║ cceaffc2-612c-47c4-9edc-27d9871b19ee │ CC3 AN 2023 │ Machine Structures ║
╚══════════════════════════════════════╧═════════════╧════════════════════╝

          `}</Code>
          </Prose>
        </div>
      </div>
    </div>
  );
}
