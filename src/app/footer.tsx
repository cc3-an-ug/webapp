import { Layers3 } from 'lucide-react';
import Link from 'next/link';

export function RootLayoutFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="mx-auto w-full max-w-screen-2xl space-y-8 px-4 py-8 md:p-8 md:pb-12 lg:flex lg:justify-between lg:space-y-0 lg:p-16 lg:pb-20">
        <div className="space-y-4">
          <Link
            href="/"
            className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white"
          >
            <Layers3 className="h-6 w-6 text-violet-600" />
            <span>CC3 AN</span>
          </Link>
          <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <p>MIT Licenced</p>
            <p>
              Made with 💜 by{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/andrescv"
                className="hover:text-slate-700 dark:hover:text-slate-300"
              >
                @andrescv
              </a>
            </p>
          </div>
        </div>
        <div className="space-y-8 md:flex md:space-x-16 md:space-y-0">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
              Docs
            </h4>
            <ul className="mx-0 mt-4 list-none space-y-2 text-sm">
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  href="/docs/getting-started"
                >
                  <span>Getting Started</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  href="/docs/concepts"
                >
                  <span>Concepts</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  href="/docs/sources"
                >
                  <span>Sources</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  href="/docs/environments"
                >
                  <span>Environments</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  href="/docs/reference"
                >
                  <span>API Reference</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
