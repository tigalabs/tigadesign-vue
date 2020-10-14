export default {
  // input: './packages/main.js',
  // output: {
  //   name: 'tiga-ui',
  //   file: 'bundle.js',
  //   format: 'umd'
  // },
  outDir: 'lib',
  emitAssets: true,
  rollupInputOptions: {
    input: './packages/main.js',
  },
  rollupOutputOptions: {
    name: 'tiga-ui',
    file: 'bundle.js',
    format: 'umd'
  },
}

