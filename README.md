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

## Other things to know

* Always check in `yarn.lock` or `package.lock.json` into git or version control.
* The `.env` file is configured to do the following:

  * `BROWSER=none`: prevents browser from opening when invoking `npm start` or `yarn start`
  * `NODE_PATH=src`: Same as `NODE_PATH` [in Node.js](https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders), but only relative folders are allowed. Used to import relative files with absolute paths that stem from `src`.

  ```js
  // NODE_PATH=src allows us to import relative modules like this

  import Button from "components/Button";
  import ButtonContainer from "containers/Button";

  /*
    Without NODE_PATH=src, we would have to import relative modules with relative paths which can be very fragile if components have to move around inside an app file structure.
  */
  ```

## Questions for India and DTE FEDs

* What is best way to style presentational components and layout keeping consistency and preference of DTE technologies in mind?

  * Answer: Bootstrap? [React Bootstrap](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-bootstrap)?
  * Brian: Clarify with DTE and India

* Testing with Jest + Enzyme, standards should save us time and identify regressions clearly. Should be API and props focused to ensure matching data shapes.

  * No answer yet
  * Brian: Discuss and align with Bill

* Redux Thunk? Or Redux Sagas?
  * No answer yet
  * Brian: Discuss and align with Bill
