/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: [require.resolve('@repo/config-eslint/next.js')],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
	},
	ignorePatterns: ['tailwind.config.ts', 'postcss.config.cjs'],
}
