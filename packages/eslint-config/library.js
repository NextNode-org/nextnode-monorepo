/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [require.resolve('eslint-config-mkw/base'), 'eslint-config-turbo'],
	globals: {
		React: true,
		JSX: true,
	},
	ignorePatterns: [
		// Ignore dotfiles
		'.*.js',
		'node_modules/',
		'dist/',
	],
}
