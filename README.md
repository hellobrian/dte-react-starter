# DTE React Starter

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) with the additions of the following packages for development.

```json
{
  "dependencies": {
    ...,
    "prop-types": "~15.6.0",
  },
  "devDependencies" : {
    "husky": "~0.14.3",
    "lint-staged": "~6.1.0",
    "prettier-eslint-cli": "~4.7.0"
  }
}
```

## Dependencies

These are the added `dependencies` not included with `create-react-app`.

* `prop-types`: used for typechecking with `PropTypes` ([react docs](https://reactjs.org/docs/typechecking-with-proptypes.html) | [github](https://github.com/facebook/prop-types))

## DevDependencies

These are the added `devDependencies` not included with `create-react-app`.

* `husky`: provides `precommit` npm script for running any scripts that need to run before `git commit`; used with `lint-staged`. ([github](https://github.com/typicode/husky))
* `lint-staged`: enables linters to run on targeted staged files only, used with `husky` for `precommit` script and uses `prettier-eslint-cli` for linting ([github](https://github.com/okonet/lint-staged)).
* `prettier-eslint-cli`: autoformats code according to eslint configuration (see `.eslintrc`). ([github](https://github.com/prettier/prettier-eslint-cli))
