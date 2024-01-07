import { Github, Layers3, Menu, Search, Slack, Sun } from 'lucide-react';
import Link from 'next/link';

export function RootLayoutHeader() {
  return (
    <header className="fixed z-50 w-full border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur backdrop-filter dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-2.5">
          <Link
            href="/"
            className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white"
          >
            <Layers3 className="h-6 w-6 text-violet-600" />
            <span className="-mt-0.5">CC3 AN</span>
          </Link>
          <span className="inline-block whitespace-nowrap rounded border border-slate-400/70 px-1.5 align-middle font-medium leading-4 tracking-wide text-slate-500 [font-size:10px] dark:border-slate-600 dark:text-slate-400">
            Beta
          </span>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-8 w-8 items-center justify-end text-slate-600 dark:text-slate-300"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
        <nav className="hidden items-center divide-x divide-gray-200 lg:flex dark:divide-gray-800">
          <div className="flex items-center pr-2 lg:space-x-4 lg:pr-8">
            <Link
              className="group flex h-8 items-center rounded-md bg-transparent bg-violet-50 px-3 text-sm font-medium leading-none text-violet-900 dark:bg-violet-500/20 dark:text-violet-50"
              href="/docs"
            >
              Documentación
            </Link>
            <Link
              href="/calendario"
              className="group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200"
            >
              Calendario
            </Link>
            <div className="px-3">
              <button
                aria-label="Search"
                className="flex h-8 cursor-text items-center rounded-md border border-gray-200 bg-gray-50 px-2 text-sm hover:border-gray-300 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 dark:hover:bg-gray-800"
              >
                <Search className="mr-2 h-3 w-3" />
                <span className="mr-8 text-slate-400 dark:text-slate-500">
                  Search...
                </span>
                <span className="inline-block whitespace-nowrap rounded border border-slate-400/70 px-1.5 align-middle font-medium leading-4 tracking-wide text-slate-500 [font-size:10px] dark:border-slate-600 dark:text-slate-400">
                  ⌘K
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-center pl-2 lg:space-x-2 lg:pl-8">
            <button
              type="button"
              id="radix-:R3dl6:"
              aria-haspopup="menu"
              data-state="closed"
              className="flex h-8 items-center rounded-md bg-transparent px-3 text-slate-400 hover:bg-gray-50 hover:text-slate-500 dark:text-slate-500 dark:hover:bg-gray-900 dark:hover:text-slate-400"
            >
              <Sun className="h-4 w-4" />
            </button>
            <a
              className="group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/contentlayerdev/contentlayer"
            >
              <span className="block w-5 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400">
                <Github className="h-4 w-4" />
              </span>
              <span className="sr-only">Github</span>
            </a>
            <a
              className="group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200"
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/rytFErsARm"
            >
              <span className="block w-5 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400">
                <Slack className="h-4 w-4" />
              </span>
              <span className="sr-only">Discord</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
