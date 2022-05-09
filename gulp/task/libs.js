/*---------------------------------------------
 * DEPENDENCIES LIBS CONFIGURATION TASK *
 *----------------------------------------------*/

/* Concat all dependent libraries */


(function(){
    'use strict';
  
    module.exports = function(GULP, GLP, CONFIG, UTILS){
      GULP.task(
        'libs',
        'Concatena todas las librerías dependendientes. Genera: ' + CONFIG.folderPaths.build.libs,
        libs
      );

      function libs() {
          libsCss();
          libsJs();
      }
      
      function libsCss() {
        return GULP.src(CONFIG.libs.requiredCSS)
        .pipe(GLP.concat(CONFIG.files.libsConcatCSSAll+'.css'))
        .pipe(GULP.dest(CONFIG.folderPaths.build.libs));
      }

      function libsJs() {
        return GULP.src(CONFIG.libs.requiredJS)
        .pipe(GLP.concat(CONFIG.files.libsConcatJsAll+'.js'))
        .pipe(GULP.dest(CONFIG.folderPaths.build.libs));
      }
    };
  })();