/*---------------------------------------------
 * CLEAN CONFIGURATION TASK *
 *----------------------------------------------*/

/* Clean build folder */


(function(){
  'use strict';

  module.exports = function(GULP, GLP, CONFIG, UTILS){
    GULP.task(
      'clean',
      'Elimina los archivos la carpeta build.',
      clean
    );
    
    
    function clean(){
        return GLP.del([
            CONFIG.folderPaths.build.root + '/**'
        ]);
    }
  };
})();
