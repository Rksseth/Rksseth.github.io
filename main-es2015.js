(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>\n    <mat-card class=\"drawer-card mat-elevation-z0\">\n      <img src=\"../assets/ravi-seth.png\" class=\"profile-img mat-elevation-z4\">\n      <mat-card-title>Ravi Seth</mat-card-title>\n\n      <div>Hello! I am a <b>web and mobile developer</b> looking for <b>full-time</b> opportunities in 2021</div>\n\n      <a mat-stroked-button href=\"../assets/Resume.pdf\" target=\"_blank\" class=\"resume-button hover-button\">See Resume</a>\n\n      <div class=\"divider-container\">\n        <div class=\"line\"><mat-divider></mat-divider></div>\n        <div class=\"text\">CONTACT ME</div>\n        <div class=\"line\"><mat-divider></mat-divider></div>\n      </div>\n\n      <mat-card-actions>\n        <a mat-icon-button href=\"https://github.com/Rksseth\" target=\"_blank\" class=\"hover-button\">\n          <fa-icon [icon]=\"faGithub\" transform=\"grow-8\"></fa-icon>\n        </a>\n        <a mat-icon-button href=\"https://www.linkedin.com/in/rksseth\" target=\"_blank\" class=\"hover-button\">\n          <fa-icon [icon]=\"faLinkedin\" transform=\"grow-8\"></fa-icon>\n        </a>\n        <a mat-icon-button href=\"mailto:ravi.seth@uwaterloo.ca\" class=\"hover-button\">\n          <fa-icon [icon]=\"faEnvelope\" transform=\"grow-8\"></fa-icon>\n        </a>\n      </mat-card-actions>\n\n      <mat-card-subtitle>2020 &copy; Ravi Seth</mat-card-subtitle>\n    </mat-card>\n  </mat-drawer>\n  <mat-drawer-content>\n    <router-outlet></router-outlet>\n  </mat-drawer-content>\n</mat-drawer-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content-popup/content-popup.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/content-popup/content-popup.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n    <mat-toolbar-row>\n        <h1 mat-dialog-title>{{ project.title }}</h1>\n\n        <button mat-icon-button (click)=\"onNoClick()\">\n            <mat-icon>close</mat-icon>\n        </button>\n    </mat-toolbar-row>\n    <mat-toolbar-row class=\"details\">\n        <p>{{ project.subtitle }}</p>\n        <i>{{ project.date }}</i>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-divider></mat-divider>\n<div class=\"content\">\n    <p style=\"margin-bottom: 2rem;white-space:pre-wrap;\" [innerHTML]=\"project.story\"></p>\n    \n    <div class=\"image-container\">\n        <img [src]=\"project.picture\">\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    Work Experiences \n    <i class=\"mat-hint\">(\n        <u><a href=\"../assets/Resume.pdf\" target=\"_blank\">view resume</a></u>\n        for more details)\n    </i>\n    <mat-divider></mat-divider>\n</div>\n<div class=\"outer\">\n    <img src=\"../../assets/work/aws.png\" height=\"50\">\n    <img src=\"../../assets/work/klyck.webp\" height=\"50\">\n    <img src=\"../../assets/work/uw.png\" height=\"75\">\n    <img src=\"../../assets/work/linamar.png\" height=\"50\">\n</div>\n\n<div class=\"header\">\n    Projects\n    <mat-divider></mat-divider>\n</div>\n<div class=\"outer\">\n\n    <mat-card *ngFor=\"let project of sideProjects\" matRipple class=\"item\" (click)=\"openDialog(project)\">\n        <mat-card-title>{{ project.title }}</mat-card-title>\n        \n        <div class=\"subtitle\">\n            <mat-card-subtitle>{{ project.subtitle }}</mat-card-subtitle>\n            <i>\n                <mat-card-subtitle>{{ project.date }}</mat-card-subtitle>\n            </i>\n        </div>\n\n        <img mat-card-image [src]=\"project.picture\">\n    </mat-card>\n</div>\n\n<div class=\"header\">\n    Athletics\n    <mat-divider></mat-divider>\n</div>\n\n<div class=\"outer\">\n\n    <mat-card *ngFor=\"let project of athletics\" matRipple class=\"item\" (click)=\"openDialog(project)\">\n        <mat-card-title>{{ project.title }}</mat-card-title>\n        \n        <div class=\"subtitle\">\n            <mat-card-subtitle>{{ project.subtitle }}</mat-card-subtitle>\n            <i>\n                <mat-card-subtitle>{{ project.date }}</mat-card-subtitle>\n            </i>\n        </div>\n\n        <img mat-card-image [src]=\"project.picture\">\n    </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");




const routes = [
    { path: '', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  width: 100%;\n  height: 100%;\n}\n\n.profile-img {\n  border-radius: 50%;\n  height: 100px;\n  width: 100px;\n  margin-bottom: 10px;\n}\n\n.drawer-card {\n  width: 200px;\n  text-align: center;\n}\n\n.resume-button {\n  margin: 20px;\n}\n\n.hover-button {\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n}\n\n.hover-button:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n\n.divider-container {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 50px;\n  overflow: hidden;\n}\n\n.line {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.text {\n  padding-left: 10px;\n  padding-right: 10px;\n  background-color: white;\n  z-index: 10;\n  color: grey;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpc2V0aC9EZXNrdG9wL0FuZ3VsYXJNYXRlcmlhbFBlcnNvbmFsV2Vic2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSwwQ0FBQTtFQUFBLGtDQUFBO0VBQUEsMEJBQUE7RUFBQSxrREFBQTtBQ0NKOztBRENBO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucHJvZmlsZS1pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZHJhd2VyLWNhcmQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXN1bWUtYnV0dG9uIHtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5ob3Zlci1idXR0b24ge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XG59XG4uaG92ZXItYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5kaXZpZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuICBcbi5saW5lIHtcbiAgICBmbGV4OiAxO1xufVxuXG4udGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMTA7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZHJhd2VyLWNhcmQge1xuICB3aWR0aDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlc3VtZS1idXR0b24ge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5ob3Zlci1idXR0b24ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmhvdmVyLWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLmRpdmlkZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGluZSB7XG4gIGZsZXg6IDE7XG59XG5cbi50ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");




let AppComponent = class AppComponent {
    constructor() {
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLinkedin"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/content-popup/content-popup.component */ "./src/app/components/content-popup/content-popup.component.ts");







// MATERIAL COMPONENTS











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__["HomePageComponent"],
            _components_content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_17__["ContentPopupComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_components_content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_17__["ContentPopupComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/content-popup/content-popup.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/content-popup/content-popup.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-toolbar {\n  padding: 0;\n  background-color: white;\n}\n.mat-toolbar ::ng-deep.mat-toolbar-row {\n  padding: 0;\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.content {\n  height: 324px;\n  overflow-y: auto;\n}\nimg {\n  width: 452px;\n}\n.details {\n  font-size: 12px;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpc2V0aC9EZXNrdG9wL0FuZ3VsYXJNYXRlcmlhbFBlcnNvbmFsV2Vic2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC1wb3B1cC9jb250ZW50LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQtcG9wdXAvY29udGVudC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQ0k7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDUjtBREdBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDQUo7QURFQTtFQUNJLFlBQUE7QUNDSjtBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC1wb3B1cC9jb250ZW50LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIFxuICAgIDo6bmctZGVlcC5tYXQtdG9vbGJhci1yb3cge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG59XG5cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDMyNHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5pbWcge1xuICAgIHdpZHRoOiA0NTJweDtcbn1cblxuLmRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuIiwiLm1hdC10b29sYmFyIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWF0LXRvb2xiYXIgOjpuZy1kZWVwLm1hdC10b29sYmFyLXJvdyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMzI0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbmltZyB7XG4gIHdpZHRoOiA0NTJweDtcbn1cblxuLmRldGFpbHMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmV5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/content-popup/content-popup.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/content-popup/content-popup.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContentPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPopupComponent", function() { return ContentPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ContentPopupComponent = class ContentPopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.project = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ContentPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ContentPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'content-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content-popup/content-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-popup.component.scss */ "./src/app/components/content-popup/content-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ContentPopupComponent);



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  padding: 20px 0 20px 20px;\n  font-size: 20px;\n  position: relative;\n}\n.header .mat-divider {\n  margin: 20px 0 0 0;\n  width: 200px;\n  height: 10px;\n  background-color: lightcoral;\n}\n.outer {\n  padding: 20px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.item {\n  width: 300px;\n  overflow: hidden;\n  margin: 10px;\n  position: relative;\n}\n.item img {\n  height: 200px;\n}\n.subtitle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.story {\n  text-overflow: ellipsis;\n}\n.fade {\n  height: 100px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(white));\n  background-image: linear-gradient(to bottom, transparent, white);\n}\n.mat-hint {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpc2V0aC9EZXNrdG9wL0FuZ3VsYXJNYXRlcmlhbFBlcnNvbmFsV2Vic2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDQ1I7QURFQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNDSjtBREVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7QUNDUjtBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0FKO0FER0E7RUFDSSx1QkFBQTtBQ0FKO0FER0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLCtGQUFBO0VBQUEsZ0VBQUE7QUNBSjtBREdBO0VBQ0ksZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgcGFkZGluZzogMjBweCAwIDIwcHggMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLm1hdC1kaXZpZGVyIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbiAgICB9XG59XG4ub3V0ZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5pdGVtIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG59XG5cbi5zdWJ0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zdG9yeSB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5mYWRlIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIHdoaXRlKTtcbn1cblxuLm1hdC1oaW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG59IiwiLmhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlciAubWF0LWRpdmlkZXIge1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4ub3V0ZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uaXRlbSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaXRlbSBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uc3VidGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zdG9yeSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZmFkZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIHdoaXRlKTtcbn1cblxuLm1hdC1oaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content-popup/content-popup.component */ "./src/app/components/content-popup/content-popup.component.ts");




class Project {
    constructor(title, subtitle, date, picture, story) {
        this.title = title;
        this.subtitle = subtitle;
        this.date = date;
        this.picture = picture;
        this.story = story;
    }
}
let HomePageComponent = class HomePageComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.weschedule = `We wanted to automate the scheduling process of varsity sport team practises to allow more time playing and less time scheduling.  WeSchedule is an online platform that allows admins and schedules to create weekly schedules with a click of a button taking into account courts, hours of availability, and each individual players' availability.  We have already completed 5+ sprints and 200+ features and bug fixes deployed.`;
        this.signIt = `We wanted to empower people through the ability of speech by creating an app that translates sign language to English.  Sign it translates sign language to English in real time using machine learning and Open CV to track hand movement and identify different signed words and letters.
  
We used Open CV to track the hand movement and machine learning in order to identify the different signs used for different letters.  After identifying the signed letter, we stored the signed letters to form full sentences. Using Azure, we trained the data set to work on various hands and environments.

Made with &hearts; and Python, OpenCV, TensorFlow, Azure Custom Vision Service`;
        this.redeye = `Life travels fast, and car crashes can happen in the blink of an eye, but with our companion, Red Eye, we can prevent this.  Long and tedious drives can increase the risk of falling asleep at the wheel and medical emergencies don’t wait until you’re out of the car. This Android app is designed to create a more positive, seamless driving experience by helping drivers when they are tired or in the event that they have a medical emergency while behind the wheel.
   
The app uses face detection to track and analyze the driver’s face, identifying if they have fallen asleep or have experienced a medical emergency through their eyes (whether they are opened or closed). The app then suggests a course of action: find the nearest hotel or alert the authorities. If the former is chosen, a list of nearby hotels will appear on screen, if the latter is chosen, the authorities will be alerted and given the exact coordinates by accessing the phone’s location.

Made with &hearts; and Java, Android, Google's Cloud Vision API, and Google Translate API`;
        this.recyclops = `Creating an environmentally friendly campus for UW students has numerous benefits on health and stress levels. In order to achieve this, students need to take an active role in keeping the campus clean. Due to a lack of knowledge, many students confuse the disposal of every day objects, putting most of the items in the garbage when they should be placed in the compost or recycle bin. Not only will this cause our landfills to grow at a higher rate, sending compost to landfills where there is no oxygen can cause methane to be released when broken down. Methane is an incredible potent and dangerous greenhouse gas. Waterloo’s carbon footprint does not end on campus, but continues to the landfill through the incorrect disposal of waste by students.    

The app captures a photo of an item to be thrown out and uses Google’s Cloud Vision API to identify the object. Recyclops then classifies and informs the user of where the item should be placed.

Made with &hearts; and Java, Android, Google's Cloud Vision API`;
        this.textris = `Textris combines Tetris and Scrabble into a leaderboard game with letter generation and word verification using Apple’s built in dictionary.
  
Using the full software development cycle, Textris was designed, implemented, tested, and published to the iOS App Store with over 50 users!

Made with &hearts; and Swift, iOS, Xcode, Apple App Store Connect`;
        this.ouas = `The Waterloo Warriors took part in the 2018 OUA Championships this past weekend in Kingston hosted by Queen's and the men's team came away with the silver medal led by top seed Thomas Manley (Barrie/) and second seed Ravi Seth (Fergus/).

Manley and Seth both played outstanding squash finishing the championship with 5-1 records. Manley did not drop a set until his final match when he faced David Mill of Western and lost in a tight four set battle. 
  
Seth played an incredibly strong battle in his match with Matt Henderson of Western which went the distance. Seth came up just short in the epic battle losing the final set 11-9.
  
Both Manley and Seth were named OUA all-stars and were big parts of Waterloo earning the men's silver.
  
As a team the men went 5-1 beating Queen's (6-3), McMaster (9-0), Brock (9-0), Toronto (6-3) and falling to Western (9-0) while the women couldn't muster a win but had strong individual performances from Charlotte Copas (Toronto/), Tori Sypher and Tori Grootjen (Woodstock/).
  
Men's Standings (record)
1) Western (54-0)
2) Waterloo (39-15)
3) Queen's (33-21)
4) Toronto (23-31)
5) Brock (20-34)
6) Guelph (16-38)
7) McMaster (4-50)
   
Women's Standings (record)
1) Queen's (41-4)
2) Toronto (37-8)
3) Western (21-24)
4) Brock (18-26)
5) McMaster (11-33)
6) Waterloo (6-39)
   
Men's MVP
David Mill (Western)
   
Women's MVP
Heather McLachlan (Brock)
   
Men's Rookie of the Year
Alex Collins (Queen's)
   
Women's Rookie of the Year
Heather McLachlan (Brock)
   
Men's Coach of the Year
Vinit Kudva (Waterloo)
   
Women's Coach of the Year
Josh Ginou (Toronto)
   
Men's All-Stars
David Mill (Western)
Matt Henderson (Western)
Thomas Manley (Barrie/) (Waterloo)
Mohamed Hamour (Brock)
Ravi Seth (Fergus/) (Waterloo)
Cameron Butler (Queen's)
   
Women's All-Stars
Heather McLachlan (Brock)
Olivia Waite (McMaster)
Charlotte Copas (Toronto/) (Waterloo)
Evelyn Moorhouse (Toronto)
Nora Abdelrahman Ibrahim (Queen's)
Amy Commisso (Western)`;
        this.worlds2016 = `Team Canada’s world junior men’s team was rounded out May 20-22 in Winnipeg (MB) when the Winnipeg Squash Racquet Club hosted Squash Canada’s World Junior Men’s Team trials. 

Underdog Ravi Seth from Elora, Ontario won the World Junior Men’s Team trials to capture a spot on Team Canada for Poland this summer.  Unseeded Ravi won his two pool matches 3-0 to set up a final match against top seed Matt Henderson from Victoria, BC.
  
Although leading in each of the first two games, Seth lost both and went 2-0 down to Henderson.  Seth then went on an incredible run to win 33 of the next 40 points, taking the next two games to level the match at 2 games all, and then to win the 5th comfortably 11-3.
  
Team trials results can be viewed <a href="../../assets/athletics/trials.pdf" target="_blank" title="trials results">here</a>.
  
Ravi Seth follows in his brother Cameron’s footsteps who made the Junior World Team back in 2012.
  
Henderson earned his spot on count back; he and Seth join 2016 Canadian U19 Men’s Champion Mike Mehl (AB) and Rahul Sehrawat (ON) to make the 4-person Team Canada squad.  Mehl and Sehrawat qualified for the team as points leaders accumulated in 3 (of a possible 4) selection events over each of the last two seasons.
  
Team Canada will compete at this summer’s WSF World Junior Squash Championships being held in Bielsko-Biała, Poland from August 6-17.`;
        this.cwg2015 = `Young athletes from across the country are packing their bags, ready to take off on the trip of a lifetime this weekend to compete in the 2015 Canada Winter Games in Prince George, BC.

The Canada Games kicked off February 13th with an exciting Opening Ceremony at the CN Centre in Prince George, and is wrapping up competition in 12 sports as part of Week 1. Squash joins 10 other sports as Week 2 competition kicks off Sunday.
  
Squash is proud to have increased participation from the 2011 edition of the Games, hosted in Halifax, as 12 Provinces and Territories will be competing in Prince George. Also new to this year’s event is an Individual Competition, featuring a draw of 16 each for boys and girls.
  
“We’re very happy that all of our member Provinces and Territories will be a part of this year’s Canada Games”, says Danny Da Costa, Squash Canada Executive Director. “The inclusion of the Individual Competition is also a very exciting aspect, as it will give more Provinces and Territories a shot at the podium while showcasing some excellent squash.”
  
The Individual draws begin Sunday evening, with the Team competition starting on Monday and continuing through next Saturday.
  
The Canada Winter Games is held every two years, alternating between Summer and Winter Games. A collaboration of youth, sport, culture and community, the Canada Games is Canada’s largest multi-sport competition for young athletes. First held in 1967 in Quebec City, Canada Games showcases our country’s next generation of national, international, and Olympic Champions.
  
<a href="https://youtu.be/yvp5qkxOCb0" target="_blank">Men's Squash Final - Ontario vs Alberta</a>`;
        this.uniworlds = `The 2018 World University Squash Championships concluded on September 12th.  Five Canadians stepped up to play for Canada! From September 6th-12th, student athletes from around the world skipped some school, converging in Birmingham for a week of intense squash competition! This year, 56 male and 28 female players from a record 21 countries participated in the tournament.

In the team event, the joint male/female Canadian squad finished 8th.  Canada finsihed 2nd in Pool play, winning 2-1 versus Switzerland and suffered a 3-0 loss to evenual finalsit, Malaysia.  The next two matches were narrow 2-1 losses to Czech Republic and Australia.
  
<a href="https://youtu.be/6T0YGMvV4g4" target="_blank">Ravi Seth vs Joseph Williams England - Full Match</a>`;
        this.sideProjects = [
            new Project("WeSchedule", "University of Waterloo", "Sept. 13 2018 - present", "../../assets/sideProjects/weschedule.png", this.weschedule),
            new Project("Sign It", "Hack the North", "Sept. 13 2019", "../../assets/sideProjects/signit.png", this.signIt),
            new Project("Red Eye", "PennApps Hackathon", "Sept. 6 2019", "../../assets/sideProjects/redeye-withme.png", this.redeye),
            new Project("Recyclops", "UWEnergyHacks", "June 1 2019", "../../assets/sideProjects/best-design.jpg", this.recyclops),
            new Project("Textris", "Published on iOS App Store", "Apr. 24 2018", "../../assets/sideProjects/textris.png", this.textris),
        ];
        this.athletics = [
            new Project("Squash Team Canada", "World Universities, England", "Sept. 6 2018", "../../assets/athletics/uniworlds.png", this.uniworlds),
            new Project("UW Varsity Squash Team", "OUA's Squash Championships", "Feb. 12 2018", "../../assets/athletics/oua2018.JPG", this.ouas),
            new Project("Squash Team Canada", "World Juniors, Poland", "Aug. 7 2016", "../../assets/athletics/worlds2016.jpg", this.worlds2016),
            new Project("Squash Team Ontario", "Canada Winter Gamces, BC", "Feb. 21 2015", "../../assets/athletics/cwg2015.jpeg", this.cwg2015)
        ];
    }
    ngOnInit() {
    }
    openDialog(project) {
        const dialogRef = this.dialog.open(_content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_3__["ContentPopupComponent"], {
            width: '500px',
            height: '500px',
            data: project,
            panelClass: 'custom-dialog-container'
        });
        dialogRef.afterClosed().subscribe(res => {
        });
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.scss */ "./src/app/components/home-page/home-page.component.scss")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raviseth/Desktop/AngularMaterialPersonalWebsite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map