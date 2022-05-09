/*---------------------------------------------
 * CSSMIN CONFIGURATION TASK *
 *----------------------------------------------*/

/* Minify files *.css of our dev */


(function(){
    'use strict';
  
    module.exports = function (GULP, GLP, CONFIG, UTILS){
  
        GULP.task(
            'cssmin',
            'Minifica nuestro archivo CSS. Minifica en: ' + CONFIG.folderPaths.build.css,
            cssmin
        );

        function cssmin(){
            return GULP.src(CONFIG.folderPaths.build.css + '*.css')
                .pipe(GLP.cssmin())
                .pipe(GULP.dest(CONFIG.folderPaths.build.css));
        }
    };
})()