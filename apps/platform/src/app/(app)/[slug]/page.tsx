import { Badge } from '@cc3/design/ui/badge';
import { Code } from '@cc3/design/ui/code';
import { Loader2 } from '@cc3/design/ui/icons';
import { Prose } from '@cc3/design/ui/prose';
import * as Table from '@cc3/design/ui/table';

import { AssignmentChart } from './chart';

export default function SubmitPage() {
  return (
    <div className="w-full space-y-16 py-8">
      <div className="flex w-full flex-col items-start justify-between gap-2 lg:flex-row">
        <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          Lab 0: Git y GitHub
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-xs">Fecha de entrega:</span>
          <Badge variant="outline">12/09/2021</Badge>
        </div>
      </div>
      <AssignmentChart />
      <Table.Root className="hidden md:table">
        <Table.Header>
          <Table.Row>
            <Table.Head>Número</Table.Head>
            <Table.Head>Estado</Table.Head>
            <Table.Head>Tarea</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <a href="/autograders/db/deploy-requests/1">
                <span className="text-secondary-foreground">#</span>
                <span className="text-primary font-medium">1</span>
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="/autograders/db/deploy-requests/1">
                <Badge variant="outline" className="border-tertiary gap-1">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Calificando
                </Badge>
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="/autograders/db/deploy-requests/1">
                <span className="text-primary font-medium">
                  Lab 0: Git y Github
                </span>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <a href="/autograders/db/deploy-requests/1">
                <span className="text-secondary-foreground">#</span>
                <span className="text-primary font-medium">100</span>
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="/autograders/db/deploy-requests/1">
                <Badge variant="outline" className="border-green-500">
                  Calificado
                </Badge>
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="/autograders/db/deploy-requests/1">
                <span className="text-primary font-medium">
                  Lab 0: Git y Github
                </span>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <a href="/autograders/db/deploy-requests/1">
                <span className="text-secondary-foreground">#</span>
                <span className="text-primary font-medium">100</span>
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="/autograders/db/deploy-requests/1">
                <Badge variant="outline" className="border-red-500">
                  Error
                </Badge>
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="/autograders/db/deploy-requests/1">
                <span className="text-primary font-medium">
                  Lab 0: Git y Github
                </span>
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <div className="flex w-full flex-col items-start">
        <h2 className="font-mono text-xl font-semibold md:text-2xl lg:text-3xl">
          Stdout
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
  );
}
