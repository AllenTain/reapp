define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = '../../index.html';

	registerSuite({
		name: 'Todo (functional)',

		'submit form': function () {
			return this.remote
				.get(require.toUrl(url))
				.findById('menuToggle')
				.click()
				.getProperty('margin-left')
				.then(function (val) {
					/*something*/
				});
		}
	});
});