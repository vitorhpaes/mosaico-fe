module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'unused-imports', 'prettier'],
    rules: {
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 0,

        'prettier/prettier': 'error',

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'unused-imports/no-unused-imports': ['error'],
        'unused-imports/no-unused-imports-ts': 2,
        'unused-imports/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],

        '@typescript-eslint/no-use-before-define': 'off',
        'no-use-before-define': 'off',

        'node/handle-callback-err': 'off',

        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',

        'no-void': [
            'error',
            {
                allowAsStatement: true,
            },
        ],
        '@typescript-eslint/no-throw-literal': 'off',
        'no-throw-literal': 'off',
    },
}
