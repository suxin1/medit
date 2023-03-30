import styles from 'rollup-plugin-styles';

const config = [
  {
    input: 'themes/default.css',
    output: {
      file: 'dist/themes/default.css',
      // format: 'es'
    },
    plugins: [
      styles({
        mode: 'extract',
        assetDir: 'assets'
      })
    ]
  },
];

export default config