const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:import/recommended',
		require.resolve('@vercel/style-guide/eslint/next'),
		require.resolve('@vercel/style-guide/eslint/typescript'),
		'plugin:react/jsx-runtime',
		'eslint-config-turbo',
	],
	globals: {
		React: true,
		JSX: true,
	},
	env: {
		node: true,
		browser: true,
	},
	plugins: ['only-warn'],
	parserOptions: {
		project,
	},
	settings: {
		'import/resolver': {
			typescript: {
				project,
			},
		},
		react: {
			version: 'detect',
		},
	},
	rules: {
		// JS
		'prefer-arrow-callback': 'error',
		'no-unused-vars': 'off',
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'no-unused-vars': 0,

		// TS
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ argsIgnorePattern: '^_', ignoreRestSiblings: true },
		],
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/consistent-type-imports': 'error',

		// Import
		'import/order': [
			'error',
			{
				groups: [
					['builtin', 'external'],
					'internal',
					['sibling', 'parent', 'index'],
					'object',
					'type',
				],
				pathGroups: [
					{
						pattern: '@/**',
						group: 'internal',
						position: 'after',
					},
					{
						pattern: 'next/**',
						group: 'builtin',
						position: 'before',
					},
					{
						pattern: 'react',
						group: 'builtin',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['type'],
				'newlines-between': 'always',
			},
		],
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',

		// React
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
	},
	ignorePatterns: [
		// Ignore dotfiles
		'.*.js',
		'node_modules/',
	],
	overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
}
