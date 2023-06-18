const fs = require('fs')
const path = require('path')
const isTypeAwareEnabled = process.env.DISABLE_TYPE_AWARE === undefined

const tsEslintConfig = {
  'no-undef': 0,
  '@typescript-eslint/adjacent-overload-signatures': 0,
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/await-thenable': 0,
  '@typescript-eslint/ban-ts-comment': 0,
  '@typescript-eslint/ban-tslint-comment': 0,
  'brace-style': 'off',
  '@typescript-eslint/brace-style': 0,
  '@typescript-eslint/class-literal-property-style': 0,
  'comma-dangle': 'off',
  '@typescript-eslint/comma-dangle': 0,
  'comma-spacing': 'off',
  '@typescript-eslint/comma-spacing': 0,
  '@typescript-eslint/consistent-indexed-object-style': 1,
  '@typescript-eslint/consistent-type-assertions': 0,
  '@typescript-eslint/consistent-type-definitions': 0,
  '@typescript-eslint/consistent-type-imports': 1,
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': 0,
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': isTypeAwareEnabled ? 1 : 0,
  '@typescript-eslint/explicit-function-return-type': 0,
  'func-call-spacing': 'off',
  '@typescript-eslint/func-call-spacing': 0,
  indent: 'off',
  'init-declarations': 'off',
  '@typescript-eslint/init-declarations': 0,
  'keyword-spacing': 'off',
  '@typescript-eslint/keyword-spacing': 0,
  'lines-between-class-members': 'off',
  '@typescript-eslint/lines-between-class-members': 0,
  '@typescript-eslint/member-delimiter-style': 0,
  '@typescript-eslint/member-ordering': 0,
  '@typescript-eslint/method-signature-style': 'error',
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 0,
  '@typescript-eslint/no-base-to-string': 0,
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-confusing-void-expression': 0,
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': 'error',
  'no-duplicate-imports': 'off',
  '@typescript-eslint/no-duplicate-imports': 0,
  '@typescript-eslint/no-dynamic-delete': 0,
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 0,
  '@typescript-eslint/no-empty-interface': 1,
  '@typescript-eslint/no-extra-non-null-assertion': 0,
  'no-extra-parens': 'off',
  '@typescript-eslint/no-extra-parens': 0,
  'no-extra-semi': 'off',
  '@typescript-eslint/no-extra-semi': 0,
  '@typescript-eslint/no-extraneous-class': 0,
  '@typescript-eslint/no-floating-promises': 0,
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-implicit-any-catch': 0,
  'no-implied-eval': 'off',
  '@typescript-eslint/no-implied-eval': 0,
  '@typescript-eslint/no-inferrable-types': 0,
  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 1,
  '@typescript-eslint/no-invalid-void-type': 0,
  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': 'error',
  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': 0,
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': 0,
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 0,
  '@typescript-eslint/no-namespace': 1,
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-parameter-properties': 'off',
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',
  '@typescript-eslint/no-require-imports': 0,
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  'no-throw-literal': 'off',
  '@typescript-eslint/no-throw-literal': isTypeAwareEnabled ? 2 : 0,
  '@typescript-eslint/no-type-alias': 0,
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 0,
  '@typescript-eslint/no-unnecessary-condition': 0,
  '@typescript-eslint/no-unnecessary-qualifier': 0,
  '@typescript-eslint/no-unnecessary-type-arguments': 0,
  '@typescript-eslint/no-unnecessary-type-assertion': 0,
  '@typescript-eslint/no-unnecessary-type-constraint': 0,
  '@typescript-eslint/no-unsafe-assignment': 0,
  '@typescript-eslint/no-unsafe-call': 0,
  '@typescript-eslint/no-unsafe-member-access': 0,
  '@typescript-eslint/no-unsafe-return': 0,
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'error',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/non-nullable-type-assertion-style': 0,
  '@typescript-eslint/prefer-as-const': 0,
  '@typescript-eslint/prefer-enum-initializers': 0,
  '@typescript-eslint/prefer-for-of': 0,
  '@typescript-eslint/prefer-function-type': 0,
  '@typescript-eslint/prefer-includes': 0,
  '@typescript-eslint/prefer-literal-enum-member': 0,
  '@typescript-eslint/prefer-namespace-keyword': 0,
  '@typescript-eslint/prefer-nullish-coalescing': 0,
  '@typescript-eslint/prefer-optional-chain': 0,
  '@typescript-eslint/prefer-readonly': 0,
  '@typescript-eslint/prefer-readonly-parameter-types': 0,
  '@typescript-eslint/prefer-reduce-type-parameter': 0,
  '@typescript-eslint/prefer-regexp-exec': 0,
  '@typescript-eslint/prefer-string-starts-ends-with': 0,
  '@typescript-eslint/prefer-ts-expect-error': 0,
  '@typescript-eslint/promise-function-async': 0,
  quotes: 'off',
  '@typescript-eslint/quotes': 0,
  '@typescript-eslint/require-array-sort-compare': 0,
  'require-await': 'off',
  '@typescript-eslint/require-await': 0,
  '@typescript-eslint/restrict-plus-operands': 0,
  '@typescript-eslint/restrict-template-expressions': 0,
  'no-return-await': 'off',
  '@typescript-eslint/return-await': 0,
  semi: 'off',
  '@typescript-eslint/semi': 0,
  'space-before-function-paren': 'off',
  '@typescript-eslint/space-before-function-paren': 0,
  'space-infix-ops': 'off',
  '@typescript-eslint/space-infix-ops': 0,
  '@typescript-eslint/strict-boolean-expressions': 0,
  '@typescript-eslint/switch-exhaustiveness-check': isTypeAwareEnabled ? 2 : 0,
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/type-annotation-spacing': 'error',
  '@typescript-eslint/typedef': 'error',
  '@typescript-eslint/unbound-method': 0,
  '@typescript-eslint/unified-signatures': 'error',
  '@typescript-eslint/indent': 0,
  // Makes no sense to allow type inferrence for expression parameters, but require typing the response
  '@typescript-eslint/no-use-before-define': "off",
  camelcase: 0,
  '@typescript-eslint/camelcase': 0,
  '@typescript-eslint/no-var-requires': 0,
  // Common abbreviations are known and readable
  '@typescript-eslint/explicit-member-accessibility': 0,
  '@typescript-eslint/interface-name-prefix': 0,
  '@typescript-eslint/no-non-null-assertion': 0,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/ban-types': 1,
  '@typescript-eslint/explicit-module-boundary-types': 0,
  '@typescript-eslint/naming-convention': 0,
  '@typescript-eslint/no-unused-vars': [
    'error',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
  ],
};

const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  babelOptions: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  },
  requireConfigFile: false,
  project: isTypeAwareEnabled ? './tsconfig.json' : undefined,
}

const isJsMoreTs = async (path = 'src') => {
  const fg = require('fast-glob')
  const jsFiles = await fg(`${path}/src/**/*.{js,jsx}`, { deep: 3 })
  const tsFiles = await fg(`${path}/src/**/*.{ts,tsx}`, { deep: 3 })
  return jsFiles.length > tsFiles.length
}

const isTsProject = fs.existsSync(
  path.join(process.cwd() || '.', './tsconfig.json'),
)

if (isTsProject) {
  try {
    isJsMoreTs(process.cwd()).then((jsMoreTs) => {
      if (!jsMoreTs) return
      console.log('这是一个 TypeScript 项目，如果不是请删除 tsconfig.json')
    })
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  extends: [
    'plugin:react/recommended',
  ],
  parser: '@babel/eslint-parser',
  plugins: ['react', 'jest', '@babel', 'unicorn', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    strict: ['error', 'never'],
    '@babel/new-cap': 0,
    '@babel/no-invalid-this': 0,
    '@babel/no-unused-expressions': 2,
    '@babel/object-curly-spacing': 0,
    '@babel/semi': ['error', 'never'],
    'react/display-name': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-array-index-key': 'warn',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks deps of Hooks
    'react/require-default-props': 0,
    'react/jsx-fragments': 0,
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/sort-comp': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-one-expression-per-line': 0,
    'generator-star-spacing': 0,
    'function-paren-newline': 0,
    'sort-imports': 0,
    'class-methods-use-this': 0,
    'no-confusing-arrow': 0,
    'linebreak-style': 0,
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': {
      node: {
        extensions: isTsProject
          ? ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
          : ['.js', '.jsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
    react: {
      version: 'detect',
    },
  },
  overrides: isTsProject
    ? [
        {
          files: ['**/*.{ts,tsx}'],
          parser: '@typescript-eslint/parser',
          rules: tsEslintConfig,
          extends: ['plugin:@typescript-eslint/recommended'],
        },
      ]
    : [],

  parserOptions,
}
