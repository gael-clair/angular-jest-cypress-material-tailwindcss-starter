const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  verbose: true,
  setupFilesAfterEnv: ['./src/setupJest.ts'],
  coverageDirectory: './coverage/ut',
  collectCoverageFrom: ['./src/app/**/*.{component,directive,pipe,service}.ts'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.spec.json',
    },
  },
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Unit tests',
        outputDirectory: './reports/ut',
        outputName: 'ut.xml',
      },
    ],
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Unit tests Report',
        outputPath: './reports/ut/ut.html',
        includeFailureMsg: true,
      },
    ],
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
};
