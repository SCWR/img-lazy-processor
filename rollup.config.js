import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import {terser} from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import {version, author, repository} from './package.json'
console.log(terser)
const compress = process.env.NODE_ENV === 'production'

const banner =
`/*!
 * img-lazy-processor.js v${version}
 * (c) 2019-${new Date().getFullYear()} ${author}
 * ${repository.url.replace('git+', '')}
 * Released under the MIT License.
 */
`
const config = {
  input: 'src/index.js',
  output: !compress ? [{
    file: 'dist/img-lazy-processor.js',
    format: 'umd',
    name: 'ImgLazyProcessor',
    banner,
  }, {
    file: 'dist/img-lazy-processor.esm.js',
    format: 'es',
    name: 'ImgLazyProcessor',
    banner,
  }, {
    file: 'dist/img-lazy-processor.common.js',
    format: 'cjs',
    name: 'ImgLazyProcessor',
    banner,
  }] : [{
    file: 'dist/img-lazy-processor.min.js',
    format: 'umd',
    name: 'ImgLazyProcessor',
    sourcemap: true,
    banner,
  }],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**', // 只编译源代码
    }),
    commonjs(),
    ...(compress ? [terser({
      compress: {
        pure_funcs: ['console.log'],
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
      // sourcemap: true, // isError
    })] : []),
  ],
}

export default config

