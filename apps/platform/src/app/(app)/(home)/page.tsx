import { Badge } from '@cc3/design/ui/badge';
import { Loader2 } from '@cc3/design/ui/icons';
import { Input } from '@cc3/design/ui/input';
import * as Table from '@cc3/design/ui/table';

import { listAssignments } from '@/server/api/data/assignment/list';

import { AssignmentCard } from './card';

export default async function HomePage() {
  const assignments = await listAssignments();

  return (
    <div className="w-full space-y-8">
      <form className="w-full">
        <Input placeholder="Buscar..." />
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} {...assignment} />
        ))}
      </div>
      <Table.Root className="hidden md:table">
        <Table.Header>
          <Table.Row>
            <Table.Head>Number</Table.Head>
            <Table.Head>State</Table.Head>
            <Table.Head>Name</Table.Head>
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
                  Loading
                </Badge>
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="/autograders/db/deploy-requests/1">
                <span className="text-primary font-medium">Rolodex 1</span>
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
                  Running
                </Badge>
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="/autograders/db/deploy-requests/1">
                <span className="text-primary font-medium">Rolodex 2</span>
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
                <span className="text-primary font-medium">Rolodex 3</span>
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
}
