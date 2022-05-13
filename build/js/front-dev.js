"use strict";

var frontJs = {};
frontJs.breakpoints = {
  xl: 1440,
  lg: 1280,
  md: 1024,
  sm: 768,
  xs: 320
};
"use strict";

/**
 * @description Anclas con animaciones
 */
var anchorAnimation = function anchorAnimation() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
};
"use strict";

/**
 * @description Anclas con scrolling para la navegacion
 */
var anchorScrolling = function anchorScrolling() {
  var mainNavLinks = document.querySelectorAll('[data-navigation="repository"] a');
  window.addEventListener("scroll", function (e) {
    var fromTop = window.scrollY;
    mainNavLinks.forEach(function (link) {
      var section = document.querySelector(link.hash);

      if (section) {
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          link.classList.add("ns-sidebar__link--selected");
        } else {
          link.classList.remove("ns-sidebar__link--selected");
        }
      }
    });
  });
};
"use strict";

/**
 * @description Carga componentes de forma dinamica a traves de un template
 */
var components = function components() {
  var cmp = document.querySelectorAll('[data-template]');

  if (cmp.length > 0) {
    var props = {
      method: 'GET',
      headers: {
        "Content-Type": "text/plain"
      }
    };
    cmp.forEach(function (e) {
      var url = e.getAttribute('data-template');
      var httpPromise = http(window.location.origin + '/views/repository/components/' + url + '.tpl.html', props);
      httpPromise.then(function (resp) {
        e.innerHTML = resp;
      })["catch"](function (resp) {
        console.log('reject', resp);
      });
    });
  }
};
"use strict";

/**
 * @description Funcion para consumir datos
 * @param {RequestInfo} input - Url
 * @param {RequestInit} init - Propiedades
 * @returns {Function}
 */
var http = function http(url, props) {
  return new Promise(function (resolve, reject) {
    fetch(url).then(function (resp) {
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
    })["catch"](function (err) {
      return reject(err);
    });
  });
};
"use strict";

/**
 * @description Funcion para detectar que el DOM ha sido cargador completamente
 * @param {Function} callback
 * @returns {Function} Devuelve un callback
 */
var ready = function ready(callback) {
  if (callback && typeof callback === 'function') {
    document.addEventListener("DOMContentLoaded", function () {
      if (document.readyState === "interactive" || document.readyState === "complete") {
        return callback();
      }
    });
  }
};
"use strict";

/**
 * @description Funcion para reemplazar una cadena de caracteres en un template HTML
 * @param {String} template - Plantilla a reemplazar (innerHTML)
 * @param {Object} object - Objeto con los parametros a reemplazar
 * @return {String}
 */
var template = function template(_template, object) {
  var objectKeys = Object.keys(object);

  for (var i in objectKeys) {
    var key = objectKeys[i],
        strRpl = '{{' + key + '}}';
    _template = _template.replace(new RegExp(strRpl, 'g'), object[key]);
  }

  return _template;
};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ObjectDefault =
/*#__PURE__*/
function () {
  /**
   * @constructor
   * @param {String} title
   */
  function ObjectDefault(title) {
    _classCallCheck(this, ObjectDefault);

    this.title = title;
  }
  /**
   * @description Mostrar titulo
   */


  _createClass(ObjectDefault, [{
    key: "showTitle",
    value: function showTitle() {
      console.log(this.title);
    }
  }]);

  return ObjectDefault;
}();
"use strict";

ready(function () {
  // Anclas con animaciones
  anchorAnimation();
  anchorScrolling(); // Cargar componentes de forma dinamica

  components(); // Ejemplo clases

  var title = 'Titulo principal';
  var objDefault = new ObjectDefault(title);
  objDefault.showTitle();
});