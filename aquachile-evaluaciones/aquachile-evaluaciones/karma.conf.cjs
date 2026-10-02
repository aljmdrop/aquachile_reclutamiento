// Karma + Jasmine para las pruebas del frontend.
// karma-esbuild compila JSX/ESM de cada *.spec.js(x) y sus imports.
module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-esbuild'),
      require('karma-spec-reporter'),
    ],
    files: [{ pattern: 'src/**/*.spec.{js,jsx}', watched: false }],
    preprocessors: { 'src/**/*.spec.{js,jsx}': ['esbuild'] },
    esbuild: {
      jsx: 'automatic',
      target: 'es2020',
      define: { 'process.env.NODE_ENV': '"test"' },
    },
    reporters: ['spec'],
    browsers: ['ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: { base: 'ChromeHeadless', flags: ['--no-sandbox'] },
    },
    singleRun: true,
  })
}
