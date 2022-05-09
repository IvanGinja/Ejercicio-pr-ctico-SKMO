/*---------------------------------------------
 * JS VALIDATOR TASK *
 *----------------------------------------------*/

/* Validate all files inside */


(function () {
    'use strict';

    module.exports = function (GULP, GLP, CONFIG, UTILS) {

        GULP.task(
            'eslint',
            'Validate files from ' + CONFIG.folderPaths.js.root,
            validateLint
        );

        function validateLint() {
            return GULP.src(CONFIG.folderPaths.build.js + '*.js')
                .pipe(GLP.eslint())
                .pipe(GLP.eslint.format())
                .pipe(GLP.eslint.failOnError());
        }
    };
})();