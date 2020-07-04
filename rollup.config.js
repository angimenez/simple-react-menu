import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: "src/MenuContainer.js",
  output: {
    file: "index.js",
    format: "cjs",
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ],
};
