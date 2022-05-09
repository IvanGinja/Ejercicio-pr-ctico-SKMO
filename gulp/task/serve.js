/*---------------------------------------------
 * SERVE CONFIGURATION TASK
 *----------------------------------------------*/

/* Run localhost project 'Levanta un server en localhost:' */


(function() {
  'use strict';

  module.exports = function (GULP, GLP, CONFIG, UTILS) {

    GULP.task(
      'serve',
      'Levanta un server en localhost:',
      serve
    );
    
    function serve() {
      return GULP.src(CONFIG.folderPaths.rootServer)
        .pipe(GLP.webserver(CONFIG.tasksConfig.serve));
    }
  };
})();