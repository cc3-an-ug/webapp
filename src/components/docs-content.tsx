import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { PortableTextBlock } from 'sanity';

import { PortableText } from '@portabletext/react';

import { DocsH2 } from './docs-h2';
import { DocsH3 } from './docs-h3';
import { DocsImage } from './docs-image';
import { DocsTable } from './docs-table';

export function DocsContent({
  content,
}: {
  content: Array<PortableTextBlock>;
}) {
  return (
    <div className="docs prose prose-lg prose-slate prose-yellow mx-auto mb-4 w-full min-w-0 max-w-3xl shrink p-4 pb-8 dark:prose-invert prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none  prose-code:after:content-none md:mb-8 md:px-8 lg:mx-0 lg:max-w-full lg:pl-16 lg:pr-8">
      <PortableText
        value={content}
        components={{
          block: {
            h2: ({ value, children }) => (
              <DocsH2 id={value._key || ''}>{children}</DocsH2>
            ),
            h3: ({ value, children }) => (
              <DocsH3 id={value._key || ''}>{children}</DocsH3>
            ),
          },
          types: {
            image: (props) => <DocsImage {...props} />,
            code: (props) => (
              <SyntaxHighlighter
                style={tomorrowNight}
                language={props.value.language}
              >
                {props.value.code}
              </SyntaxHighlighter>
            ),
            table: ({ value }) => {
              return <DocsTable rows={value.rows} />;
            },
          },
        }}
      />
    </div>
  );
}
