# Angular + Jest + Cypress + Material + TailwindCSS starter<!-- omit in toc -->

<p>
<a href="https://github.com/gael-clair/angular-jest-cypress-material-tailwindcss-starter/blob/master/LICENSE"><img src="https://img.shields.io/github/license/gael-clair/angular-jest-cypress-material-tailwindcss-starter" alt="License" /></a><br/>
<a href="https://github.com/gael-clair/angular-jest-cypress-material-tailwindcss-starter/issues"><img src="https://img.shields.io/github/issues/gael-clair/angular-jest-cypress-material-tailwindcss-starter" alt="Issues" /></a><br/>
<a href='https://coveralls.io/github/gael-clair/angular-jest-cypress-material-tailwindcss-starter?branch=master'><img src='https://coveralls.io/repos/github/gael-clair/angular-jest-cypress-material-tailwindcss-starter/badge.svg?branch=master' alt='Coverage Status' /></a><br/>
<a href="https://github.com/gael-clair/angular-jest-cypress-material-tailwindcss-starter"><img src="https://github.com/gael-clair/angular-jest-cypress-material-tailwindcss-starter/workflows/checks/badge.svg" /></a><br/>
</p>

## Table of Contents <!-- omit in toc -->

- [About this project](#about-this-project)
  - [Built with](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Build](#build)
    - [Development](#development)
    - [Unit tests](#unit-tests)
    - [End-To-End tests](#end-to-end-tests)
    - [Lint](#lint)
    - [Format](#format)
    - [Documentation](#documentation)
- [Continuous Integration](#continuous-integration)
  - [Workflow steps](#workflow-steps)
  - [Github configuration](#github-configuration)
  - [Checks on Pull Requests](#checks-on-pull-requests)
  - [Coveralls configuration](#coveralls-configuration)
- [Customization](#customization)
  - [Angular](#angular)
  - [UI Design](#ui-design)
    - [Material](#material)
    - [TailwindCSS](#tailwindcss)
  - [Unit tests with Jest](#unit-tests-with-jest)
  - [End-to-End tests with Cypress](#end-to-end-tests-with-cypress)
  - [Formatting with Prettier](#formatting-with-prettier)
  - [Style linting with Stylelint](#style-linting-with-stylelint)
  - [Git hooks](#git-hooks)
  - [Documentation generation](#documentation-generation)
  - [Dependencies](#dependencies)
    - [Added](#added)
    - [Removed (if project generated without _--minimal=true_ option)](#removed-if-project-generated-without---minimaltrue-option)

## About this project

This project is an Angular project using Jest instead of Karma, Cypress instead of Protractor, Angular Material and TailwindCSS. Moreover, formatting, style linting, documentation generation and git hooks (for linting) have been added to be more complete. This README explains all modifications made to initial Angular project.

### Built with

- [Node.js (Javascript Engine)](https://nodejs.org/)
- [Yarn v1 (Package Manager)](https://classic.yarnpkg.com/)
- [Angular (Single Page Application)](https://angular.io/)

## Getting Started

Before you begin we recommend you read about the basic building blocks that assemble this application:

- Angular - Angular's [Official Website](https://angular.io/) is a great starting point. You can also use [Thinkster Popular Guide](http://www.thinkster.io/), and [Egghead Videos](https://egghead.io/).
- Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.

### Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
- Yarn (v1) - You're going to use the [Yarn Package Manager](http://bower.io/) to manage your packages and dependencies. Follow these [instructions](https://yarnpkg.com/getting-started/) to install Yarn.

### Installation

1.  Clone the repo

```git
$ git clone https://github.com/gael-clair/angular-jest-cypress-material-tailwindcss-starter.git YOUR_REPO_FOLDER
```

2.  Get into repo folder

```sh
$ cd YOUR_REPO_FOLDER
```

3.  Add your repo as origin

```git
$ git remote add origin YOUR_REPO_URL
```

4. Update project name in `package.json`

5. Install dependencies

```sh
$ yarn install
```

6. Use the init script:

```sh
$ yarn run init
```

### Usage

#### Build

```sh
# build in dev mode
$ yarn build

# build in production mode
$ yarn build:prod
```

### Development

```sh
# start development server with live reload
$ yarn start
```

### Unit tests

```sh
# starts unit tests
$ yarn test

# starts unit tests with source/test files watch
$ yarn test:watch

# starts unit tests with coverage (reports in coverage/spec and report at reports/ut.xml)
$ yarn test:cov

# starts unit tests in debug mode
$ yarn test:debug

# starts unit tests in CI mode with coverage (reports in coverage/spec and report at reports/ut.xml)
$ yarn test:ci
```

### End-To-End tests

```sh
# starts http server and open cypress
$ yarn e2e

# starts http server and run cypress
$ yarn e2e:ci
```

### Lint

```sh
# lints source and test files
$ yarn lint

# lints source and test files and fixes errors if possible
$ yarn lint:fix

# lints source and test files and generate a report (report at reports/lint.xml)
$ yarn lint:ci

# lints style files
$ yarn lint:style

# lints style files and fixes errors if possible
$ yarn lint:style:fix

# lints style files and generate a report (report at reports/style.xml)
$ yarn lint:style:ci
```

### Format

```sh
# formats source and test files
$ yarn format
```

### Documentation

```sh
# generates project documentation
$ yarn doc
```

## Continuous Integration

The repo includes a [Github Action](https://github.com/features/actions) configuration for continuous integration (workflow file `.github/workflows/project.yml`) It is also integrated with [Coveralls](https://coveralls.io/) during workflow process.

### Workflow steps

- Install (with cache)
- Build
- Lint
- Unit tests
- Coveralls upload result of unit tests
- End-to-End tests
- Coveralls upload result of End-to-End tests
- Upload of coverage reports artifact
- Upload of build artifact

### Checks on Pull Requests

To be sure to pass checks before merging a Pull Request you should add required checks in `Repo Settings > Branches > Branch protection rules > Require status checks to pass before merging` :

- Coveralls - e2e-tests
- Coveralls - unit-tests
- checks (build, lint, test)
- coverage/coveralls

### Coveralls configuration

To add a check failure if coverage percentage is under a certain threshold, go to the repository page on Coveralls and go to `Settings > PULL REQUESTS ALERTS > COVERAGE THRESHOLD FOR FAILURE` and set minimal value for coverage percentage (for example 80\%).

## Customization

### Angular

This project is based on [Angular 9](https://angular.io/). The @angular/cli command used to generate this project is:

```sh
$ npx @angular/cli new starter --package-manager=yarn --routing=true --style=scss --minimal=true
```

### UI Design

#### TailwindCSS

[TailwindCSS](https://tailwindcss.com/) is used with Material to provide UI components and utilities.

1. Add tailwind dependencies:

```sh
$ yarn add -D tailwindcss ng-tailwindcss concurrently
```

2. Create `tailwind.config.js` file with:

```sh
$ npx tailwind init
```

3. Create file `src/tailwind.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Create file `ng-tailwind.js` file with:

```sh
$ npx ngtw configure
```

5. Update file `ng-tailwind.js` to be compatible with windows and linux:

```javascript
module.exports = {
  // Tailwind Paths
  configJS: 'tailwind.config.js',
  sourceCSS: 'src/tailwind.css', // replace \\ with /
  outputCSS: 'src/styles.css', // replace \\ with /
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: ['.ts', '.html', '.js'],
  extractors: [],
  content: [],
};
```

6. Update `angular.json` at `angular.json > projects > angular-jest-cypress-material-tailwindcss-starter > architect > build` and `angular.json > projects > angular-jest-cypress-material-tailwindcss-starter > architect > build`:

```json
{
  "build": {
    "options": {
      "styles": ["src/styles.scss", "src/styles.css"] // add styles.css file a source file for styles
    }
  }
}
```

7. Update `package.json` scripts:

```json
{
  "scripts": {
    "prestart": "ngtw build",
    "start": "concurrently -k -c \"green,yellow\" -n \"Serve,TailwindCSS\" \"ng serve\" \"ngtw watch\"",
    "build": "ngtw build && ng build",
    "build:prod": "ngtw build --purge && ng build --prod"
  }
}
```

#### Material

This project is using Material Design with [@angular/material](https://material.angular.io/) installed with:

```sh
$ yarn add @angular/cdk hammerjs

$ yarn ng add @angular/material
# Theme: Purple/Green
# No global Angular Material typography styles
# With browser animations for Angular Material
```

### Unit tests with Jest

Unit testing is based initially on the use of Karma/Jasmine but this project uses Jest instead. To add Jest:

1.  Install Jest and related dependencies

```sh
$ yarn add -D jest jest-preset-angular jest-junit @types/jest jest-html-reporter
```

2.  Change file `tsconfig.spec.json` with:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/out-tsc/spec"
  },
  "files": ["src/polyfills.ts"],
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```

3.  Create `jest.config.js` with:

```javascript
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  verbose: true,
  setupFilesAfterEnv: ['./src/setupJest.ts'],
  coverageDirectory: './coverage/ut',
  collectCoverageFrom: ['./src/app/**/*.ts'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.spec.json',
    },
  },
  testPathIgnorePatterns: ['cypress'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Unit tests',
        outputDirectory: './reports',
        outputName: 'ut.xml',
      },
      [
        './node_modules/jest-html-reporter',
        {
          pageTitle: 'Unit tests Report',
          outputPath: './reports/ut/ut.html',
          includeFailureMsg: true,
        },
      ],
    ],
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
};
```

4.  Create file `src/setupJest.ts` with:

```javascript
import 'jest-preset-angular';

const mock = () => {
  let storage: { [key: string]: string } = {};
  return {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string, value: string) => (storage[key] = value || ''),
    removeItem: (key: string) => delete storage[key],
    clear: () => (storage = {}),
  };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
    };
  },
});
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
});
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
```

5.  Update tests scripts of `package.json` with:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage ",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:ci": "jest --ci --runInBand --coverage"
  }
}
```

6.  If you generated the project without `--minimal=true`:

    1.  Some useless files could be deleted:

    ```sh
    $ rm karma.conf.js src/test.ts
    ```

    2.  Remove Karma dependencies:

    ```sh
    $ yarn remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
    ```

    3.  Remove Angular test target in `angular.json > projects > angular-jest-cypress-material-tailwindcss-starter > architect > test`

### End-to-End tests with Cypress

1.  Install cypress-schematic and dependencies (for coverage)

```sh
$ yarn add -D @briebug/cypress-schematic concurrently wait-on
```

2.  Add schematics to project

```sh
$ yarn ng add @briebug/cypress-schematic --noBuilder

# Remove Protractor
```

3. Update `angular.json` at `angular.json > projects > angular-jest-cypress-material-tailwindcss-starter > architect > lint` switching typescript config file for e2e from `e2e/tsconfig.json` to `cypress/tsconfig.json`:

```json
{
  "lint": {
    "builder": "@angular-devkit/build-angular:tslint",
    "options": {
      "tsConfig": ["tsconfig.app.json", "tsconfig.spec.json", "cypress/tsconfig.json"],
      "exclude": ["**/node_modules/**"]
    }
  }
}
```

4. Create test scripts in `package.json` to start a server and wait for server to start/run E2E tests:

```json
{
  "scripts": {
    "e2e": "concurrently --success first -k -c \"green,yellow\" -n \"Serve,Tests\" \"ng serve\" \"wait-on http-get://localhost:4200/ && cypress open\"",
    "e2e:ci": "concurrently --success first -k -c \"green,yellow\" -n \"Serve,Tests\" \"ng serve\" \"wait-on http-get://localhost:4200/ && cypress run\""
  }
}
```

5.  To add coverage to cypress:

    1. Install dependencies

    ```sh
    $ yarn add -D @angular-builders/custom-webpack istanbul-instrumenter-loader @istanbuljs/nyc-config-typescript source-map-support ts-node @cypress/code-coverage nyc istanbul-lib-coverage
    ```

    2.  Create file `cypress/coverage.webpack.js` with:

    ```javascript
    module.exports = {
      module: {
        rules: [
          {
            test: /\.(js|ts)$/,
            loader: 'istanbul-instrumenter-loader',
            options: { esModules: true },
            enforce: 'post',
            include: require('path').join(__dirname, '../src/app'),
            exclude: [/\.(e2e|spec)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/],
          },
        ],
      },
    };
    ```

    3. Update `angular.json` at `angular.json > projects > angular-jest-cypress-material-tailwindcss-starter > architect > build` and `angular.json > projects > angular-jest-cypress-material-tailwindcss-starter > architect > serve` with:

    ```json
    {
      "build": {
        // update builder to let us extend webpack config
        "builder": "@angular-builders/custom-webpack:browser",
        "configurations": {
          "e2e": {
            // add new configuration to extend webpack config only with E2E tests
            "customWebpackConfig": {
              "path": "cypress/coverage.webpack.js"
            }
          }
        }
      },
      "serve": {
        // update builder to let us extend webpack config
        "builder": "@angular-builders/custom-webpack:dev-server",
        "configurations": {
          "e2e": {
            // add new browser target
            "browserTarget": "angular-jest-cypress-material-tailwindcss-starter:build:e2e",
            // add new configuration to extend webpack config only with E2E tests
            "customWebpackConfig": {
              "path": "cypress/coverage.webpack.js"
            }
          }
        }
      }
    }
    ```

    4. Create file `.nycrc.json` with:

    ```json
    {
      "extends": "@istanbuljs/nyc-config-typescript",
      "report-dir": "./coverage/e2e"
    }
    ```

    5. Add to file `cypress/support/index.ts`:

    ```typescript
    import './commands';
    import '@cypress/code-coverage/support';
    ```

    6. Update file `cypress/plugins/index.js` with:

    ```typescript
    const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');
    const registerCodeCoverageTasks = require('@cypress/code-coverage/task');

    module.exports = (on, config) => {
      on('file:preprocessor', cypressTypeScriptPreprocessor);
      return registerCodeCoverageTasks(on, config); // activate coverage task
    };
    ```

    7. Update test scripts in `package.json` to use `e2e` configuration with serve:

    ```json
    {
      "scripts": {
        "e2e": "concurrently --success first -k -c \"green,yellow\" -n \"Serve,Tests\" \"ng serve --configuration=e2e\" \"wait-on http-get://localhost:4200/ && cypress open\"",
        "e2e:ci": "concurrently --success first -k -c \"green,yellow\" -n \"Serve,Tests\" \"ng serve --configuration=e2e\" \"wait-on http-get://localhost:4200/ && cypress run\""
      }
    }
    ```

    6.  If you generated project without `--minimal=true` you could delete some file and configuration:

        1.  Remove Angular e2e target in `angular.json > projects > angular-jest-cypress-material-tailwindcss-starter > architect > e2e`

        2.  Remove Jasmine dependencies:

        ```sh
        $ yarn remove jasmine-core jasmine-spec-reporter @types/jasmine @types/jasminewd2
        ```

### Formatting with Prettier

1.  Install Prettier and dependencies to deal with Typescript and linters:

```sh
$ yarn add -D prettier tslint-config-prettier tslint-plugin-prettier
```

2.  Create Prettier configuration file `.prettierrc` with:

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "endOfLine": "lf",
  "printWidth": 120,
  "tabWidth": 2
}
```

3.  Add `tslint-config-prettier` preset and `tslint-plugin-prettier` plugin to `tslint.json` to prevent TSLint to use rules that Prettier will take care of:

```json
{
  "extends": ["tslint:recommended", "tslint-plugin-prettier", "tslint-config-prettier"],
  "rules": {
    "prettier": true
  }
}
```

4. Add format script in `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\""
  }
}
```

### Style linting with Stylelint

In order to add linting of style files (css and scss), [Stylelint](https://stylelint.io/) is used with some rules presets.

1.  Install Stylelint dependencies:

```sh
$ yarn add -D stylelint stylelint-config-recommended stylelint-junit-formatter stylelint-no-unsupported-browser-features stylelint-config-prettier stylelint-prettier
```

2.  Create Stylelint configuration `.stylelintrc.json` file with:

```json
{
  "extends": ["stylelint-prettier/recommended", "stylelint-config-recommended"],
  "plugins": ["stylelint-no-unsupported-browser-features"],
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["tailwind"]
      }
    ],
    "plugin/no-unsupported-browser-features": [
      true,
      {
        "severity": "warning"
      }
    ],
    "no-empty-source": null
  }
}
```

7. Add style linting scripts in `package.json`:

```json
{
  "scripts": {
    "lint:style": "stylelint \"src/app/**/*.scss\" \"src/styles.scss\" \"src/tailwind.css\"",
    "lint:style:ci": "stylelint \"src/app/**/*.scss\" \"src/styles.scss\" \"src/tailwind.css\" --custom-formatter \"node_modules/stylelint-junit-formatter\" > ./reports/style.xml",
    "lint:style:fix": "stylelint \"src/app/**/*.scss\" \"src/styles.scss\" \"src/tailwind.css\" --fix"
  }
}
```

### Git hooks

One pre-commit git hook is activated with [Husky](https://github.com/typicode/husky) to call [lint-staged](https://github.com/okonet/lint-staged) to format and lint files to be commited. If one operation fails commit is canceled. One commit-msg git hook is set to let [@commitlint/cli](https://commitlint.js.org/) lint commit message to ensure that it follows conventional-changelog format.

To configure git hooks you have to:

1.  Add husky, commitlint and cz-conventional-changelog dependencies:

```sh
yarn add -D husky lint-staged @commitlint/cli @commitlint/config-conventional cz-conventional-changelog
```

2.  Add cz-conventional-changelog configuration to `package.json`:

```json
"config": {
  "commitizen": {
    "path": "cz-conventional-changelog"
  }
}
```

3.  Create file `.commitlintrc.json` with:

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```

4.  Create file `.huskyrc` with:

```json
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
    "pre-commit": "lint-staged"
  }
}
```

5.  Create a file `.lintstagedrc` with JSON configuration:

```json
{
  "src/**/*.{json,css,sass,scss,less,html,graphql,yml}": "prettier --write",
  "src/**/*.{ts,tsx,js,jsx}": ["prettier --write", "tslint --fix"]
}
```

### Documentation generation

[Compodoc](https://compodoc.app/) is used to write documentation.

1. Add dependencies

```sh
$ yarn add -D @compodoc/compodoc
```

2. Add new script to `package.json`

```json
{
  "scripts": {
    "doc": "compodoc -p tsconfig.json --theme material"
  }
}
```

### Dependencies

#### Added

- Init

  - [cross-var](https://www.npmjs.com/package/cross-var)

  ```sh
  yarn add -D cross-var
  ```

- Git hooks:

  - [husky](https://github.com/typicode/husky)
  - [@commitlint/cli](https://commitlint.js.org/)
  - [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
  - [commitizen](https://www.npmjs.com/package/commitizen)
  - [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)

  ```sh
  yarn add -D husky @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog
  ```

- UI design:

  - [@angular/material](https://material.angular.io/)
  - [@angular/cdk](https://www.npmjs.com/package/@angular/cdk)
  - [hammerjs](https://hammerjs.github.io/)
  - [tailwindcss](https://tailwindcss.com/)
  - [ng-tailwindcss](https://www.npmjs.com/package/ng-tailwindcss)
  - [concurrently](https://www.npmjs.com/package/concurrently)

  ```sh
  # Material (added with ng add @angular/material command)
  $ yarn add @angular/material @angular/cdk hammerjs

  # TailwindCSS
  $ yarn add -D tailwindcss ng-tailwindcss concurrently
  ```

- Testing:

  - [jest](https://jestjs.io/)
  - [jest-junit](https://www.npmjs.com/package/jest-junit)
  - [jest-preset-angular](https://www.npmjs.com/package/jest-preset-angular)
  - [jest-html-reporter](https://www.npmjs.com/package/jest-html-reporter)
  - [@types/jest](https://www.npmjs.com/package/@types/jest)
  - [istanbul-instrumenter-loader](https://www.npmjs.com/package/istanbul-instrumenter-loader)
  - [@angular-builders/custom-webpack](https://www.npmjs.com/package/@angular-builders/custom-webpack)
  - [concurrently](https://www.npmjs.com/package/concurrently)
  - [wait-on](https://www.npmjs.com/package/wait-on)
  - [@briebug/cypress-schematic](https://www.npmjs.com/package/@briebug/cypress-schematic)
  - [@istanbuljs/nyc-config-typescript](https://www.npmjs.com/package/@istanbuljs/nyc-config-typescript)
  - [source-map-support](https://www.npmjs.com/package/source-map-support)
  - [ts-node](https://www.npmjs.com/package/ts-node)
  - [@cypress/code-coverage](https://www.npmjs.com/package/@cypress/code-coverage)
  - [nyc](https://www.npmjs.com/package/nyc)
  - [istanbul-lib-coverage](https://www.npmjs.com/package/istanbul-lib-coverage)

  ```sh
  $ yarn add -D jest jest-junit jest-preset-angular @types/jest jest-html-reporter @angular-builders/custom-webpack istanbul-instrumenter-loader @istanbuljs/nyc-config-typescript source-map-support ts-node @cypress/code-coverage nyc istanbul-lib-coverage concurrently wait-on @briebug/cypress-schematic
  ```

- Documentation:

  - [@compodoc/compodoc](https://compodoc.app/)

  ```sh
  $ yarn add -D @compodoc/compodoc
  ```

- Formatting:

  - [prettier](https://prettier.io/)
  - [tslint-config-prettier](https://www.npmjs.com/package/tslint-config-prettier)
  - [tslint-plugin-prettier](https://www.npmjs.com/package/tslint-plugin-prettier)

  ```sh
  $ yarn add -D prettier tslint-config-prettier tslint-plugin-prettier
  ```

- Linting:

  - [stylelint](https://stylelint.io/)
  - [stylelint-config-recommended](https://www.npmjs.com/package/stylelint-config-recommended)
  - [stylelint-junit-formatter](https://www.npmjs.com/package/stylelint-junit-formatter)
  - [stylelint-no-unsupported-browser-features](https://www.npmjs.com/package/stylelint-no-unsupported-browser-features)
  - [stylelint-config-prettier](https://www.npmjs.com/package/stylelint-config-prettier)
  - [stylelint-prettier](https://www.npmjs.com/package/stylelint-prettier)

  ```sh
  $ yarn add -D stylelint stylelint-config-recommended stylelint-junit-formatter stylelint-no-unsupported-browser-features stylelint-config-prettier stylelint-prettier
  ```

#### Removed (if project generated without _--minimal=true_ option)

- jasmine-core
- jasmine-spec-reporter
- karma
- karma-chrome-launcher
- karma-coverage-istanbul-reporter
- karma-jasmine
- karma-jasmine-html-reporter
- protractor
- @types/jasmine
- @types/jasminewd2

```sh
$ yarn remove jasmine-core jasmine-spec-reporter karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter protractor @types/jasmine @types/jasminewd2
```
