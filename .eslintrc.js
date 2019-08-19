module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", "airbnb"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": [0],
    "jsx-quotes": ["error", "prefer-single"],
    'import/prefer-default-export': "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "prefer-destructuring": ["error", {
      "AssignmentExpression": {
        "array": false,
      }
    }],
  }
};
