import { Input } from '@cc3/design/ui/input';

import { db } from '@/server/db';

import { AssignmentCard } from './card';

export async function getAssignments() {
  const assignments = db.selectFrom('Assignment').selectAll().execute();
  return assignments;
}

export default async function HomePage() {
  const assignments = await getAssignments();

  return (
    <div className="w-full space-y-8">
      <form className="w-full">
        <Input placeholder="Buscar..." />
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} />
        ))}
      </div>
      {/* <Table.Root className="hidden md:table">
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
      </Table.Root> */}
    </div>
  );
}
