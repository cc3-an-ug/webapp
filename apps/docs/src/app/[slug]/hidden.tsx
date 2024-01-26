import { format } from 'date-fns';

import { StudySVG } from '@cc3/design/illustration/study';

import type { Post } from '@/server/cms';

function getTypeLabel(type: Post['type']) {
  switch (type) {
    case 'lab':
      return 'laboratorio';
    case 'project':
      return 'proyecto';
    case 'tutorial':
      return 'tutorial';
  }
}

export function Hidden({ type, date }: Pick<Post, 'type' | 'date'>) {
  if (!date) return null;

  const nextDate = new Date(date);

  if (new Date() >= nextDate) return null;

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <StudySVG />
      <div className="docs prose prose-lg prose-slate prose-yellow dark:prose-invert prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none prose-code:after:content-none mx-auto mb-4 w-full min-w-0 max-w-3xl shrink p-4  pb-8 md:mb-8 md:px-8 lg:mx-0 lg:max-w-full lg:pl-16 lg:pr-8">
        <p>
          Uups, parece que te estás adelantando un poco. El contenido de este{' '}
          {getTypeLabel(type)} no estará disponible hasta{' '}
          <strong>
            <code>{format(nextDate, 'dd/MM/yyyy')}</code>
          </strong>
        </p>
        <p>
          Nosotros entendemos el entusiasmo por explorar el material.
          Agradecemos la paciencia y comprensión. Mientras tanto, si tienes
          alguna pregunta o inquietud, no dudes en contactarnos por los canales
          oficiales.
        </p>
      </div>
    </div>
  );
}
