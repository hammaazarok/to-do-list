/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: #dfdfdf;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#to-do-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-content: center;\\r\\n  align-items: center;\\r\\n  align-self: center;\\r\\n  justify-self: center;\\r\\n  width: 600px;\\r\\n  border: 1px solid black;\\r\\n  background-color: #fff;\\r\\n  padding: 10px 0 0 0;\\r\\n}\\r\\n\\r\\n.line {\\r\\n  width: 100%;\\r\\n  border-bottom: 1px solid #e2dfdf;\\r\\n  margin: 0 0 !important;\\r\\n}\\r\\n\\r\\n#to-do-list > * {\\r\\n  align-self: flex-start;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  width: 92%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.new-task {\\r\\n  width: 92%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  border: 0;\\r\\n  width: 400px;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  height: 15px;\\r\\n}\\r\\n\\r\\ntextarea:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.list-container {\\r\\n  width: 100%;\\r\\n  margin: 0 !important;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  width: 91%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.list:focus {\\r\\n  background-color: rgb(248, 248, 178);\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  width: 100%;\\r\\n  height: 60px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: rgb(189, 187, 187);\\r\\n  margin: 0 !important;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.middleline {\\r\\n  text-decoration-line: line-through;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://setup-webpack/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://setup-webpack/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add-remove.js":
/*!***************************!*\
  !*** ./src/add-remove.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoListAdd\": () => (/* binding */ TodoListAdd),\n/* harmony export */   \"TodoListDelete\": () => (/* binding */ TodoListDelete),\n/* harmony export */   \"TodoListEdit\": () => (/* binding */ TodoListEdit),\n/* harmony export */   \"reindexTasks\": () => (/* binding */ reindexTasks)\n/* harmony export */ });\n/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.js */ \"./src/todolist.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ \"./src/interactive.js\");\n\r\n\r\n\r\n\r\nconst reindexTasks = (taskss) => {\r\n  taskss.forEach((element, i) => {\r\n    element.index = i;\r\n  });\r\n  return taskss;\r\n};\r\nconst TodoListEdit = (tasks) => {\r\n  const editTask = document.querySelectorAll('.item');\r\n  editTask.forEach((i, index) => {\r\n    i.addEventListener('change', (e) => {\r\n      if (e.keyCode === 13) {\r\n        e.preventDefault();\r\n      }\r\n\r\n      const task = {\r\n        description: i.value,\r\n        completed: false,\r\n        index,\r\n      };\r\n      tasks[index] = task;\r\n      _storage_js__WEBPACK_IMPORTED_MODULE_1__.setTasksToStorage(tasks);\r\n      (0,_todolist_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks);\r\n      reindexTasks(tasks);\r\n      TodoListDelete(tasks);\r\n      (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.changeStatus)(tasks);\r\n    });\r\n  });\r\n};\r\nconst TodoListDelete = (taskss) => {\r\n  let removeTask = document.querySelectorAll('.item');\r\n  removeTask.forEach((e, eindex) => {\r\n    removeTask = document.querySelectorAll('.item');\r\n    let deleteButton = e.parentNode.nextSibling.nextSibling;\r\n    e.addEventListener('focus', () => {\r\n      deleteButton = e.parentNode.nextSibling.nextSibling;\r\n      if (deleteButton.classList[1] === 'fa-ellipsis-vertical') {\r\n        deleteButton.classList.remove('fa-ellipsis-vertical');\r\n        deleteButton.classList.add('fa-trash-can');\r\n        deleteButton.addEventListener('click', () => {\r\n          if (deleteButton.classList[1] === 'fa-trash-can') {\r\n            taskss = reindexTasks(taskss);\r\n            taskss = taskss.filter((t) => t.index !== eindex);\r\n            taskss = reindexTasks(taskss);\r\n            _storage_js__WEBPACK_IMPORTED_MODULE_1__.setTasksToStorage(taskss);\r\n            (0,_todolist_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskss);\r\n            TodoListDelete(taskss);\r\n            TodoListEdit(taskss);\r\n            (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.changeStatus)(taskss);\r\n          }\r\n        });\r\n        removeTask.forEach((t) => {\r\n          if (t !== e) {\r\n            deleteButton = t.parentNode.nextSibling.nextSibling;\r\n            deleteButton.classList.remove('fa-trash-can');\r\n            deleteButton.classList.add('fa-ellipsis-vertical');\r\n            deleteButton = e.parentNode.nextSibling.nextSibling;\r\n            TodoListEdit(taskss);\r\n          }\r\n        });\r\n      }\r\n    });\r\n  });\r\n};\r\nconst TodoListAdd = (taskss) => {\r\n  const addTask = document.querySelector('.text-area');\r\n  addTask.addEventListener('keydown', (e) => {\r\n    if (e.keyCode === 13) {\r\n      if (addTask.value.length < 2) {\r\n        addTask.value = null;\r\n        return;\r\n      }\r\n      const task = {\r\n        description: addTask.value,\r\n        completed: false,\r\n        index: taskss.length,\r\n      };\r\n      taskss.push(task);\r\n      (0,_todolist_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskss);\r\n      TodoListDelete(taskss);\r\n      _storage_js__WEBPACK_IMPORTED_MODULE_1__.setTasksToStorage(taskss);\r\n      addTask.value = null;\r\n      TodoListEdit(taskss);\r\n      (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.changeStatus)(taskss);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/add-remove.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist.js */ \"./src/todolist.js\");\n/* harmony import */ var _add_remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-remove.js */ \"./src/add-remove.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactive.js */ \"./src/interactive.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst tasks = _storage_js__WEBPACK_IMPORTED_MODULE_3__.getTasksFromStorage();\r\n\r\n(0,_todolist_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tasks);\r\n_add_remove_js__WEBPACK_IMPORTED_MODULE_2__.TodoListAdd(tasks);\r\n_add_remove_js__WEBPACK_IMPORTED_MODULE_2__.TodoListEdit(tasks);\r\n_add_remove_js__WEBPACK_IMPORTED_MODULE_2__.TodoListDelete(tasks);\r\n(0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.changeStatus)(tasks);\r\n(0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.clearAllCompleted)(tasks);\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/index.js?");

/***/ }),

/***/ "./src/interactive.js":
/*!****************************!*\
  !*** ./src/interactive.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeStatus\": () => (/* binding */ changeStatus),\n/* harmony export */   \"clearAllCompleted\": () => (/* binding */ clearAllCompleted)\n/* harmony export */ });\n/* harmony import */ var _add_remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-remove.js */ \"./src/add-remove.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist.js */ \"./src/todolist.js\");\n\r\n\r\n\r\n\r\nconst changeStatus = (tasks) => {\r\n  let checkbox = document.querySelectorAll('.completed');\r\n\r\n  checkbox.forEach((e, index) => {\r\n    e.addEventListener('change', () => {\r\n      tasks[index].completed = e.checked;\r\n      _storage_js__WEBPACK_IMPORTED_MODULE_1__.setTasksToStorage(tasks);\r\n      _add_remove_js__WEBPACK_IMPORTED_MODULE_0__.reindexTasks(tasks);\r\n      _add_remove_js__WEBPACK_IMPORTED_MODULE_0__.TodoListDelete(tasks);\r\n      if (tasks[index].completed) {\r\n        e.checked = true;\r\n        e.parentNode.children[1].classList.add('middleline');\r\n      } else {\r\n        e.parentNode.children[1].classList.remove('middleline');\r\n      }\r\n    });\r\n  });\r\n\r\n  checkbox = document.querySelectorAll('.completed');\r\n  checkbox.forEach((ee, index) => {\r\n    if (tasks[index].completed) {\r\n      ee.checked = true;\r\n      ee.parentNode.children[1].classList.add('middleline');\r\n    }\r\n  });\r\n};\r\n\r\nconst clearAllCompleted = (tasks) => {\r\n  const clearButton = document.querySelector('.clear');\r\n  clearButton.addEventListener('click', () => {\r\n    tasks = tasks.filter((e) => !e.completed);\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_1__.setTasksToStorage(tasks);\r\n    (0,_todolist_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(tasks);\r\n    _add_remove_js__WEBPACK_IMPORTED_MODULE_0__.reindexTasks(tasks);\r\n    _add_remove_js__WEBPACK_IMPORTED_MODULE_0__.TodoListDelete(tasks);\r\n    (0,_todolist_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(tasks);\r\n    changeStatus(tasks);\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/interactive.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTasksFromStorage\": () => (/* binding */ getTasksFromStorage),\n/* harmony export */   \"setTasksToStorage\": () => (/* binding */ setTasksToStorage)\n/* harmony export */ });\nclass StorageAvailable {\n  constructor(type) {\n    this.type = type;\n    this.storage = window[this.type];\n  }\n\n  try() {\n    const x = '__storage_test__';\n    this.storage.setItem(x, x);\n    this.storage.removeItem(x);\n    return true;\n  }\n\n  catch(e) {\n    return (\n      e instanceof DOMException\n      && (e.code === 22\n        || e.code === 1014\n        || e.name === 'QuotaExceededError'\n        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')\n      && this.storage\n      && this.storage.length !== 0\n    );\n  }\n}\nconst setTasksToStorage = (taskss) => {\n  localStorage.setItem('Tasks', JSON.stringify(taskss));\n};\n\nconst getTasksFromStorage = () => {\n  if (new StorageAvailable('localStorage')) {\n    const tasksFromStorage = JSON.parse(localStorage.getItem('Tasks'));\n\n    if (tasksFromStorage !== null) {\n      return tasksFromStorage;\n    }\n    return [];\n  }\n  return [];\n};\n\n\n\n\n//# sourceURL=webpack://setup-webpack/./src/storage.js?");

/***/ }),

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TodoListItems = (taskss) => {\r\n  const todolist = document.querySelector('.list-container');\r\n  todolist.innerHTML = '';\r\n  taskss.forEach((e) => {\r\n    const divElement = document.createElement('div');\r\n    const divElement2 = document.createElement('div');\r\n    const htmlitem = `\r\n            <div>\r\n                <input type=\"checkbox\" class=\"completed\" name=\"item\" id=\"item\" />\r\n                <textarea rows=\"1\" for=\"item\" class=\"item\" required\"\">${e.description}</textarea>\r\n            </div>\r\n            <i class=\"fa-solid fa-ellipsis-vertical\"></i>\r\n        `;\r\n    divElement2.classList.add('line');\r\n    divElement.classList.add('list');\r\n    divElement.innerHTML = htmlitem;\r\n    todolist.appendChild(divElement);\r\n    todolist.appendChild(divElement2);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoListItems);\n\n//# sourceURL=webpack://setup-webpack/./src/todolist.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;