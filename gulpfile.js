/*-------------------------------------------------
 * GULP's FILE CONFIGURATION *
 --------------------------------------------------*/

(function () {
	'use strict';

	/*--- LIB'S REQUIRE ---*/

	const GULP = require('gulp-help')(require('gulp'));
	const CONFIG = require('./gulp/config.js');
	const UTILS = require('./gulp/utils/utils.js');
	const GLP = require('gulp-load-plugins')({
		scope: ['devDependencies'],
		pattern: '*'
	});

	/*--- IMPORT AND CONFIG TASK ---*/

	/* TASK # SCSS */

	require('./gulp/task/scss')(GULP, GLP, CONFIG, UTILS);

	/* TASK # CSSMIN */

	require('./gulp/task/cssmin')(GULP, GLP, CONFIG, UTILS);

	/* TASK # HTML */

	require('./gulp/task/template')(GULP, GLP, CONFIG, UTILS);

	/* TASK # JS */

	require('./gulp/task/scripts')(GULP, GLP, CONFIG, UTILS);

	/* TASK # JS VALIDATOR */

	require('./gulp/task/eslint')(GULP, GLP, CONFIG, UTILS);

	/* TASK # SERVE */

	require('./gulp/task/serve')(GULP, GLP, CONFIG, UTILS);

	/* TASK # WATCH */

	require('./gulp/task/watch')(GULP, GLP, CONFIG, UTILS);

	/* TASK # ASSETS */

	require('./gulp/task/assets')(GULP, GLP, CONFIG, UTILS);

	/* TASK # CLEAN */

	require('./gulp/task/clean')(GULP, GLP, CONFIG, UTILS);

	/* TASK # LIBS */

	require('./gulp/task/libs')(GULP, GLP, CONFIG, UTILS);

	/*--- TASK GROUP ---*/

	/* TASK # Default */

	require('./gulp/group-task/default')(GULP, GLP, CONFIG, UTILS);

	/* TASK # Develop */

	require('./gulp/group-task/develop')(GULP, GLP, CONFIG, UTILS);

	/* TASK # Build */

	require('./gulp/group-task/build')(GULP, GLP, CONFIG, UTILS);

})();