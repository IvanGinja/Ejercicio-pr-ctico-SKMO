# FrontSeed HTML v.1.0.0 - BETA

Framework de desarrollo del Centro de excelencia Front de Everis SLU para proyectos estaticos de maquetación: PUG, SCSS y JS.

## INSTALACION

1. CONFIGURACIÓN PREVIA DEL PROYECTO. 
	
	Tenemos que configurar el proyecto antes de comenzar a desarrollar. Ficheros que tienen que modificarse __OBLIGATORIAMENTE__.

		* package.json ("name", "version", "author")

2. ABRIMOS LA CONSOLA Y EJECUTAMOS LO SIGUIENTE:

+ Instalamos todas las dependencias de NPM: 
	```
	$ npm install
	```
	> Creará una carpeta en la raiz llamada *node_modules* donde se guardarán todas las dependencias de desarrollo para el proyecto. Es importante que no versionemos esta carpeta.

	Tenemos que comprobar también que las carpetas de los recursos (assets) no hay resquicios de otros proyectos. ES IMPORTANTE QUE NO ARRASTREMOS COSAS DE OTROS PROYECTOS. 
---

## CONFIGURACION

+ ### Configuración de directorios y nombres de archivos del proyecto.

	Si necesitamos cambiar la ruta de directorios o nombres de archivos del proyecto. Debemos añadir las nuevas rutas en el fichero: */gulp/config.js*

+ ### Configuración de SCSS (ITCSS), PUG & JS

	+ src/scss/_config__project.scss 
	+ src/pug/config.pug
	+ src/js/config.js

	> Comprobemos que las configuraciones de estos archivos son correctas. Tenemos que ser concienzudos en esta tarea, puesto que conllevará a un mejor desarrollo del proyecto. 

---

## DESARROLLO

+ ### Añadir librerías web al proyecto.

	Si necesitamos añadir cualquier librería web, lo primero que debemos hacer es usar el comando npm:
		
		npm install nombre-de-liberia --save-dev

	Luego es __NECESARIO__, añadir en el archivo: __*/gulp/config.js*__ la ruta de la nueva librería JS/CSS.

---

## GULP

### Tareas disponibles:

+ ### default
	````
	$ gulp or $ gulp default
	````

	TASK FILES:  
	__./gulp/group-task/default.js__

	Muestra información acerca de las tareas disponibles y su utilidad.

+ ### develop

		$ gulp develop

	TASK FILES:  
	__./gulp/group-task/develop.js__

	DEPENDENCIES:
	1. __[clean]__
	2. __[assets]__
	3. __[libs]__
	4. __[scripts]__
	5. __[html]__ - __[pug]__
	6. __[scss]__
	7. __[serve]__
	8. __[watch]__

	Ejecuta un servidor de desarrollo y compiladores de scss, pug y JS.


+ ### build

		$ gulp build

	TASK FILES:  
	__./gulp/group-task/build.js__

	DEPENDENCIES:
	1. __[clean]__
	2. __[assets]__
	3. __[libs]__
	4. __[scripts]__
	5. __[html]__ - __[pug]__
	6. __[scss]__

	Ejecuta una carpeta build de producción del proyecto