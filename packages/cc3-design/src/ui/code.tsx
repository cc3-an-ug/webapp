import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function Code(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof SyntaxHighlighter>,
    'style'
  > & { children: string | string[] },
) {
  return <SyntaxHighlighter style={tomorrowNight} {...props} />;
}
