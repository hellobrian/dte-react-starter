# DTE React Starter

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) with additional configurations added on top.

## Dependencies

These are the added `dependencies` not included with `create-react-app` but are needed for react development.

* `prop-types`: used for typechecking with `PropTypes` ([react docs](https://reactjs.org/docs/typechecking-with-proptypes.html) | [github](https://github.com/facebook/prop-types))

## DevDependencies

These are the added `devDependencies` not included with `create-react-app` but are needed for react development.

* `husky`: provides `precommit` npm script for running any scripts that need to run before `git commit`; used with `lint-staged`. ([github](https://github.com/typicode/husky))
* `lint-staged`: enables linters to run on targeted staged files only, used with `husky` for `precommit` script and uses `prettier-eslint-cli` for linting ([github](https://github.com/okonet/lint-staged)).
* `prettier-eslint-cli`: autoformats code according to eslint configuration (see `.eslintrc`). ([github](https://github.com/prettier/prettier-eslint-cli))

## Code Style Formatting

### Code is automaticallty formatted in precommit hook

By default, this project uses [ESLint](https://eslint.org/) to define coding style and extends the rules from `eslint-config-react-app`, which comes included with `create-react-app`.

Coding style rules are automattically enforced on all JavaScript files (`*.js`) in the src folder and all subfolders. This project has a precommit hook using a combination of the following packages:

* `husky`
* `lint-staged`
* `prettier-eslint-cli`

**How it works:** When you make a commit in this project using `git commit`, the `precommit` npm script gets triggered. This will autoformat any staged JavaScript files according to the configurations in `.eslintrc`.

### Editor Config

EditorConfig is setup to maintain consistent coding styles between different editors and IDEs and Operating Systems that cannot be captured in ESLint. To make use of this configuration, please add the appropriate plugin for your preferred editor or IDE. Rules are established in `.editorconfig`.

* [Download a plugin to use EditorConfig](http://editorconfig.org/#download)

**How it works**: appropriate plugin for your preferred editor or IDE and that's it. The plugin will run in the background and get triggered on save.
