/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
   
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.theme-dark{
    --bg-col:#313030ff;
    --fontSma-col:rgb(197, 194, 190);
    --fontLar-col:#F0EBE7ff;
    --img-col: grayscale(1) brightness(100)
}

.theme-light{
    --bg-col:rgb(250, 245, 240);
    --fontSma-col:#313030ff;
    --fontLar-col:rgb(27, 27, 26);
    --img-col: grayscale(1) brightness(0)
}



html {
    box-sizing: border-box; 
}
    
*, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    
}

body{
    height: 100vh;
    width: 100%;
    background-color: var(--bg-col);
    color: var(--fontSma-col);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}


header, footer{
    height: 3rem;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
    padding-right: 1rem;
    width: 100%;
}


/* slider checkbox */
.switch {
    display: inline-block;
    height: 2rem;
    position: relative;
    width: 4rem;
  }
  
  .switch input {
    display:none;
  }
  
  .slider {
    background-color: var(--fontSma-col);
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
  }
  
  .slider:before {
    background-color: var(--bg-col);
    bottom: 3px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
  }
  
  input:checked + .slider {
    background-color: var(--fontLar-col);
  }
  
  input:checked + .slider:before {
    transform: translateX(2rem);
  }
  
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }

footer{
    justify-content: center;
}

main{
    width: 70%;
    height: 90vh;
    transition: 1s;
}

article{
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
}

.top{
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: start;
    align-items:center ;
    /* background-color: red; */
    text-align: center;
}

.searchBar {
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    font-size: 1.5rem;
}
#location, #search {
    background-color: var(--bg-col);
    color: var(--fontLar-col);
    border: none;
    padding: 0.5rem;
    border-bottom: 1px solid var(--fontLar-col);
    font-size: 1rem;
}

#search:hover{
    cursor: pointer;
    color: var(--fontSma-col);
}

#location:focus{
    outline: none;
}

.top-weather{
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.temprature h1{
    font-size: 4rem;
    margin-bottom: 1rem;
    font-weight: bold;
}
.temprature h2{
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.weather-desc{
    font-size: 1.8rem;
}

.weather-img{
    filter: var(--img-col);
    margin-top: 1rem;
    height: 6.5rem;
    object-fit: cover;
}

hr{
    width: 100%;
    margin: 1rem;
    border: none;
    border-top: 1px solid var(--fontLar-col);
}

.bottom ul{
    list-style: none;
    display: grid;
    grid-auto-rows: 1fr 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    gap: 2rem;
    font-size: 1.3rem;
    justify-items: center;
    
}

a{
    color: var(--fontSma-col);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,mJAAmJ;AACvJ;;AAEA;IACI,kBAAkB;IAClB,gCAAgC;IAChC,uBAAuB;IACvB;AACJ;;AAEA;IACI,2BAA2B;IAC3B,uBAAuB;IACvB,6BAA6B;IAC7B;AACJ;;;;AAIA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,SAAS;IACT,UAAU;;AAEd;;AAEA;IACI,aAAa;IACb,WAAW;IACX,+BAA+B;IAC/B,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;AACvB;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,SAAS;IACT,mBAAmB;IACnB,WAAW;AACf;;;AAGA,oBAAoB;AACpB;IACI,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,oCAAoC;IACpC,SAAS;IACT,eAAe;IACf,OAAO;IACP,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,eAAe;EACjB;;EAEA;IACE,+BAA+B;IAC/B,WAAW;IACX,WAAW;IACX,YAAY;IACZ,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,WAAW;EACb;;EAEA;IACE,oCAAoC;EACtC;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;AAEF;IACI,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,+BAA+B;IAC/B,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,2CAA2C;IAC3C,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,wCAAwC;AAC5C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,qCAAqC;IACrC,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,qBAAqB;;AAEzB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[":root{\r\n   \r\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n.theme-dark{\r\n    --bg-col:#313030ff;\r\n    --fontSma-col:rgb(197, 194, 190);\r\n    --fontLar-col:#F0EBE7ff;\r\n    --img-col: grayscale(1) brightness(100)\r\n}\r\n\r\n.theme-light{\r\n    --bg-col:rgb(250, 245, 240);\r\n    --fontSma-col:#313030ff;\r\n    --fontLar-col:rgb(27, 27, 26);\r\n    --img-col: grayscale(1) brightness(0)\r\n}\r\n\r\n\r\n\r\nhtml {\r\n    box-sizing: border-box; \r\n}\r\n    \r\n*, *:before, *:after {\r\n    box-sizing: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n}\r\n\r\nbody{\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-color: var(--bg-col);\r\n    color: var(--fontSma-col);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n\r\nheader, footer{\r\n    height: 3rem;\r\n    display: flex;\r\n    justify-content: end;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding-right: 1rem;\r\n    width: 100%;\r\n}\r\n\r\n\r\n/* slider checkbox */\r\n.switch {\r\n    display: inline-block;\r\n    height: 2rem;\r\n    position: relative;\r\n    width: 4rem;\r\n  }\r\n  \r\n  .switch input {\r\n    display:none;\r\n  }\r\n  \r\n  .slider {\r\n    background-color: var(--fontSma-col);\r\n    bottom: 0;\r\n    cursor: pointer;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider:before {\r\n    background-color: var(--bg-col);\r\n    bottom: 3px;\r\n    content: \"\";\r\n    height: 26px;\r\n    left: 4px;\r\n    position: absolute;\r\n    transition: .4s;\r\n    width: 26px;\r\n  }\r\n  \r\n  input:checked + .slider {\r\n    background-color: var(--fontLar-col);\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    transform: translateX(2rem);\r\n  }\r\n  \r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\nfooter{\r\n    justify-content: center;\r\n}\r\n\r\nmain{\r\n    width: 70%;\r\n    height: 90vh;\r\n    transition: 1s;\r\n}\r\n\r\narticle{\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* justify-content: space-between; */\r\n    align-items: center;\r\n}\r\n\r\n.top{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 80%;\r\n    justify-content: start;\r\n    align-items:center ;\r\n    /* background-color: red; */\r\n    text-align: center;\r\n}\r\n\r\n.searchBar {\r\n    margin-top: 1rem;\r\n    margin-bottom: 0.2rem;\r\n    font-size: 1.5rem;\r\n}\r\n#location, #search {\r\n    background-color: var(--bg-col);\r\n    color: var(--fontLar-col);\r\n    border: none;\r\n    padding: 0.5rem;\r\n    border-bottom: 1px solid var(--fontLar-col);\r\n    font-size: 1rem;\r\n}\r\n\r\n#search:hover{\r\n    cursor: pointer;\r\n    color: var(--fontSma-col);\r\n}\r\n\r\n#location:focus{\r\n    outline: none;\r\n}\r\n\r\n.top-weather{\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.temprature h1{\r\n    font-size: 4rem;\r\n    margin-bottom: 1rem;\r\n    font-weight: bold;\r\n}\r\n.temprature h2{\r\n    font-size: 1.2rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.weather-desc{\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.weather-img{\r\n    filter: var(--img-col);\r\n    margin-top: 1rem;\r\n    height: 6.5rem;\r\n    object-fit: cover;\r\n}\r\n\r\nhr{\r\n    width: 100%;\r\n    margin: 1rem;\r\n    border: none;\r\n    border-top: 1px solid var(--fontLar-col);\r\n}\r\n\r\n.bottom ul{\r\n    list-style: none;\r\n    display: grid;\r\n    grid-auto-rows: 1fr 1fr;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-auto-flow: row;\r\n    gap: 2rem;\r\n    font-size: 1.3rem;\r\n    justify-items: center;\r\n    \r\n}\r\n\r\na{\r\n    color: var(--fontSma-col);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api/weatherInfo.js":
/*!********************************!*\
  !*** ./src/api/weatherInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const WeatherAPI = () => {
    const DONT = ''
    const PLS = ''
    const T = '0c884'
    const E = '52bb051'
    const S = '926f1c65'
    const L = 6232512
    const A = '521'

    const AK = DONT+S+T+E+A+L+PLS

    let location = 'Australia'

    const changeLocation = (NewLocation) =>  location = NewLocation

    const processData = (data) => {
        return {
            metric:{
                temp: data.current.temp_c,
                feels: data.current.feelslike_c,
                wind: data.current.wind_kph,
                precip: data.current.precip_mm,
                gust: data.current.gust_kph,
                pressure: data.current.pressure_mb,

            },
            imperial:{
                temp: data.current.temp_f,
                feels: data.current.feelslike_f,
                wind: data.current.wind_mph,
                precip: data.current.precip_in,
                gust: data.current.gust_mph,
                pressure: data.current.pressure_in,
            },
            humidity:data.current.humidity,
            uv:data.current.uv,
            cloud:data.current.cloud,
            wind_dir:data.current.wind_dir,
            condition:data.current.condition.text,
            img:data.current.condition.icon,
            air_co:data.current.air_quality.co,
            city: data.location.name,
            region: data.location.region,
            country: data.location.country
        }
        
    }

    const getWeather = async() =>{
        try{
            console.log('getting weather information for', location)
            const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${AK}&q=${location}&aqi=yes`)
            const processed = await data.json()
            return processData(processed)
        }catch(err){
            console.log(err)
            return null
        }
    }


    return {changeLocation, getWeather}

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherAPI);

/***/ }),

/***/ "./src/domHandler/displayer.js":
/*!*************************************!*\
  !*** ./src/domHandler/displayer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const WeatherDisplay = () => {

    const unit = ['°C', '°F'] 
    let selectedUnit = unit[0]
    let current_data = []

    const toggleUnit = () => {
        const current = document.querySelector('#toggleTemp')
        if(current_data){
            current.addEventListener('change', e => {
                selectedUnit = e.target.checked ? unit[1] : unit[0]
                console.log('changing units')
                if(current_data){
                    updateLocation(current_data)
                }
            })
        }
        
    };

    const toggleTheme = () => {
        const current = document.querySelector('#toggleTheme')
        const all = document.querySelector('body')
        current.addEventListener('change', e => {
            all.className = e.target.checked ? 'theme-light' : 'theme-dark'  
            console.log('changing theme')
        })
    }


    const updateLocation = (data) => {
        if(data){
            current_data = data
            const unit = selectedUnit == '°C' ?  'metric' : 'imperial'
            const speed = selectedUnit == '°C' ?  'kph' : 'mph'
            const depth = selectedUnit == '°C' ?  'mm' : 'in'
            const location = document.querySelector('.location')
            if(data.city === data.region){
                location.innerHTML = `<h1 class="location">${data.city}, ${data.country} </h1>`
            } else{
                location.innerHTML = `<h1 class="location">${data.city}, ${data.region}, ${data.country} </h1>`
            }
            
            const topSection = document.querySelector('.top-weather')
            const bottomSection = document.querySelector('.bottom')
            topSection.innerHTML = 
                `
                    <section class="temprature">
                        <h1 class="bigTemp">${data[unit].temp}<span class="temp-sign">${selectedUnit}</span></h1>
                        <h2 class="feels">Feels Like <span class="feels-like">${data[unit].feels}</span><span class="temp-sign">${selectedUnit}</span></h2>
                    </section>
                    <section class="weather-desc">
                        <h3 class="description">${data.condition}</h3>
                        <img src="https://${data.img}" alt="${data.condition}" class="weather-img">
                    </section>
                `
            bottomSection.innerHTML = 
                `
                <ul class="details">
                    <li class="detail-individual">
                        <p>UV index <span id="uv">${data.uv}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Cloud % <span id="cloud">${data.cloud}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Wind <span id="wind">${data[unit].wind} ${speed}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Wind Direction <span id="winDir">${data.wind_dir}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Precipitation <span id="Prec">${data[unit].precip}${depth}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Air Quality (CO) <span id="Air">${data.air_co}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Humidity <span id="Humi">${data.humidity}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Gust <span id="Gust">${data[unit].gust} ${speed}</span></p>
                    </li>
                </ul>
                `


        } else {
            alert('Could not find location Data')
            console.log('data not available')
        }
    }




    return {updateLocation, toggleUnit, toggleTheme}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherDisplay);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_weatherInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/weatherInfo */ "./src/api/weatherInfo.js");
/* harmony import */ var _domHandler_displayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHandler/displayer */ "./src/domHandler/displayer.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const weather = (0,_api_weatherInfo__WEBPACK_IMPORTED_MODULE_0__["default"])()
const display = (0,_domHandler_displayer__WEBPACK_IMPORTED_MODULE_1__["default"])()


const searchbar = document.querySelector('#location')
const searchBtn = document.querySelector('#search')

display.toggleTheme()
weather.changeLocation('Melbourne Victoria')
let locationData = weather.getWeather()
locationData.then(data => 
    {display.updateLocation(data)
    display.toggleUnit()
    }
)





searchBtn.addEventListener('click', () =>{
    if(searchbar.value){
        console.log('searching for ', searchbar.value)
        weather.changeLocation(searchbar.value)
        locationData = weather.getWeather()
        locationData.then(data => display.updateLocation(data))
    }else{
        alert('please enter a valid value')
    }
})


// weather.changeLocation('Japan')
// weather.getWeather().then(e=>console.log(e))
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVks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O0FBQ0E7QUFDQSwrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvYXBpL3dlYXRoZXJJbmZvLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9kb21IYW5kbGVyL2Rpc3BsYXllci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xyXG4gICBcclxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRoZW1lLWRhcmt7XHJcbiAgICAtLWJnLWNvbDojMzEzMDMwZmY7XHJcbiAgICAtLWZvbnRTbWEtY29sOnJnYigxOTcsIDE5NCwgMTkwKTtcclxuICAgIC0tZm9udExhci1jb2w6I0YwRUJFN2ZmO1xyXG4gICAgLS1pbWctY29sOiBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygxMDApXHJcbn1cclxuXHJcbi50aGVtZS1saWdodHtcclxuICAgIC0tYmctY29sOnJnYigyNTAsIDI0NSwgMjQwKTtcclxuICAgIC0tZm9udFNtYS1jb2w6IzMxMzAzMGZmO1xyXG4gICAgLS1mb250TGFyLWNvbDpyZ2IoMjcsIDI3LCAyNik7XHJcbiAgICAtLWltZy1jb2w6IGdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDApXHJcbn1cclxuXHJcblxyXG5cclxuaHRtbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxufVxyXG4gICAgXHJcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgXHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2wpO1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnRTbWEtY29sKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbmhlYWRlciwgZm9vdGVye1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qIHNsaWRlciBjaGVja2JveCAqL1xyXG4uc3dpdGNoIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0cmVtO1xyXG4gIH1cclxuICBcclxuICAuc3dpdGNoIGlucHV0IHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250U21hLWNvbCk7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbCk7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udExhci1jb2wpO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJyZW0pO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG5mb290ZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxubWFpbntcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuYXJ0aWNsZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyIDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaEJhciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuI2xvY2F0aW9uLCAjc2VhcmNoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbCk7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udExhci1jb2wpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvbnRMYXItY29sKTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuI3NlYXJjaDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250U21hLWNvbCk7XHJcbn1cclxuXHJcbiNsb2NhdGlvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50b3Atd2VhdGhlcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4udGVtcHJhdHVyZSBoMXtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGVtcHJhdHVyZSBoMntcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLndlYXRoZXItZGVzY3tcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcblxyXG4ud2VhdGhlci1pbWd7XHJcbiAgICBmaWx0ZXI6IHZhcigtLWltZy1jb2wpO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGhlaWdodDogNi41cmVtO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9udExhci1jb2wpO1xyXG59XHJcblxyXG4uYm90dG9tIHVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tcm93czogMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuYXtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250U21hLWNvbCk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksbUpBQW1KO0FBQ3ZKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCO0FBQ0o7Ozs7QUFJQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOzs7QUFHQSxvQkFBb0I7QUFDcEI7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxvQ0FBb0M7SUFDcEMsU0FBUztJQUNULGVBQWU7SUFDZixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sZUFBZTtFQUNqQjs7RUFFQTtJQUNFLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZiwyQ0FBMkM7SUFDM0MsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXHJcXG4gICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtZGFya3tcXHJcXG4gICAgLS1iZy1jb2w6IzMxMzAzMGZmO1xcclxcbiAgICAtLWZvbnRTbWEtY29sOnJnYigxOTcsIDE5NCwgMTkwKTtcXHJcXG4gICAgLS1mb250TGFyLWNvbDojRjBFQkU3ZmY7XFxyXFxuICAgIC0taW1nLWNvbDogZ3JheXNjYWxlKDEpIGJyaWdodG5lc3MoMTAwKVxcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtbGlnaHR7XFxyXFxuICAgIC0tYmctY29sOnJnYigyNTAsIDI0NSwgMjQwKTtcXHJcXG4gICAgLS1mb250U21hLWNvbDojMzEzMDMwZmY7XFxyXFxuICAgIC0tZm9udExhci1jb2w6cmdiKDI3LCAyNywgMjYpO1xcclxcbiAgICAtLWltZy1jb2w6IGdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDApXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXHJcXG59XFxyXFxuICAgIFxcclxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXHJcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250U21hLWNvbCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaGVhZGVyLCBmb290ZXJ7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHNsaWRlciBjaGVja2JveCAqL1xcclxcbi5zd2l0Y2gge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogNHJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnN3aXRjaCBpbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNsaWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnRTbWEtY29sKTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbCk7XFxyXFxuICAgIGJvdHRvbTogM3B4O1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgICBsZWZ0OiA0cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB3aWR0aDogMjZweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250TGFyLWNvbCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycmVtKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNsaWRlci5yb3VuZCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgfVxcclxcblxcclxcbmZvb3RlcntcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW57XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGhlaWdodDogOTB2aDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbmFydGljbGV7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9we1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyIDtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hCYXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG4jbG9jYXRpb24sICNzZWFyY2gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2wpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udExhci1jb2wpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvbnRMYXItY29sKTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250U21hLWNvbCk7XFxyXFxufVxcclxcblxcclxcbiNsb2NhdGlvbjpmb2N1c3tcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC13ZWF0aGVye1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXByYXR1cmUgaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi50ZW1wcmF0dXJlIGgye1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZGVzY3tcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWltZ3tcXHJcXG4gICAgZmlsdGVyOiB2YXIoLS1pbWctY29sKTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiA2LjVyZW07XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5ocntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9udExhci1jb2wpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tIHVse1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuYXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnRTbWEtY29sKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFdlYXRoZXJBUEkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBET05UID0gJydcclxuICAgIGNvbnN0IFBMUyA9ICcnXHJcbiAgICBjb25zdCBUID0gJzBjODg0J1xyXG4gICAgY29uc3QgRSA9ICc1MmJiMDUxJ1xyXG4gICAgY29uc3QgUyA9ICc5MjZmMWM2NSdcclxuICAgIGNvbnN0IEwgPSA2MjMyNTEyXHJcbiAgICBjb25zdCBBID0gJzUyMSdcclxuXHJcbiAgICBjb25zdCBBSyA9IERPTlQrUytUK0UrQStMK1BMU1xyXG5cclxuICAgIGxldCBsb2NhdGlvbiA9ICdBdXN0cmFsaWEnXHJcblxyXG4gICAgY29uc3QgY2hhbmdlTG9jYXRpb24gPSAoTmV3TG9jYXRpb24pID0+ICBsb2NhdGlvbiA9IE5ld0xvY2F0aW9uXHJcblxyXG4gICAgY29uc3QgcHJvY2Vzc0RhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1ldHJpYzp7XHJcbiAgICAgICAgICAgICAgICB0ZW1wOiBkYXRhLmN1cnJlbnQudGVtcF9jLFxyXG4gICAgICAgICAgICAgICAgZmVlbHM6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcclxuICAgICAgICAgICAgICAgIHdpbmQ6IGRhdGEuY3VycmVudC53aW5kX2twaCxcclxuICAgICAgICAgICAgICAgIHByZWNpcDogZGF0YS5jdXJyZW50LnByZWNpcF9tbSxcclxuICAgICAgICAgICAgICAgIGd1c3Q6IGRhdGEuY3VycmVudC5ndXN0X2twaCxcclxuICAgICAgICAgICAgICAgIHByZXNzdXJlOiBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIsXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbXBlcmlhbDp7XHJcbiAgICAgICAgICAgICAgICB0ZW1wOiBkYXRhLmN1cnJlbnQudGVtcF9mLFxyXG4gICAgICAgICAgICAgICAgZmVlbHM6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZixcclxuICAgICAgICAgICAgICAgIHdpbmQ6IGRhdGEuY3VycmVudC53aW5kX21waCxcclxuICAgICAgICAgICAgICAgIHByZWNpcDogZGF0YS5jdXJyZW50LnByZWNpcF9pbixcclxuICAgICAgICAgICAgICAgIGd1c3Q6IGRhdGEuY3VycmVudC5ndXN0X21waCxcclxuICAgICAgICAgICAgICAgIHByZXNzdXJlOiBkYXRhLmN1cnJlbnQucHJlc3N1cmVfaW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGh1bWlkaXR5OmRhdGEuY3VycmVudC5odW1pZGl0eSxcclxuICAgICAgICAgICAgdXY6ZGF0YS5jdXJyZW50LnV2LFxyXG4gICAgICAgICAgICBjbG91ZDpkYXRhLmN1cnJlbnQuY2xvdWQsXHJcbiAgICAgICAgICAgIHdpbmRfZGlyOmRhdGEuY3VycmVudC53aW5kX2RpcixcclxuICAgICAgICAgICAgY29uZGl0aW9uOmRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcclxuICAgICAgICAgICAgaW1nOmRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbixcclxuICAgICAgICAgICAgYWlyX2NvOmRhdGEuY3VycmVudC5haXJfcXVhbGl0eS5jbyxcclxuICAgICAgICAgICAgY2l0eTogZGF0YS5sb2NhdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICByZWdpb246IGRhdGEubG9jYXRpb24ucmVnaW9uLFxyXG4gICAgICAgICAgICBjb3VudHJ5OiBkYXRhLmxvY2F0aW9uLmNvdW50cnlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jKCkgPT57XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0dGluZyB3ZWF0aGVyIGluZm9ybWF0aW9uIGZvcicsIGxvY2F0aW9uKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtBS30mcT0ke2xvY2F0aW9ufSZhcWk9eWVzYClcclxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkID0gYXdhaXQgZGF0YS5qc29uKClcclxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NEYXRhKHByb2Nlc3NlZClcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtjaGFuZ2VMb2NhdGlvbiwgZ2V0V2VhdGhlcn1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyQVBJIiwiXHJcbmNvbnN0IFdlYXRoZXJEaXNwbGF5ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHVuaXQgPSBbJ8KwQycsICfCsEYnXSBcclxuICAgIGxldCBzZWxlY3RlZFVuaXQgPSB1bml0WzBdXHJcbiAgICBsZXQgY3VycmVudF9kYXRhID0gW11cclxuXHJcbiAgICBjb25zdCB0b2dnbGVVbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlVGVtcCcpXHJcbiAgICAgICAgaWYoY3VycmVudF9kYXRhKXtcclxuICAgICAgICAgICAgY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVW5pdCA9IGUudGFyZ2V0LmNoZWNrZWQgPyB1bml0WzFdIDogdW5pdFswXVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5naW5nIHVuaXRzJylcclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRfZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTG9jYXRpb24oY3VycmVudF9kYXRhKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGVUaGVtZScpXHJcbiAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcclxuICAgICAgICAgICAgYWxsLmNsYXNzTmFtZSA9IGUudGFyZ2V0LmNoZWNrZWQgPyAndGhlbWUtbGlnaHQnIDogJ3RoZW1lLWRhcmsnICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5naW5nIHRoZW1lJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCB1cGRhdGVMb2NhdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRfZGF0YSA9IGRhdGFcclxuICAgICAgICAgICAgY29uc3QgdW5pdCA9IHNlbGVjdGVkVW5pdCA9PSAnwrBDJyA/ICAnbWV0cmljJyA6ICdpbXBlcmlhbCdcclxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSBzZWxlY3RlZFVuaXQgPT0gJ8KwQycgPyAgJ2twaCcgOiAnbXBoJ1xyXG4gICAgICAgICAgICBjb25zdCBkZXB0aCA9IHNlbGVjdGVkVW5pdCA9PSAnwrBDJyA/ICAnbW0nIDogJ2luJ1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpXHJcbiAgICAgICAgICAgIGlmKGRhdGEuY2l0eSA9PT0gZGF0YS5yZWdpb24pe1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaW5uZXJIVE1MID0gYDxoMSBjbGFzcz1cImxvY2F0aW9uXCI+JHtkYXRhLmNpdHl9LCAke2RhdGEuY291bnRyeX0gPC9oMT5gXHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IGA8aDEgY2xhc3M9XCJsb2NhdGlvblwiPiR7ZGF0YS5jaXR5fSwgJHtkYXRhLnJlZ2lvbn0sICR7ZGF0YS5jb3VudHJ5fSA8L2gxPmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdG9wU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3Atd2VhdGhlcicpXHJcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tJylcclxuICAgICAgICAgICAgdG9wU2VjdGlvbi5pbm5lckhUTUwgPSBcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRlbXByYXR1cmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiYmlnVGVtcFwiPiR7ZGF0YVt1bml0XS50ZW1wfTxzcGFuIGNsYXNzPVwidGVtcC1zaWduXCI+JHtzZWxlY3RlZFVuaXR9PC9zcGFuPjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImZlZWxzXCI+RmVlbHMgTGlrZSA8c3BhbiBjbGFzcz1cImZlZWxzLWxpa2VcIj4ke2RhdGFbdW5pdF0uZmVlbHN9PC9zcGFuPjxzcGFuIGNsYXNzPVwidGVtcC1zaWduXCI+JHtzZWxlY3RlZFVuaXR9PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwid2VhdGhlci1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtkYXRhLmNvbmRpdGlvbn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vJHtkYXRhLmltZ31cIiBhbHQ9XCIke2RhdGEuY29uZGl0aW9ufVwiIGNsYXNzPVwid2VhdGhlci1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIGJvdHRvbVNlY3Rpb24uaW5uZXJIVE1MID0gXHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV0YWlsLWluZGl2aWR1YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VVYgaW5kZXggPHNwYW4gaWQ9XCJ1dlwiPiR7ZGF0YS51dn08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV0YWlsLWluZGl2aWR1YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2xvdWQgJSA8c3BhbiBpZD1cImNsb3VkXCI+JHtkYXRhLmNsb3VkfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXRhaWwtaW5kaXZpZHVhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaW5kIDxzcGFuIGlkPVwid2luZFwiPiR7ZGF0YVt1bml0XS53aW5kfSAke3NwZWVkfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXRhaWwtaW5kaXZpZHVhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaW5kIERpcmVjdGlvbiA8c3BhbiBpZD1cIndpbkRpclwiPiR7ZGF0YS53aW5kX2Rpcn08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV0YWlsLWluZGl2aWR1YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJlY2lwaXRhdGlvbiA8c3BhbiBpZD1cIlByZWNcIj4ke2RhdGFbdW5pdF0ucHJlY2lwfSR7ZGVwdGh9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldGFpbC1pbmRpdmlkdWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFpciBRdWFsaXR5IChDTykgPHNwYW4gaWQ9XCJBaXJcIj4ke2RhdGEuYWlyX2NvfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXRhaWwtaW5kaXZpZHVhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5IdW1pZGl0eSA8c3BhbiBpZD1cIkh1bWlcIj4ke2RhdGEuaHVtaWRpdHl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldGFpbC1pbmRpdmlkdWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkd1c3QgPHNwYW4gaWQ9XCJHdXN0XCI+JHtkYXRhW3VuaXRdLmd1c3R9ICR7c3BlZWR9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIGBcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdDb3VsZCBub3QgZmluZCBsb2NhdGlvbiBEYXRhJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgbm90IGF2YWlsYWJsZScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7dXBkYXRlTG9jYXRpb24sIHRvZ2dsZVVuaXQsIHRvZ2dsZVRoZW1lfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyRGlzcGxheSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBXZWF0aGVyQVBJIGZyb20gXCIuL2FwaS93ZWF0aGVySW5mb1wiO1xyXG5pbXBvcnQgV2VhdGhlckRpc3BsYXkgZnJvbSBcIi4vZG9tSGFuZGxlci9kaXNwbGF5ZXJcIjtcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmNvbnN0IHdlYXRoZXIgPSBXZWF0aGVyQVBJKClcclxuY29uc3QgZGlzcGxheSA9IFdlYXRoZXJEaXNwbGF5KClcclxuXHJcblxyXG5jb25zdCBzZWFyY2hiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKVxyXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJylcclxuXHJcbmRpc3BsYXkudG9nZ2xlVGhlbWUoKVxyXG53ZWF0aGVyLmNoYW5nZUxvY2F0aW9uKCdNZWxib3VybmUgVmljdG9yaWEnKVxyXG5sZXQgbG9jYXRpb25EYXRhID0gd2VhdGhlci5nZXRXZWF0aGVyKClcclxubG9jYXRpb25EYXRhLnRoZW4oZGF0YSA9PiBcclxuICAgIHtkaXNwbGF5LnVwZGF0ZUxvY2F0aW9uKGRhdGEpXHJcbiAgICBkaXNwbGF5LnRvZ2dsZVVuaXQoKVxyXG4gICAgfVxyXG4pXHJcblxyXG5cclxuXHJcblxyXG5cclxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICBpZihzZWFyY2hiYXIudmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWFyY2hpbmcgZm9yICcsIHNlYXJjaGJhci52YWx1ZSlcclxuICAgICAgICB3ZWF0aGVyLmNoYW5nZUxvY2F0aW9uKHNlYXJjaGJhci52YWx1ZSlcclxuICAgICAgICBsb2NhdGlvbkRhdGEgPSB3ZWF0aGVyLmdldFdlYXRoZXIoKVxyXG4gICAgICAgIGxvY2F0aW9uRGF0YS50aGVuKGRhdGEgPT4gZGlzcGxheS51cGRhdGVMb2NhdGlvbihkYXRhKSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGFsZXJ0KCdwbGVhc2UgZW50ZXIgYSB2YWxpZCB2YWx1ZScpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8gd2VhdGhlci5jaGFuZ2VMb2NhdGlvbignSmFwYW4nKVxyXG4vLyB3ZWF0aGVyLmdldFdlYXRoZXIoKS50aGVuKGU9PmNvbnNvbGUubG9nKGUpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==