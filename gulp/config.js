/*********************************************
 * GULP's configuration
 *********************************************/

(function(){
    'use strict';
    module.exports = projectConfig();

    function projectConfig(){
        var d = new Date();
        var date = d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2) + '/';
        return {
            folderPaths: {
                root: './src',
                rootServer: './build/',
                assets: {
                    root: './src/assets/',
                    fonts: './src/assets/fonts/',
                    img: './src/assets/img/',
                    media: './src/assets/media/',
                },
                template: {
                    root: './src/views/',
                    html: './src/views/html/',
                    pug: './src/views/pug/',
                    repository: './src/views/repository/'
                },
                scss: './src/scss/',
                js: {
                    root: './src/js/',
                    es6: {
                        root: './src/js/es6/',
                        utilities: './src/js/es6/utilities/',
                        classes: './src/js/es6/classes/',
                        data: './src/js/es6/data/'
                    },
                    jquery: {
                        root: './src/js/jquery/',
                        components: './src/js/jquery/components/',
                        data: './src/js/jquery/data/'
                    }
                },
                build: {
                    root: './build/',
                    css: './build/css/',
                    js: './build/js/',
                    assets: './build/assets/',
                    libs: './build/libs/',
                    views: './build/views/',
                    repository: './build/views/repository/'
                },
                gulp: './gulp/',
                task: './task/'
            },
            files: {
                angularApp: 'app',
                jsDev: 'front-dev',
                jsDevMain: 'main-dev',
                jsConfig: 'config',
                jsConcatAll: 'front',
                jsConcatAllMain: 'main',
                libsConcatJsAll: 'dependencies',
                libsConcatCSSAll: 'dependencies'
            },
            libs: {
                requiredJS: [
                    './node_modules/requirejs/require.js'
                ],
                requiredCSS: []
            },
            tasksConfig: {
                scss: {
                    optScss: {
                        outputStyle: 'extend'
                    },
                    autoprefix: {
                        browsers  : ['last 2 versions', 'ie 8'],
                        cascade   : false
                    },
                    pixrem: {
                        html: true,
                        browsers: 'ie <= 8',
                        unitPrecision: 0
                    }
                },
                pug: {},
                serve: {
                    port: 8000,
                    livereload: true,
                    directoryListing: {
                        enable: true,
                        path: './build/'
                    },
                    open: true
                }
            },
            thisDay: date,
            /**
             * Por defecto el repositorio de componentes solo está disponible con js: es6 y template: html
             */
            js: 'es6', // [es6 (default), jquery]
            template: 'html' // [html (default), pug]
		}
    }
})();