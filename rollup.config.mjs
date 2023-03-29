import path from 'path'
import {fileURLToPath} from 'url';
// import alias from '@rollup/plugin-alias'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import copy from "rollup-plugin-copy";
import styles from 'rollup-plugin-styles';
// import scss from 'rollup-plugin-scss';
// import multiInput from "rollup-plugin-multi-input";
// import url from '@rollup/plugin-url';
// import {terser} from "rollup-plugin-terser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// rollup.config.mjs
export default {
  // input: [
  //   'lib/index.js',
  //   'lib/ui/formatPicker/index.js',
  //   'lib/ui/tooltip/index.js',
  //   'lib/ui/previewTools/index.js',
  //   'lib/ui/codePicker/index.js',
  // ],
  input: 'lib/index.js',
  output: {
    dir: 'dist',
    format: 'esm',
    // preserveModules: true,
    // preserveModulesRoot: 'src',
    assetFileNames: "assets/[name][extname]",
  },
  plugins: [
    copy({
      targets: [{src: './themes', dest: 'dist/'}]
    }),
    // alias({
    //   entries: [
    //     {
    //       find: '@',
    //       replacement: path.resolve(__dirname, './lib'),
    //     }
    //   ],
    // }),
    external(),
    nodeResolve({browser: true}),
    commonjs({
      strictRequires: true,
      transformMixedEsModules: true,
    }),
    // scss({
    //   exclude: ["./lib/ui/**/*"],
    // }),
    styles({
      exclude: ["./lib/ui/*/**"],
      // include: ["./lib/ui/**/*.css"],
      mode: 'extract',
      assetDir: 'assets'
    }),
    styles({
      include: ["./lib/ui/**/*.css"],
      // include: ["./lib/ui/**/*.css"],
    }),
    image(),
    json(),
    // url({
    //   include: "**/*.(png|svg|ttf)",
    //   exclude: "**/*.(js|json|css)",
    //   destDir: path.join(__dirname, 'dist/static'),
    //   sourceDir: path.join(__dirname, 'lib'),
    //   limit: 0, // extract all files
    //   fileName: "[dirname]/[name]-[hash][extname]",
    // })
    // terser(),
  ],
  // external: [
  //   'dompurify',
  //   'execall',
  //   'fast-diff',
  //   'flowchart.js',
  //   'fuse.js',
  //   'html-tags',
  //   'joplin-turndown-plugin-gfm',
  //   'katex',
  //   'mermaid',
  //   'ot-json1',
  //   'ot-text-unicode',
  //   'popper.js',
  //   'prismjs',
  //   'snabbdom',
  //   'snabbdom-to-html',
  //   'turndown',
  //   'underscore',
  //   'unsplash-js',
  //   'vega',
  //   'vega-embed',
  //   'vega-lite',
  //   'vega-lite',
  // ],
}