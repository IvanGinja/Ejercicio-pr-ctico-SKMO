/*---------------------------------------------
 * SCRIPTS JS CONFIGURATION TASK *
 *----------------------------------------------*/

/* Concat *.js files, output -> build/js/ */


(function () {
	'use strict';

	module.exports = function (GULP, GLP, CONFIG, UTILS) {
		GULP.task(
			'scripts',
			'Concatena archivos Js en ES6 y compila a ES5. Genera: ' + CONFIG.folderPaths.build.js + CONFIG.files.jsConcatAll,
			scripts
		);

		function scripts() {
			var listSrc = [];
			switch(CONFIG.js) {
				case 'jquery':
					listSrc = [
						GLP.path.join(CONFIG.folderPaths.js.jquery.root, CONFIG.files.jsConfig) + '.js',
						CONFIG.folderPaths.js.jquery.components + '**/*.js',
						GLP.path.join(CONFIG.folderPaths.js.jquery.root, CONFIG.files.jsDev) + '.js'
					];
					break;
				case 'es6':
				default:
					listSrc = [
						GLP.path.join(CONFIG.folderPaths.js.es6.root, CONFIG.files.jsConfig) + '.js',
						CONFIG.folderPaths.js.es6.utilities + '**/*.js',
						CONFIG.folderPaths.js.es6.classes + '**/*.js',
						GLP.path.join(CONFIG.folderPaths.js.es6.root, CONFIG.files.jsDev) + '.js'
					];
					break;
			}
			
			return GULP.src(listSrc)
				.pipe(GLP.babel({
					"presets": ["@babel/preset-env"]
				}))
				.pipe(GLP.concat(CONFIG.files.jsDev + '.js'))
				.pipe(GLP.eslint())
				.pipe(GLP.eslint.format())
				.pipe(GULP.dest(CONFIG.folderPaths.build.js));
		  }
	};
})();