import { Badge } from '@cc3/design/ui/badge';
import { Loader2 } from '@cc3/design/ui/icons';
import { Input } from '@cc3/design/ui/input';
import * as Table from '@cc3/design/ui/table';

export default async function HomePage() {
  return (
    <div className="w-full space-y-8">
      <form className="w-full max-w-lg">
        <Input placeholder="Buscar..." className="" />
      </form>
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
    </div>
  );
}
