import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { PortableTextSpan, PortableTextTextBlock } from 'sanity';

import { cn } from '@/lib/utils';

export function DocsTOC({
  content,
}: {
  content: Array<PortableTextTextBlock<PortableTextSpan>>;
}) {
  return (
    <div className="sticky top-24 hidden max-h-96 w-80 shrink-0 overflow-y-auto py-8 2xl:block">
      <div className="text-sm">
        <h4 className="mb-4 font-medium">En esta página</h4>
        <ul className="space-y-2">
          {content
            .filter((item) => ['h2', 'h3'].includes(item.style || ''))
            .map((item) => {
              return (
                <li key={item._key}>
                  <Link
                    href={`#${item._key}`}
                    className={cn(
                      item.style === 'h2' && 'ml-0',
                      item.style === 'h3' && 'ml-4',
                      'text-muted-foreground hover:text-foreground flex transition-colors',
                    )}
                  >
                    <ChevronRight className="mr-2 mt-1 h-3.5 w-3.5 shrink-0" />
                    <span className="line-clamp-1">
                      {item.children[0].text}
                    </span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-t from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100"></div>
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100"></div>
    </div>
  );
}
