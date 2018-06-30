/* eslint func-names: 0 */

module.exports = function (config) {
  const configuration = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'public/src/*.js',
      'spec/*Spec.js'
    ],
    exclude: [
    ],
    preprocessors: { 'public/src/*.js': ['coverage'] },
    reporters: ['spec', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true,
    concurrency: Infinity
  };
  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }
  config.set(configuration);
};
