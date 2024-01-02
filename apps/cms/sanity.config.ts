import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { StreamLanguage } from '@codemirror/language';
import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'docs',

  projectId: 'hmy77kmc',
  dataset: 'production',

  plugins: [
    codeInput({
      codeModes: [
        {
          name: 'javascript',
          loader: () =>
            import('@codemirror/lang-javascript').then(({ javascript }) =>
              javascript({ jsx: false }),
            ),
        },
        {
          name: 'json',
          loader: () =>
            import('@codemirror/lang-json').then(({ json }) => json()),
        },
        {
          name: 'markdown',
          loader: () =>
            import('@codemirror/lang-markdown').then(({ markdown }) =>
              markdown(),
            ),
        },
        {
          name: 'java',
          loader: () =>
            import('@codemirror/lang-java').then(({ java }) => java()),
        },
        {
          name: 'html',
          loader: () =>
            import('@codemirror/lang-html').then(({ html }) => html()),
        },
        {
          name: 'c',
          loader: () =>
            import('@codemirror/legacy-modes/mode/clike').then(({ c }) =>
              StreamLanguage.define(c),
            ),
        },
        {
          name: 'sh',
          loader: () =>
            import('@codemirror/legacy-modes/mode/shell').then(({ shell }) =>
              StreamLanguage.define(shell),
            ),
        },
        {
          name: 'python',
          loader: () =>
            import('@codemirror/legacy-modes/mode/python').then(({ python }) =>
              StreamLanguage.define(python),
            ),
        },
        {
          name: 'xml',
          loader: () =>
            import('@codemirror/legacy-modes/mode/xml').then(({ xml }) =>
              StreamLanguage.define(xml),
            ),
        },
        {
          name: 'yaml',
          loader: () =>
            import('@codemirror/legacy-modes/mode/yaml').then(({ yaml }) =>
              StreamLanguage.define(yaml),
            ),
        },
        {
          name: 'golang',
          loader: () =>
            import('@codemirror/legacy-modes/mode/go').then(({ go }) =>
              StreamLanguage.define(go),
            ),
        },
      ],
    }),
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
