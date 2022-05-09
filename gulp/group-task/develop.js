/*---------------------------------------------
 * DEVELOP STATIC CONFIGURATION GROUP TASK *
 *----------------------------------------------*/

(function () {
	'use strict';

	module.exports = function (GULP, GLP, CONFIG, UTILS) {
		GULP.task(
			'develop',
			'---' +
			'\n\t1.- Compila todo el desarrollo para que se genera por primera vez la carpeta de GULP.' +
			'\n\t2.- Levanta el entorno de desarrollo',
			develop
		);

		function develop() {
			GLP.runSequence(
				'clean',
				'assets',
				'libs',
				'scripts',
				'template',
				'scss',
				'serve',
				'watch'
			);
		}
	};
})();