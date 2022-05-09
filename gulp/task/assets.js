/*---------------------------------------------
 * ASSETS CONFIGURATION TASK *
 *----------------------------------------------*/

/* Add assets files, output -> build/assets/ */


(function(){
  'use strict';

  module.exports = function(GULP, GLP, CONFIG, UTILS){
    GULP.task(
      'assets',
      'Add assets files ' + CONFIG.folderPaths.build.assets,
      assets
    );
    
    
    function assets(){
        return GULP.src(CONFIG.folderPaths.assets.root + '/**/*.*')
        .pipe(GULP.dest(CONFIG.folderPaths.build.assets));
    }
  };
})();