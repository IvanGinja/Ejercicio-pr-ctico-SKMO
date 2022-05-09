/**
 * @description Funcion para detectar que el DOM ha sido cargador completamente
 * @param {Function} callback
 * @returns {Function} Devuelve un callback
 */
const ready = (callback) => {
	if (callback && typeof callback === 'function') {
		document.addEventListener("DOMContentLoaded", () => {
			if (document.readyState === "interactive" || document.readyState === "complete") {
				return callback();
			}
		});
	}
};