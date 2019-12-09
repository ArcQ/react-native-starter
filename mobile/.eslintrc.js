const path = require('path');

module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'airbnb',
  ],
  'parserOptions': {
    "ecmaVersion": 6,
    "sourceType": "module",
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [
    "redux-saga",
    "react",
    "jsx-a11y",
    'react-native',
    'jest'
  ],
  'env': {
    'jest': true,
    "react-native/react-native": true
  },
  'globals': {},
  'settings': {
    'import/resolver': {
      'node':{
        'moduleDirectory': [
          path.resolve('src'),
          path.resolve('node_modules'),
        ]
      }
    }
  },
  'rules': {
    'react/jsx-filename-extension': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-props-no-spreading': 0,
    'max-len': [1, 80, 2],
    'import/no-named-as-default': 0,
    'no-param-reassign': ['error', { 'props': false }],
    'no-mixed-operators': 1,
    'no-underscore-dangle': 0,
    'import/no-unresolved': 2,
    'func-names':0,
    // temporary since webpack-resolver not working with aliases in webpack2
    'import/no-extraneous-dependencies':0,
    // exception for class methods for phaser api
    'class-methods-use-this':0,
    'react/require-default-props':0,
    'array-callback-return':0,
    'react/destructuring-assignment':0,
    'space-before-function-paren':0,
    'arrow-parens':0,
    'import/prefer-default-export':0,
    'implicit-arrow-linebreak':0,
  },
}
