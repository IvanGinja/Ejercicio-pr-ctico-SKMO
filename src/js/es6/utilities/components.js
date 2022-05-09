/**
 * @description Carga componentes de forma dinamica a traves de un template
 */
const components = () => {
    let cmp = document.querySelectorAll('[data-template]');
    if (cmp.length > 0) {
        var props = {
            method: 'GET',
            headers: {
                "Content-Type": "text/plain"
            }
        };
        cmp.forEach(function(e) {
            let url = e.getAttribute('data-template');
            var httpPromise = http(window.location.origin + '/views/repository/components/' + url + '.tpl.html',props);
            httpPromise.then((resp) => {
                e.innerHTML = resp;
            }).catch((resp) => {
                console.log('reject', resp);
            });
        });
    }
};