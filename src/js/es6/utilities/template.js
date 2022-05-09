/**
 * @description Funcion para reemplazar una cadena de caracteres en un template HTML
 * @param {String} template - Plantilla a reemplazar (innerHTML)
 * @param {Object} object - Objeto con los parametros a reemplazar
 * @return {String}
 */
const template = (template, object) => {
	let objectKeys = Object.keys(object);
	for (let i in objectKeys) {
		let key = objectKeys[i],
		strRpl = '{{' + key + '}}';
		template = template.replace(new RegExp(strRpl, 'g'), object[key]);
	}
	return template;
};
