/* eslint-disable quote-props */
module.exports = {
  parser        : '@typescript-eslint/parser',
  env           : {
    browser : true,
    node    : true,
    es6     : true,
    jest    : true,
  },
  extends       : 'airbnb',
  globals       : {
    Atomics           : 'readonly',
    SharedArrayBuffer : 'readonly',
  },
  parserOptions : {
    ecmaFeatures : {
      jsx: true,
    },
    ecmaVersion  : 2018,
    sourceType   : 'module',
  },
  plugins       : ['react'],
  rules         : {
    'comma-dangle'                : ['error', {
      'arrays'    : 'always-multiline',
      'objects'   : 'always-multiline',
      'imports'   : 'always-multiline',
      'exports'   : 'always-multiline',
      'functions' : 'always-multiline',
    }],
    'max-len': ['error', 120, 2, {
      'ignoreUrls'             : true,
      'ignoreComments'         : false,
      'ignoreRegExpLiterals'   : true,
      'ignoreStrings'          : true,
      'ignoreTemplateLiterals' : true,
    }],
    'key-spacing'                 : 'off',
    'no-multi-spaces'             : 'off',
    'no-unused-vars'              : 'off',
    'no-else-return'              : 'off',
    'arrow-body-style'            : 'off',
    'object-curly-newline'        : 'off',
    'no-template-curly-in-string' : 'off',

    'import/extensions'                 : 'off',
    'import/no-unresolved'              : 'off',
    'import/prefer-default-export'      : 'off',
    'import/no-extraneous-dependencies' : 'off',

    'react/jsx-equals-spacing'          : 'off',
    'react/require-default-props'       : 'off',
    'react/react-in-jsx-scope'          : 'off',
    'react/jsx-filename-extension'      : [1, { 'extensions': ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading'      : 'off',
    'react/jsx-one-expression-per-line' : 'off',
  },
};
