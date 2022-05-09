ready(() => {
	// Anclas con animaciones
	anchorAnimation();
	anchorScrolling();
	// Cargar componentes de forma dinamica
	components();
	// Ejemplo clases
	var title = 'Titulo principal';
	var objDefault = new ObjectDefault(title);
	objDefault.showTitle();
});
