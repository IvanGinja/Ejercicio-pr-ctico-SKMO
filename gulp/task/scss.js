/*---------------------------------------------
 * SCSS CONFIGURATION TASK *
 *----------------------------------------------*/

/* Compile files *.scss of our dev */


(function(){
  'use strict';

  module.exports = function (GULP, GLP, CONFIG, UTILS){

    GULP.task(
      'scss',
      'Compila nuestro archivos SCSS. Compila en: ' + CONFIG.folderPaths.build.css,
      scss
    );

    function scss(){
      return	GULP.src(GLP.path.join(CONFIG.folderPaths.scss) + '*.scss')
        .pipe(GLP.sourcemaps.init())
        .pipe(GLP.plumber({
          errorHandler: function(err){
            return UTILS.errorCompile(GLP, err, this)
          }
        }))
        .pipe(GLP.sassGlob())

				.pipe(GLP.sass(CONFIG.tasksConfig.scss.optScss))
				.pipe(GLP.autoprefixer(CONFIG.tasksConfig.scss.autoprefix))
        .pipe(GLP.groupCssMediaQueries())
        .pipe(GLP.pixrem(CONFIG.tasksConfig.scss.pixrem))
        .pipe(GLP.sourcemaps.write())
        .pipe(GULP.dest(CONFIG.folderPaths.build.css));
    }
  };
})();
