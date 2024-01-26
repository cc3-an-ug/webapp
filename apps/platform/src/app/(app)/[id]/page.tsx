import type { Metadata } from 'next';

import { AssignmentData } from './dynamic';

export const metadata: Metadata = {
  title: 'Tarea',
};

export default function AssignmentPage({ params }: { params: { id: string } }) {
  const id = params.id;
  return <AssignmentData id={id} />;
}
