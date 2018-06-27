/* eslint 'func-names': 0 */

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'public/src/*.js',
      'spec/*Spec.js'
    ],
    browsers: ['Chrome'],
    singleRun: true,
    reporters: ['spec', 'coverage'],
    preprocessors: { 'public/src/*.js': ['coverage'] }
  });
};
