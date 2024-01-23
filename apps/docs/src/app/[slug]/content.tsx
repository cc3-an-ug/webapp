import Link from 'next/link';

import { PortableText } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';

import { cn } from '@cc3/design/lib/utils';
import { Code } from '@cc3/design/ui/code';
import { Prose } from '@cc3/design/ui/prose';

import { cms, type Post } from '@/server/cms';

export function Content({ body, date }: Pick<Post, 'body' | 'date'>) {
  if (!date) return null;

  const nextDate = new Date(date);

  if (new Date() < nextDate) return null;

  return (
    <Prose>
      <PortableText
        value={body}
        components={{
          block: {
            h2: ({ value, children }) => (
              <Link href={`#${value._key || ''}`} className="no-underline">
                <h2
                  id={value._key || ''}
                  className="group cursor-pointer scroll-mt-36"
                >
                  <span className="text-muted-foreground absolute left-8 hidden lg:group-hover:inline">
                    #
                  </span>
                  {children}
                </h2>
              </Link>
            ),
            h3: ({ value, children }) => (
              <Link href={`#${value._key || ''}`} className="no-underline">
                <h3
                  id={value._key || ''}
                  className="group cursor-pointer scroll-mt-36"
                >
                  <span className="text-muted-foreground absolute left-8 hidden lg:group-hover:inline">
                    #
                  </span>
                  {children}
                </h3>
              </Link>
            ),
          },
          types: {
            image: ({ value, isInline }) => {
              const { width, height } = getImageDimensions(value);

              const url = urlBuilder(cms)
                .image(value)
                .width(Math.min(width, 2000))
                .fit('max')
                .auto('format')
                .url();

              return (
                <a href={url} rel="noreferrer" target="_blank">
                  <img
                    alt=""
                    src={url}
                    style={{ aspectRatio: width / height }}
                    className={cn(isInline && 'inline-block', 'mx-auto')}
                  />
                </a>
              );
            },
            code: (props) => (
              <Code language={props.value.language}>{props.value.code}</Code>
            ),
            table: ({ value }) => {
              const [head, ...rows] = value.rows as Array<{ cells: string[] }>;
              return (
                <table>
                  {head.cells.filter(Boolean).length > 0 && (
                    <thead>
                      <tr>
                        {head.cells.map((cell) => (
                          <th key={cell}>{cell}</th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {rows.map((row, index) => (
                      <tr key={index}>
                        {row.cells.map((cell) => {
                          return <td key={cell}>{cell}</td>;
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              );
            },
          },
        }}
      />
    </Prose>
  );
}
