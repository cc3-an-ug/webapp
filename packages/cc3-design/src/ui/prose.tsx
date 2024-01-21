export function Prose({ children }: { children?: React.ReactNode }) {
  return (
    <div className="docs prose prose-lg prose-slate prose-yellow dark:prose-invert prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none prose-code:after:content-none mx-auto mb-4 w-full min-w-0 max-w-3xl shrink p-4 pb-8 md:mb-8 md:px-8 lg:mx-0 lg:max-w-full lg:pl-16 lg:pr-8">
      {children}
    </div>
  );
}
