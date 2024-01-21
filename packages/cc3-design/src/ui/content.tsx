import Link from 'next/link';
import type { SanityClient } from 'next-sanity';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { PortableTextBlock } from 'sanity';

import { PortableText } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';

import { cn } from '@cc3/design/lib/utils';

export function Content({
  content,
  client,
}: {
  client: SanityClient;
  content: Array<PortableTextBlock>;
}) {
  return (
    <div className="docs prose prose-lg prose-slate prose-yellow dark:prose-invert prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none prose-code:after:content-none mx-auto mb-4 w-full min-w-0 max-w-3xl shrink p-4  pb-8 md:mb-8 md:px-8 lg:mx-0 lg:max-w-full lg:pl-16 lg:pr-8">
      <PortableText
        value={content}
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

              const url = urlBuilder(client)
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
              <SyntaxHighlighter
                style={tomorrowNight}
                language={props.value.language}
              >
                {props.value.code}
              </SyntaxHighlighter>
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
    </div>
  );
}
