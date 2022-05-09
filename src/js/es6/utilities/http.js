/**
 * @description Funcion para consumir datos
 * @param {RequestInfo} input - Url
 * @param {RequestInit} init - Propiedades
 * @returns {Function}
 */
const http = (url, props) => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(resp => {
				switch (props.headers["Content-Type"]) {
					case "text/plain":
					case "text/html":
						resp = resp.text();
						break;
					default:
						resp = resp.json();
						break;
				}
				resolve(resp);
			})
			.catch(err => reject(err));
	});
};