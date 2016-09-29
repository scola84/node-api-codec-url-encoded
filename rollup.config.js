import buble from 'rollup-plugin-buble';

export default {
  dest: './dist/api-codec-url-encoded.js',
  entry: 'index.js',
  format: 'cjs',
  external: [
    'querystring',
    'stream'
  ],
  plugins: [
    buble()
  ]
};
