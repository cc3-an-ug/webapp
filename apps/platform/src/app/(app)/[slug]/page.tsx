import { Badge } from '@cc3/design/ui/badge';
import { Code } from '@cc3/design/ui/code';
import { Prose } from '@cc3/design/ui/prose';
import * as Table from '@cc3/design/ui/table';

import { AssignmentChart } from './chart';

export default function SubmitPage() {
  return (
    <div className="w-full space-y-16">
      <div className="flex w-full flex-col items-start justify-between gap-2 lg:flex-row">
        <div className="flex flex-col-reverse items-start gap-2 lg:flex-col">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Lab 0: Git y GitHub
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-xs">Exp.</span>
            <Badge variant="secondary">12/09/2021</Badge>
          </div>
        </div>
        <span className="font-mono text-2xl">
          <span className="text-red-500">0</span>
          /100
        </span>
      </div>
      <AssignmentChart />
      <div className="flex flex-col items-start gap-8">
        <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
          Detalle
        </h2>
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
            <Table.Row>
              <Table.Cell>
                <span className="text-primary font-medium">Tutorial</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-primary font-mono font-medium">
                  0/100
                </span>
              </Table.Cell>
              <Table.Cell className="hidden lg:table-cell">
                <span className="text-muted-foreground font-medium">
                  Fallo z
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-primary font-medium">Tutorial</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-primary font-mono font-medium">
                  0/100
                </span>
              </Table.Cell>
              <Table.Cell className="hidden lg:table-cell">
                <span className="text-muted-foreground font-medium">
                  Fallo x
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-primary font-medium">Tutorial</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-primary font-mono font-medium">
                  0/100
                </span>
              </Table.Cell>
              <Table.Cell className="hidden lg:table-cell">
                <span className="text-muted-foreground font-medium">
                  Fallo w
                </span>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
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
