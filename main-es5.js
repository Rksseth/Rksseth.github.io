function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>\n    <mat-card class=\"drawer-card mat-elevation-z0\">\n\n      <img src=\"../assets/ravi-seth.png\" class=\"profile-img mat-elevation-z8\">\n      <mat-card-title>\n        <b>Ravi Seth</b>\n      </mat-card-title>\n\n      <table>\n        <tr>\n          <td>\n            <mat-icon>engineering</mat-icon>\n          </td>\n          <td>Mechatronics Engineer</td>\n        </tr>\n        <tr>\n          <td>\n            <mat-icon>code</mat-icon>\n          </td>\n          <td>Software Developer</td>\n        </tr>\n        <tr>\n          <td>\n            <mat-icon>sports_tennis</mat-icon>\n          </td>\n          <td>National Team Athlete</td>\n        </tr>\n      </table>\n\n      <!-- <div class=\"intro-text\">\n        \n        <span [innerHTML]=\"modifiedIntroText\"></span>\n      </div> -->\n\n      <a mat-stroked-button href=\"../assets/Resume.pdf\" target=\"_blank\" class=\"resume-button hover-button\">See Resume</a>\n\n      <div class=\"divider-container\">\n        <div class=\"line\"><mat-divider></mat-divider></div>\n        <div class=\"text\">CONTACT ME</div>\n        <div class=\"line\"><mat-divider></mat-divider></div>\n      </div>\n\n      <mat-card-actions>\n        <a mat-icon-button href=\"https://github.com/Rksseth\" target=\"_blank\" class=\"hover-button\">\n          <fa-icon [icon]=\"faGithub\" transform=\"grow-8\"></fa-icon>\n        </a>\n        <a mat-icon-button href=\"https://www.linkedin.com/in/rksseth\" target=\"_blank\" class=\"hover-button\">\n          <fa-icon [icon]=\"faLinkedin\" transform=\"grow-8\"></fa-icon>\n        </a>\n        <a mat-icon-button href=\"mailto:ravi.seth@uwaterloo.ca\" class=\"hover-button\">\n          <fa-icon [icon]=\"faEnvelope\" transform=\"grow-8\"></fa-icon>\n        </a>\n      </mat-card-actions>\n\n      <mat-card-subtitle>2020 &copy; Ravi Seth</mat-card-subtitle>\n    </mat-card>\n  </mat-drawer>\n  <mat-drawer-content>\n    <router-outlet></router-outlet>\n  </mat-drawer-content>\n</mat-drawer-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/concept-map-page/concept-map-page.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/concept-map-page/concept-map-page.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsConceptMapPageConceptMapPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"outer\">\n    <mat-toolbar class=\"mat-elevation-z8\">\n        <mat-form-field>\n            <input matInput autocomplete=\"off\" placeholder=\"Search\" [(ngModel)]=\"search\" [disabled]=\"loading\">\n        </mat-form-field>\n        <button mat-mini-fab (click)=\"completeSearch()\" [disabled]=\"loading\">\n            <mat-spinner *ngIf=\"loading; else notLoading\" [diameter]=\"25\"></mat-spinner>\n            \n            <ng-template #notLoading>\n                <mat-icon matPrefix>search</mat-icon>\n            </ng-template>\n        </button>\n        <div class=\"form-options\">\n            <h2>Links link back to search</h2>\n            <mat-checkbox labelPosition=\"before\" [disabled]=\"loading\" [(ngModel)]=\"linksLinkBack\"></mat-checkbox>\n        </div>\n        <div class=\"form-options\">\n            <h2>Minimum Percent Match</h2>\n            <mat-slider\n                [disabled]=\"loading\"\n                max=\"0.5\"\n                min=\"0\"\n                step=\"0.1\"\n                [thumbLabel]=\"true\"\n                [(ngModel)]=\"minPercentMatch\">\n            </mat-slider>\n        </div>\n    </mat-toolbar>\n    <div id=\"canvas\" class=\"mat-elevation-z8\">\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content-popup/content-popup.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/content-popup/content-popup.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContentPopupContentPopupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar>\n    <mat-toolbar-row>\n        <h1 mat-dialog-title>{{ project.title }}</h1>\n\n        <button mat-icon-button (click)=\"onNoClick()\">\n            <mat-icon>close</mat-icon>\n        </button>\n    </mat-toolbar-row>\n    <mat-toolbar-row class=\"details\">\n        <p>{{ project.subtitle }}</p>\n        <i>{{ project.date }}</i>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-divider></mat-divider>\n<div class=\"content\">\n    <p style=\"margin-bottom: 2rem;white-space:pre-wrap;\" [innerHTML]=\"project.story\"></p>\n    \n    <div class=\"image-container\">\n        <img [src]=\"project.picture\">\n    </div>\n\n    <!-- Dirty coding in order to have live demo in single page github website -->\n    <div *ngIf=\"project.title == 'Mind Map'\">\n        <h3>Live Demo</h3>\n        <concept-map-page ></concept-map-page>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"black-body\">\n    <div class='section-title'>SKILLS</div>\n\n    <div class=\"job-items\">\n        <div class=\"job-item\">\n            <h3>Languages</h3>\n            <mat-chip-list>\n                <mat-chip color=\"primary\" selected>Python</mat-chip>\n                <mat-chip color=\"primary\" selected>TypeScript</mat-chip>\n                <mat-chip color=\"primary\" selected>Java</mat-chip>\n                <mat-chip color=\"primary\" selected>Swift</mat-chip>\n                <mat-chip color=\"primary\" selected>C++</mat-chip>\n                <mat-chip color=\"primary\" selected>Scala</mat-chip>\n            </mat-chip-list>\n        </div>\n        <div class=\"job-item\">\n            <h3>Libraries / Frameworks</h3>\n            <mat-chip-list>\n                <mat-chip color=\"accent\" selected>Angular</mat-chip>\n                <mat-chip color=\"accent\" selected>Node</mat-chip>\n                <mat-chip color=\"accent\" selected>Spark</mat-chip>\n                <mat-chip color=\"accent\" selected>NPM</mat-chip>\n                <mat-chip color=\"accent\" selected>TensorFlow</mat-chip>\n                <mat-chip color=\"accent\" selected>OpenCV</mat-chip>\n            </mat-chip-list>\n        </div>\n        <div class=\"job-item\">\n            <h3>Tools</h3>\n            <mat-chip-list>\n                <mat-chip color=\"warn\" selected>Git</mat-chip>\n                <mat-chip color=\"warn\" selected>Android / IOS SDK</mat-chip>\n                <mat-chip color=\"warn\" selected>GCP</mat-chip>\n                <mat-chip color=\"warn\" selected>AWS</mat-chip>\n                <mat-chip color=\"warn\" selected>Firebase</mat-chip>\n                <mat-chip color=\"warn\" selected>Docker</mat-chip>\n            </mat-chip-list>\n        </div>\n    </div>\n</div>\n\n<div class=\"white-body\">\n    <div class='section-title'>WORK EXPERIENCE</div>\n\n    <div class=\"job-items\">\n        <div *ngFor=\"let job of jobs\" class=\"job-item\">\n            <img [src]='job.picture' class=\"gray-img\" height=\"50px\">\n\n            <h3>{{ job.subtitle }}</h3>\n            <div class=\"mat-small\">{{ job.date }}</div>\n        </div>\n    </div>\n</div>\n\n<div class=\"black-body\">\n    <div class='section-title'>PROJECTS</div>\n\n    <div class=\"job-items\">\n        <div *ngFor=\"let project of sideProjects\" class=\"job-item\">\n            <img [src]='project.picture' height=\"100px\">\n            <h3>{{ project.title }}</h3>\n            <div class=\"mat-small\">{{ project.subtitle }}</div>\n            <div class=\"mat-small\">{{ project.date }}</div>\n        </div>\n    </div>\n</div>\n\n<div class=\"white-body\">\n    <div class=\"section-title\">ATHLETICS</div>\n\n    <div class=\"job-items\">\n        <div *ngFor=\"let athlete of athletics\" class=\"job-item\">\n            <img [src]='athlete.picture' height=\"100px\">\n            <h3>{{ athlete.title }}</h3>\n            <div class=\"mat-small\">{{ athlete.subtitle }}</div>\n            <div class=\"mat-small\">{{ athlete.date }}</div>\n        </div>\n    </div>\n</div>\n\n<!-- <table>\n    <tr>\n        <th>Languages</th>\n        <th>Libraries / Frameworks</th>\n        <th>Tools</th>\n    </tr>\n    <tr>\n        <td>\n            <mat-chip-list>\n                <mat-chip color=\"primary\" selected>Python</mat-chip>\n                <mat-chip color=\"primary\" selected>TypeScript</mat-chip>\n                <mat-chip color=\"primary\" selected>Java</mat-chip>\n                <mat-chip>Swift</mat-chip>\n                <mat-chip>C++</mat-chip>\n                <mat-chip>Scala</mat-chip>\n            </mat-chip-list>\n        </td>\n        <td>\n            <mat-chip-list>\n                <mat-chip color=\"primary\" selected>Angular</mat-chip>\n                <mat-chip color=\"primary\" selected>Node</mat-chip>\n                <mat-chip color=\"primary\" selected>Spark</mat-chip>\n                <mat-chip>NPM</mat-chip>\n                <mat-chip>TensorFlow</mat-chip>\n                <mat-chip>OpenCV</mat-chip>\n            </mat-chip-list>\n        </td>\n        <td>\n            <mat-chip-list>\n                <mat-chip color=\"primary\" selected>Git</mat-chip>\n                <mat-chip color=\"primary\" selected>Android / IOS SDK</mat-chip>\n                <mat-chip color=\"primary\" selected>GCP</mat-chip>\n                <mat-chip>AWS</mat-chip>\n                <mat-chip>Firebase</mat-chip>\n                <mat-chip>Docker</mat-chip>\n            </mat-chip-list>\n        </td>\n    </tr>\n</table> -->\n\n<!-- <div class=\"header\">\n    <b class=\"title\">Work Experiences </b>\n    <mat-divider></mat-divider>\n</div>\n<table class=\"work-table\">\n    <tr>\n        <td *ngFor=\"let job of jobs\">\n            <div>\n                <h3 style=\"padding-top: 0%;\">{{ job.title }}</h3>\n                <h4 style=\"padding-top: 0%;\">{{ job.subtitle }}</h4>\n                <mat-card-content>\n                    {{ job.story }}\n                </mat-card-content>\n            </div>\n        </td>\n    </tr>\n</table>\n\n\n\n\n\n\n<div class=\"header\">\n    <b class=\"title\">Skills</b>\n    <mat-divider></mat-divider>\n</div>\n<div class=\"outer-chips\">\n    <div class=\"chip-section\">\n        <h3 class=\"chip-title\">Languages</h3>\n        <mat-chip-list>\n            <mat-chip color=\"primary\" selected>Python</mat-chip>\n            <mat-chip color=\"primary\" selected>TypeScript</mat-chip>\n            <mat-chip color=\"primary\" selected>Java</mat-chip>\n            <mat-chip>Swift</mat-chip>\n            <mat-chip>C++</mat-chip>\n            <mat-chip>Scala</mat-chip>\n        </mat-chip-list>\n    </div>\n    <div class=\"chip-section\">\n        <h3 class=\"chip-title\">Libraries / Frameworks</h3>\n        <mat-chip-list>\n            <mat-chip color=\"primary\" selected>Angular</mat-chip>\n            <mat-chip color=\"primary\" selected>Node</mat-chip>\n            <mat-chip color=\"primary\" selected>Spark</mat-chip>\n            <mat-chip>NPM</mat-chip>\n            <mat-chip>TensorFlow</mat-chip>\n            <mat-chip>OpenCV</mat-chip>\n        </mat-chip-list>\n    </div>\n    <div class=\"chip-section\">\n        <h3 class=\"chip-title\">Tools</h3>\n        <mat-chip-list>\n            <mat-chip color=\"primary\" selected>Git</mat-chip>\n            <mat-chip color=\"primary\" selected>Android / IOS SDK</mat-chip>\n            <mat-chip color=\"primary\" selected>GCP</mat-chip>\n            <mat-chip>AWS</mat-chip>\n            <mat-chip>Firebase</mat-chip>\n            <mat-chip>Docker</mat-chip>\n        </mat-chip-list>\n    </div>\n</div>\n\n<div class=\"header\">\n    <b class=\"title\">Projects</b>\n    <mat-divider></mat-divider>\n</div>\n<div class=\"outer\">\n\n    <mat-card *ngFor=\"let project of sideProjects\" class=\"item\" (click)=\"openDialog(project)\">\n        <mat-card-title>{{ project.title }}</mat-card-title>\n\n        <img *ngIf=\"project.subtitle == 'EnactusHacks' || project.subtitle == 'UWEnergyHacks'\" src='../../../assets/sideProjects/trophy.png' class=\"banner\">\n        \n        <div class=\"subtitle\">\n            <mat-card-subtitle>{{ project.subtitle }}</mat-card-subtitle>\n            <i>\n                <mat-card-subtitle>{{ project.date }}</mat-card-subtitle>\n            </i>\n        </div>\n\n        <img mat-card-image [src]=\"project.picture\">\n    </mat-card>\n</div>\n\n<div class=\"header\">\n    <b class=\"title\">Athletics</b>\n    <mat-divider></mat-divider>\n</div>\n\n<div class=\"outer\">\n\n    <mat-card *ngFor=\"let project of athletics\" class=\"item\" (click)=\"openDialog(project)\">\n        <mat-card-title>{{ project.title }}</mat-card-title>\n        \n        <div class=\"subtitle\">\n            <mat-card-subtitle>{{ project.subtitle }}</mat-card-subtitle>\n            <i>\n                <mat-card-subtitle>{{ project.date }}</mat-card-subtitle>\n            </i>\n        </div>\n\n        <img mat-card-image [src]=\"project.picture\">\n    </mat-card>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home-page/home-page.component */
    "./src/app/components/home-page/home-page.component.ts");

    var routes = [{
      path: '',
      component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  width: 100%;\n  height: 100%;\n}\n\ntable {\n  width: 100%;\n}\n\ntable th, table td {\n  font-style: 10px;\n}\n\n.mat-card-title {\n  font-weight: bold;\n  font-family: \"Viaoda Libre\", cursive;\n  font-size: 30px;\n}\n\n.profile-img {\n  border-radius: 50%;\n  height: 150px;\n  width: 150px;\n  margin-bottom: 10px;\n  border: 3px solid gold;\n}\n\n.drawer-card {\n  width: 200px;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n}\n\n.drawer-card .wave {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  z-index: -1;\n}\n\n.resume-button {\n  margin: 20px;\n}\n\n.hover-button {\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n}\n\n.hover-button:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n\n.divider-container {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 50px;\n  overflow: hidden;\n}\n\n.line {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.text {\n  padding-left: 10px;\n  padding-right: 10px;\n  background-color: white;\n  z-index: 10;\n  color: grey;\n  font-size: 12px;\n}\n\n.blinking-cursor {\n  font-weight: 100;\n  font-size: 20px;\n  color: #2E3D48;\n}\n\n.intro-text {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpc2V0aC9Eb2N1bWVudHMvQ1MvV2ViL0FuZ3VsYXJNYXRlcmlhbFBlcnNvbmFsV2Vic2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURDSTtFQUNJLGdCQUFBO0FDQ1I7O0FER0E7RUFDSSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQ0RKOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRFI7O0FES0E7RUFDSSxZQUFBO0FDRko7O0FES0E7RUFDSSwwQ0FBQTtFQUFBLGtDQUFBO0VBQUEsMEJBQUE7RUFBQSxrREFBQTtBQ0ZKOztBRElBO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICB0aCwgdGQge1xuICAgICAgICBmb250LXN0eWxlOiAxMHB4O1xuICAgIH1cbn1cblxuLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ1ZpYW9kYSBMaWJyZScsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ucHJvZmlsZS1pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdvbGQ7XG59XG5cbi5kcmF3ZXItY2FyZCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgLndhdmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG59XG5cbi5yZXN1bWUtYnV0dG9uIHtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5ob3Zlci1idXR0b24ge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XG59XG4uaG92ZXItYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5kaXZpZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuICBcbi5saW5lIHtcbiAgICBmbGV4OiAxO1xufVxuXG4udGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMTA7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYmxpbmtpbmctY3Vyc29yIHtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzJFM0Q0ODtcbn1cblxuLmludHJvLXRleHQge1xuICAgIGhlaWdodDogMTAwcHg7XG59XG4gIFxuICBcbiAgIiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlIHRoLCB0YWJsZSB0ZCB7XG4gIGZvbnQtc3R5bGU6IDEwcHg7XG59XG5cbi5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJWaWFvZGEgTGlicmVcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ucHJvZmlsZS1pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgZ29sZDtcbn1cblxuLmRyYXdlci1jYXJkIHtcbiAgd2lkdGg6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5kcmF3ZXItY2FyZCAud2F2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ucmVzdW1lLWJ1dHRvbiB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmhvdmVyLWJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuXG4uaG92ZXItYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4uZGl2aWRlci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5saW5lIHtcbiAgZmxleDogMTtcbn1cblxuLnRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJsaW5raW5nLWN1cnNvciB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyRTNENDg7XG59XG5cbi5pbnRyby10ZXh0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLinkedin"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
        this.introText = 'Hello! I am a <b>web and mobile developer</b> looking for <b>full-time</b> opportunities in 2021';
        this.modifiedIntroText = 'Hello! I am a web and mobile developer looking for full-time opportunities in 2021';
        this.cursorVisible = true;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "add",
        value: function add(a, b) {
          return a + b;
        }
      }, {
        key: "generateWeightedRandomValue",
        value: function generateWeightedRandomValue(elems, weights) {
          var totalWeight = weights.reduce(this.add, 0);
          var weighedElems = [];
          var currentElem = 0;

          while (currentElem < elems.length) {
            for (var i = 0; i < weights[currentElem]; i++) {
              weighedElems[weighedElems.length] = elems[currentElem];
            }

            currentElem++;
          }

          var rnd = Math.floor(Math.random() * totalWeight);
          return weighedElems[rnd];
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/home-page/home-page.component */
    "./src/app/components/home-page/home-page.component.ts");
    /* harmony import */


    var _components_content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/content-popup/content-popup.component */
    "./src/app/components/content-popup/content-popup.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_concept_map_page_concept_map_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/concept-map-page/concept-map-page.component */
    "./src/app/components/concept-map-page/concept-map-page.component.ts");
    /* harmony import */


    var _services_http_http_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./services/http/http.service */
    "./src/app/services/http/http.service.ts"); // MATERIAL COMPONENTS


    var appRoutes = [{
      path: '',
      component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_23__["HomePageComponent"]
    }, {
      path: 'mind-map',
      component: _components_concept_map_page_concept_map_page_component__WEBPACK_IMPORTED_MODULE_26__["ConceptMapPageComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_23__["HomePageComponent"], _components_content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_24__["ContentPopupComponent"], _components_concept_map_page_concept_map_page_component__WEBPACK_IMPORTED_MODULE_26__["ConceptMapPageComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"].forRoot(appRoutes), _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"]],
      providers: [_services_http_http_service__WEBPACK_IMPORTED_MODULE_27__["HttpService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      entryComponents: [_components_content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_24__["ContentPopupComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/concept-map-page/concept-map-page.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/concept-map-page/concept-map-page.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsConceptMapPageConceptMapPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#canvas {\n  height: 300px;\n  width: 300px;\n  border-radius: 50%;\n  background-color: lightgrey;\n  overflow: hidden;\n  margin: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.mat-toolbar {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 2%;\n  width: 96%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  background-color: white;\n  border-radius: 1em;\n}\n\n.form-options {\n  text-align: center;\n  margin: auto 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpc2V0aC9Eb2N1bWVudHMvQ1MvV2ViL0FuZ3VsYXJNYXRlcmlhbFBlcnNvbmFsV2Vic2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29uY2VwdC1tYXAtcGFnZS9jb25jZXB0LW1hcC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbmNlcHQtbWFwLXBhZ2UvY29uY2VwdC1tYXAtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbmNlcHQtbWFwLXBhZ2UvY29uY2VwdC1tYXAtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYW52YXMge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1hdC10b29sYmFyIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDIlO1xuICAgIHdpZHRoOiA5NiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xufVxuLmZvcm0tb3B0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0byAxMHB4O1xufSIsIiNjYW52YXMge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAyJTtcbiAgd2lkdGg6IDk2JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xufVxuXG4uZm9ybS1vcHRpb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG8gMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/concept-map-page/concept-map-page.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/concept-map-page/concept-map-page.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ConceptMapPageComponent */

  /***/
  function srcAppComponentsConceptMapPageConceptMapPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConceptMapPageComponent", function () {
      return ConceptMapPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/http/http.service */
    "./src/app/services/http/http.service.ts");
    /* harmony import */


    var jsnetworkx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jsnetworkx */
    "./node_modules/jsnetworkx/node/index.js");
    /* harmony import */


    var jsnetworkx__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(jsnetworkx__WEBPACK_IMPORTED_MODULE_3__);

    var ConceptMapPageComponent =
    /*#__PURE__*/
    function () {
      function ConceptMapPageComponent(httpService) {
        _classCallCheck(this, ConceptMapPageComponent);

        this.httpService = httpService;
        this.search = "web developer";
        this.minPercentMatch = 0.1;
        this.loading = false;
      }

      _createClass(ConceptMapPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.completeSearch();
        }
      }, {
        key: "completeSearch",
        value: function completeSearch() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var titles, newTitles, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, title, compareTitles, comp;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.loading = true;
                    _context.next = 3;
                    return this.httpService.getWikiAPI(this.search).toPromise();

                  case 3:
                    titles = _context.sent;
                    newTitles = [];
                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context.prev = 8;
                    _iterator = titles[Symbol.iterator]();

                  case 10:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                      _context.next = 20;
                      break;
                    }

                    title = _step.value;
                    _context.next = 14;
                    return this.httpService.getWikiAPI(title).toPromise();

                  case 14:
                    compareTitles = _context.sent;
                    comp = this.compareArrays(titles, compareTitles);

                    if (comp >= this.minPercentMatch) {
                      if (this.linksLinkBack) {
                        if (compareTitles.includes(this.search)) {
                          newTitles.push(title);
                        }
                      } else {
                        newTitles.push(title);
                      }
                    }

                  case 17:
                    _iteratorNormalCompletion = true;
                    _context.next = 10;
                    break;

                  case 20:
                    _context.next = 26;
                    break;

                  case 22:
                    _context.prev = 22;
                    _context.t0 = _context["catch"](8);
                    _didIteratorError = true;
                    _iteratorError = _context.t0;

                  case 26:
                    _context.prev = 26;
                    _context.prev = 27;

                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }

                  case 29:
                    _context.prev = 29;

                    if (!_didIteratorError) {
                      _context.next = 32;
                      break;
                    }

                    throw _iteratorError;

                  case 32:
                    return _context.finish(29);

                  case 33:
                    return _context.finish(26);

                  case 34:
                    console.log(titles.length);
                    console.log(newTitles.length);
                    this.createGraph(this.search, newTitles);
                    this.loading = false;

                  case 38:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[8, 22, 26, 34], [27,, 29, 33]]);
          }));
        }
      }, {
        key: "compareArrays",
        value: function compareArrays(arr1, arr2) {
          var val = arr1.reduce(function (total, cur) {
            if (arr2.includes(cur)) {
              return total + 1;
            } else {
              return total;
            }
          }, 0);
          return val / arr1.length;
        }
      }, {
        key: "createGraph",
        value: function createGraph(topic, titles) {
          var G = new jsnetworkx__WEBPACK_IMPORTED_MODULE_3__["Graph"]();
          G.addNode(topic);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = titles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var title = _step2.value;
              G.addEdgesFrom([[title, this.search], [this.search, title]]);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          jsnetworkx__WEBPACK_IMPORTED_MODULE_3__["draw"](G, {
            element: '#canvas',
            weighted: true,
            withLabels: true,
            nodeStyle: {
              stroke: 'none',
              fill: '#448AFF',
              r: 20
            },
            labelStyle: {
              'font-size': '10px'
            },
            edgeStyle: {
              fill: '#999'
            }
          });
        }
      }]);

      return ConceptMapPageComponent;
    }();

    ConceptMapPageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    ConceptMapPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'concept-map-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./concept-map-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/concept-map-page/concept-map-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./concept-map-page.component.scss */
      "./src/app/components/concept-map-page/concept-map-page.component.scss")).default]
    })], ConceptMapPageComponent);
    /***/
  },

  /***/
  "./src/app/components/content-popup/content-popup.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/content-popup/content-popup.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContentPopupContentPopupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-toolbar {\n  padding: 0;\n  background-color: white;\n}\n.mat-toolbar ::ng-deep.mat-toolbar-row {\n  padding: 0;\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.content {\n  height: 324px;\n  overflow-y: auto;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\nimg {\n  width: 452px;\n}\n.details {\n  font-size: 12px;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpc2V0aC9Eb2N1bWVudHMvQ1MvV2ViL0FuZ3VsYXJNYXRlcmlhbFBlcnNvbmFsV2Vic2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC1wb3B1cC9jb250ZW50LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQtcG9wdXAvY29udGVudC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQ0k7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDUjtBREdBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FDQUo7QURFQTtFQUNJLFlBQUE7QUNDSjtBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC1wb3B1cC9jb250ZW50LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIFxuICAgIDo6bmctZGVlcC5tYXQtdG9vbGJhci1yb3cge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG59XG5cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDMyNHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbmltZyB7XG4gICAgd2lkdGg6IDQ1MnB4O1xufVxuXG4uZGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4iLCIubWF0LXRvb2xiYXIge1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdG9vbGJhciA6Om5nLWRlZXAubWF0LXRvb2xiYXItcm93IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiAzMjRweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDQ1MnB4O1xufVxuXG4uZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyZXk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/content-popup/content-popup.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/content-popup/content-popup.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ContentPopupComponent */

  /***/
  function srcAppComponentsContentPopupContentPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentPopupComponent", function () {
      return ContentPopupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ContentPopupComponent =
    /*#__PURE__*/
    function () {
      function ContentPopupComponent(dialogRef, data) {
        _classCallCheck(this, ContentPopupComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.project = data;
      }

      _createClass(ContentPopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return ContentPopupComponent;
    }();

    ContentPopupComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ContentPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'content-popup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content-popup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content-popup/content-popup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content-popup.component.scss */
      "./src/app/components/content-popup/content-popup.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ContentPopupComponent);
    /***/
  },

  /***/
  "./src/app/components/home-page/home-page.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/home-page/home-page.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomePageHomePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  padding: 20px 0 20px 20px;\n  font-size: 20px;\n  position: relative;\n}\n.header .mat-divider {\n  margin: 10px 0 0 0;\n  width: 200px;\n  height: 10px;\n  background-color: black;\n  border-radius: 5px;\n}\n.header .title {\n  font-size: 30px;\n}\n.header .header-image {\n  position: absolute;\n  top: 0px;\n  left: -40px;\n  font-size: 160px;\n  z-index: -1;\n  color: rgba(154, 154, 154, 0.4);\n}\n.outer-work {\n  padding: 20px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  overflow-x: auto;\n  justify-content: space-around;\n  position: relative;\n}\n.outer {\n  padding: 20px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  position: relative;\n}\n.item:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.item {\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  min-width: 300px;\n  overflow: hidden;\n  margin: 10px;\n  border-radius: 30px;\n  position: relative;\n}\n.item img {\n  height: 200px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.item .banner {\n  position: absolute;\n  right: 20px;\n  top: 15px;\n  width: 30px;\n  height: 30px;\n}\n.subtitle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.story {\n  text-overflow: ellipsis;\n}\n.fade {\n  height: 100px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(white));\n  background-image: linear-gradient(to bottom, transparent, white);\n}\n.mat-hint {\n  font-size: 12px;\n}\n.outer-chips {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: wrap;\n          flex: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.outer-chips .chip-section {\n  margin-left: 20px;\n  width: 300px;\n}\n.outer-chips .chip-title {\n  margin-top: 0;\n}\n.mat-chip-list {\n  padding: 16px;\n}\ntable {\n  width: calc(100%-20px);\n  margin: 0 10px;\n}\ntable th {\n  font-size: 20px;\n  text-align: left;\n}\n.work-table td {\n  width: 25%;\n  vertical-align: top;\n}\n.work-table h3 {\n  color: #3f51b5;\n}\n.section-title {\n  font-weight: bold;\n  font-family: \"Viaoda Libre\", cursive;\n  font-size: 30px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.black-body {\n  padding: 16px;\n  background-color: #273036;\n  color: white;\n}\n.white-body {\n  padding: 16px;\n}\n.job-items {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.job-items .job-item {\n  max-width: 200px;\n  margin: 16px;\n}\n.gray-img {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpc2V0aC9Eb2N1bWVudHMvQ1MvV2ViL0FuZ3VsYXJNYXRlcmlhbFBlcnNvbmFsV2Vic2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREVJO0VBQ0ksZUFBQTtBQ0FSO0FER0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUNEUjtBRElBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNESjtBREdBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFBYyw2QkFBQTtVQUFBLHFCQUFBO0FDQ2Q7QURBQTtFQUNJLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNHSjtBRERJO0VBQ0ksYUFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUNHUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRVI7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDSjtBREVBO0VBQ0ksdUJBQUE7QUNDSjtBREVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwrRkFBQTtFQUFBLGdFQUFBO0FDQ0o7QURFQTtFQUNJLGVBQUE7QUNDSjtBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7VUFBQSxVQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0NKO0FEQ0k7RUFDSSxpQkFBQTtFQUVBLFlBQUE7QUNBUjtBREdJO0VBQ0ksYUFBQTtBQ0RSO0FES0E7RUFDSSxhQUFBO0FDRko7QURLQTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FESUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBRE9JO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FDSlI7QURPSTtFQUNJLGNBQUE7QUNMUjtBRFNBO0VBQ0ksaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDTko7QURRQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNMSjtBRFFBO0VBQ0ksYUFBQTtBQ0xKO0FEUUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNMSjtBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDTFI7QURTQTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5tYXQtZGl2aWRlciB7XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cblxuICAgIC5oZWFkZXItaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTBweDtcbiAgICAgICAgbGVmdDotNDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNjBweDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogIzlhOWE5YSwgJGFscGhhOiAwLjQpXG4gICAgfVxufVxuLm91dGVyLXdvcmsge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ub3V0ZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLml0ZW06aG92ZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cbi5pdGVtIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgIC5iYW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxufVxuXG4uc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3Rvcnkge1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZmFkZSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCB3aGl0ZSk7XG59XG5cbi5tYXQtaGludCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ub3V0ZXItY2hpcHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAuY2hpcC1zZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG5cbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cblxuICAgIC5jaGlwLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG59XG5cbi5tYXQtY2hpcC1saXN0IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJS0yMHB4KTtcbiAgICBtYXJnaW46IDAgMTBweDtcblxuICAgIHRoIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbn1cblxuLndvcmstdGFibGUge1xuICAgIHRkIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICAgIGNvbG9yOiAjM2Y1MWI1O1xuICAgIH1cbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiAnVmlhb2RhIExpYnJlJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJsYWNrLWJvZHkge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MzAzNjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi53aGl0ZS1ib2R5IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uam9iLWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5qb2ItaXRlbSB7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICB9XG59XG5cbi5ncmF5LWltZyB7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG4iLCIuaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyIC5tYXQtZGl2aWRlciB7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5oZWFkZXIgLmhlYWRlci1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IC00MHB4O1xuICBmb250LXNpemU6IDE2MHB4O1xuICB6LWluZGV4OiAtMTtcbiAgY29sb3I6IHJnYmEoMTU0LCAxNTQsIDE1NCwgMC40KTtcbn1cblxuLm91dGVyLXdvcmsge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdXRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uaXRlbSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pdGVtIGltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLml0ZW0gLmJhbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3Rvcnkge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmZhZGUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCB3aGl0ZSk7XG59XG5cbi5tYXQtaGludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm91dGVyLWNoaXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm91dGVyLWNoaXBzIC5jaGlwLXNlY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLm91dGVyLWNoaXBzIC5jaGlwLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm1hdC1jaGlwLWxpc3Qge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUtMjBweCk7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxudGFibGUgdGgge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi53b3JrLXRhYmxlIHRkIHtcbiAgd2lkdGg6IDI1JTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi53b3JrLXRhYmxlIGgzIHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlZpYW9kYSBMaWJyZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ibGFjay1ib2R5IHtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MzAzNjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2hpdGUtYm9keSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5qb2ItaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmpvYi1pdGVtcyAuam9iLWl0ZW0ge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDE2cHg7XG59XG5cbi5ncmF5LWltZyB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home-page/home-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/home-page/home-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppComponentsHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../content-popup/content-popup.component */
    "./src/app/components/content-popup/content-popup.component.ts");

    var Project = function Project(title, subtitle, date, picture, story) {
      _classCallCheck(this, Project);

      this.title = title;
      this.subtitle = subtitle;
      this.date = date;
      this.picture = picture;
      this.story = story;
    };

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent(dialog) {
        _classCallCheck(this, HomePageComponent);

        this.dialog = dialog;
        this.sustainably = "Won 'Best Pitch' at EnactusHacks!  We created a Chrome extension that shows sustainable alternatives when shopping for products online at large e-commerce websites. View more on <a href=\"https://devpost.com/software/sustainab-ly\" target=\"_blank\" title=\"trials results\">Devpost</a>.";
        this.mindMap = "We wanted to create a visual representation of connected topics.  We used Wikipedia's API in a recursion algorithm to retrieve content and links to connect topics together.";
        this.weschedule = "We wanted to automate the scheduling process of varsity sport team practises to allow more time playing and less time scheduling.  WeSchedule is an online platform that allows admins and schedules to create weekly schedules with a click of a button taking into account courts, hours of availability, and each individual players' availability.  We have already completed 5+ sprints and 200+ features and bug fixes deployed.";
        this.signIt = "We wanted to empower people through the ability of speech by creating an app that translates sign language to English.  Sign it translates sign language to English in real time using machine learning and Open CV to track hand movement and identify different signed words and letters.\n  \nWe used Open CV to track the hand movement and machine learning in order to identify the different signs used for different letters.  After identifying the signed letter, we stored the signed letters to form full sentences. Using Azure, we trained the data set to work on various hands and environments.  View more on <a href=\"https://devpost.com/software/sign-it-s6mvh9\" target=\"_blank\" title=\"trials results\">Devpost</a>.\n\nMade with &hearts; and Python, OpenCV, TensorFlow, Azure Custom Vision Service.";
        this.redeye = "Life travels fast, and car crashes can happen in the blink of an eye, but with our companion, Red Eye, we can prevent this.  Long and tedious drives can increase the risk of falling asleep at the wheel and medical emergencies don\u2019t wait until you\u2019re out of the car. This Android app is designed to create a more positive, seamless driving experience by helping drivers when they are tired or in the event that they have a medical emergency while behind the wheel.\n   \nThe app uses face detection to track and analyze the driver\u2019s face, identifying if they have fallen asleep or have experienced a medical emergency through their eyes (whether they are opened or closed). The app then suggests a course of action: find the nearest hotel or alert the authorities. If the former is chosen, a list of nearby hotels will appear on screen, if the latter is chosen, the authorities will be alerted and given the exact coordinates by accessing the phone\u2019s location.  View more on <a href=\"https://devpost.com/software/red-eye\" target=\"_blank\" title=\"trials results\">Devpost</a>.\n\nMade with &hearts; and Java, Android, Google's Cloud Vision API, and Google Translate API.";
        this.recyclops = "Won 'Best Design' category at UWEnergyHacks!  Creating an environmentally friendly campus for UW students has numerous benefits on health and stress levels. In order to achieve this, students need to take an active role in keeping the campus clean. Due to a lack of knowledge, many students confuse the disposal of every day objects, putting most of the items in the garbage when they should be placed in the compost or recycle bin. Not only will this cause our landfills to grow at a higher rate, sending compost to landfills where there is no oxygen can cause methane to be released when broken down. Methane is an incredible potent and dangerous greenhouse gas. Waterloo\u2019s carbon footprint does not end on campus, but continues to the landfill through the incorrect disposal of waste by students.    \n\nThe app captures a photo of an item to be thrown out and uses Google\u2019s Cloud Vision API to identify the object. Recyclops then classifies and informs the user of where the item should be placed.  View more on <a href=\"https://devpost.com/software/recyclops-8wca7d\" target=\"_blank\" title=\"trials results\">Devpost</a>.\n\nMade with &hearts; and Java, Android, Google's Cloud Vision API";
        this.textris = "Textris combines Tetris and Scrabble into a leaderboard game with letter generation and word verification using Apple\u2019s built in dictionary.\n  \nUsing the full software development cycle, Textris was designed, implemented, tested, and published to the iOS App Store with over 50 users!\n\nMade with &hearts; and Swift, iOS, Xcode, Apple App Store Connect";
        this.ouas = "The Waterloo Warriors took part in the 2018 OUA Championships this past weekend in Kingston hosted by Queen's and the men's team came away with the silver medal led by top seed Thomas Manley (Barrie/) and second seed Ravi Seth (Fergus/).\n\nManley and Seth both played outstanding squash finishing the championship with 5-1 records. Manley did not drop a set until his final match when he faced David Mill of Western and lost in a tight four set battle. \n  \nSeth played an incredibly strong battle in his match with Matt Henderson of Western which went the distance. Seth came up just short in the epic battle losing the final set 11-9.\n  \nBoth Manley and Seth were named OUA all-stars and were big parts of Waterloo earning the men's silver.\n  \nAs a team the men went 5-1 beating Queen's (6-3), McMaster (9-0), Brock (9-0), Toronto (6-3) and falling to Western (9-0) while the women couldn't muster a win but had strong individual performances from Charlotte Copas (Toronto/), Tori Sypher and Tori Grootjen (Woodstock/).\n  \nMen's Standings (record)\n1) Western (54-0)\n2) Waterloo (39-15)\n3) Queen's (33-21)\n4) Toronto (23-31)\n5) Brock (20-34)\n6) Guelph (16-38)\n7) McMaster (4-50)\n   \nWomen's Standings (record)\n1) Queen's (41-4)\n2) Toronto (37-8)\n3) Western (21-24)\n4) Brock (18-26)\n5) McMaster (11-33)\n6) Waterloo (6-39)\n   \nMen's MVP\nDavid Mill (Western)\n   \nWomen's MVP\nHeather McLachlan (Brock)\n   \nMen's Rookie of the Year\nAlex Collins (Queen's)\n   \nWomen's Rookie of the Year\nHeather McLachlan (Brock)\n   \nMen's Coach of the Year\nVinit Kudva (Waterloo)\n   \nWomen's Coach of the Year\nJosh Ginou (Toronto)\n   \nMen's All-Stars\nDavid Mill (Western)\nMatt Henderson (Western)\nThomas Manley (Barrie/) (Waterloo)\nMohamed Hamour (Brock)\nRavi Seth (Fergus/) (Waterloo)\nCameron Butler (Queen's)\n   \nWomen's All-Stars\nHeather McLachlan (Brock)\nOlivia Waite (McMaster)\nCharlotte Copas (Toronto/) (Waterloo)\nEvelyn Moorhouse (Toronto)\nNora Abdelrahman Ibrahim (Queen's)\nAmy Commisso (Western)";
        this.worlds2016 = "Team Canada\u2019s world junior men\u2019s team was rounded out May 20-22 in Winnipeg (MB) when the Winnipeg Squash Racquet Club hosted Squash Canada\u2019s World Junior Men\u2019s Team trials. \n\nUnderdog Ravi Seth from Elora, Ontario won the World Junior Men\u2019s Team trials to capture a spot on Team Canada for Poland this summer.  Unseeded Ravi won his two pool matches 3-0 to set up a final match against top seed Matt Henderson from Victoria, BC.\n  \nAlthough leading in each of the first two games, Seth lost both and went 2-0 down to Henderson.  Seth then went on an incredible run to win 33 of the next 40 points, taking the next two games to level the match at 2 games all, and then to win the 5th comfortably 11-3.\n  \nTeam trials results can be viewed <a href=\"../../assets/athletics/trials.pdf\" target=\"_blank\" title=\"trials results\">here</a>.\n  \nRavi Seth follows in his brother Cameron\u2019s footsteps who made the Junior World Team back in 2012.\n  \nHenderson earned his spot on count back; he and Seth join 2016 Canadian U19 Men\u2019s Champion Mike Mehl (AB) and Rahul Sehrawat (ON) to make the 4-person Team Canada squad.  Mehl and Sehrawat qualified for the team as points leaders accumulated in 3 (of a possible 4) selection events over each of the last two seasons.\n  \nTeam Canada will compete at this summer\u2019s WSF World Junior Squash Championships being held in Bielsko-Bia\u0142a, Poland from August 6-17.";
        this.cwg2015 = "Young athletes from across the country are packing their bags, ready to take off on the trip of a lifetime this weekend to compete in the 2015 Canada Winter Games in Prince George, BC.\n\nThe Canada Games kicked off February 13th with an exciting Opening Ceremony at the CN Centre in Prince George, and is wrapping up competition in 12 sports as part of Week 1. Squash joins 10 other sports as Week 2 competition kicks off Sunday.\n  \nSquash is proud to have increased participation from the 2011 edition of the Games, hosted in Halifax, as 12 Provinces and Territories will be competing in Prince George. Also new to this year\u2019s event is an Individual Competition, featuring a draw of 16 each for boys and girls.\n  \n\u201CWe\u2019re very happy that all of our member Provinces and Territories will be a part of this year\u2019s Canada Games\u201D, says Danny Da Costa, Squash Canada Executive Director. \u201CThe inclusion of the Individual Competition is also a very exciting aspect, as it will give more Provinces and Territories a shot at the podium while showcasing some excellent squash.\u201D\n  \nThe Individual draws begin Sunday evening, with the Team competition starting on Monday and continuing through next Saturday.\n  \nThe Canada Winter Games is held every two years, alternating between Summer and Winter Games. A collaboration of youth, sport, culture and community, the Canada Games is Canada\u2019s largest multi-sport competition for young athletes. First held in 1967 in Quebec City, Canada Games showcases our country\u2019s next generation of national, international, and Olympic Champions.\n  \n<a href=\"https://youtu.be/yvp5qkxOCb0\" target=\"_blank\">Men's Squash Final - Ontario vs Alberta</a>";
        this.uniworlds = "The 2018 World University Squash Championships concluded on September 12th.  Five Canadians stepped up to play for Canada! From September 6th-12th, student athletes from around the world skipped some school, converging in Birmingham for a week of intense squash competition! This year, 56 male and 28 female players from a record 21 countries participated in the tournament.\n\nIn the team event, the joint male/female Canadian squad finished 8th.  Canada finsihed 2nd in Pool play, winning 2-1 versus Switzerland and suffered a 3-0 loss to evenual finalsit, Malaysia.  The next two matches were narrow 2-1 losses to Czech Republic and Australia.\n  \n<a href=\"https://youtu.be/6T0YGMvV4g4\" target=\"_blank\">Ravi Seth vs Joseph Williams England - Full Match</a>";
        this.jobs = [new Project("Konrad", "Full-time Software Developer", "Starting Aug. 2021", "../../assets/work/konrad.png", "Excited to graduate and start my full-time career at Konrad!"), new Project("Amazon Web Services", "Software Engineering Intern", "May - Aug. 2020", "../../assets/work/aws.webp", "Working with AWS Machine Learning Team to Generate Statistics and Reduce Error in Data Pipeline"), new Project("Klyck.io", "Full Stack Developer Intern", "May - Aug. 2019 and Jan. - Apr. 2020", "../../assets/work/klyck.webp", "Developed REST API and front end components to allow seamless viewing and collaboration of Office 365 files"), new Project("University of Waterloo", "Software Developer Intern", "Sept. - Dec. 2018", "../../assets/work/uw.png", "Improved file security by creating mobile app and REST endpoints for two-factor auth, using Android and Java"), new Project("Linamar", "Mechanical Engineer Intern", "Jan. - Apr. 2018", "../../assets/work/linamar.png", "")];
        this.sideProjects = [new Project("WeSchedule", "University of Waterloo", "Sept. 13 2018 - present", "../../assets/sideProjects/weschedule.png", this.weschedule), new Project("SugarMarker", "DeltaHacks - Winner of Best Hardware Hack", "Mar. 6 2021", "../../assets/sideProjects/deltahacks.png", ''), new Project("Sustainb.ly", "EnactusHacks - Winner of Best Pitch", "Oct. 24 2020", "../../assets/sideProjects/sustainbly.png", this.sustainably), new Project("Mind Map", "University of Waterloo", "Jun. 13 2020", "../../assets/sideProjects/mind-map.png", this.mindMap), new Project("Sign It", "Hack the North", "Sept. 13 2019", "../../assets/sideProjects/signit.png", this.signIt), new Project("Red Eye", "PennApps Hackathon", "Sept. 6 2019", "../../assets/sideProjects/redeye-withme.png", this.redeye), new Project("Recyclops", "UWEnergyHacks - Winner of Best Design", "June 1 2019", "../../assets/sideProjects/best-design.jpg", this.recyclops), new Project("Textris", "Published on iOS App Store", "Apr. 24 2018", "../../assets/sideProjects/textris.png", this.textris)];
        this.athletics = [new Project("National Champion", "Canadian University and College Championships", "Mar. 8 2020", "../../assets/athletics/canadians2020.jpeg", ''), new Project("Squash Team Canada", "World Universities, England", "Sept. 6 2018", "../../assets/athletics/uniworlds.png", this.uniworlds), new Project("UW Varsity Squash Team", "OUA's Squash Championships", "Feb. 12 2018", "../../assets/athletics/oua2018.JPG", this.ouas), new Project("Squash Team Canada", "World Juniors, Poland", "Aug. 7 2016", "../../assets/athletics/worlds2016.jpg", this.worlds2016), new Project("Squash Team Ontario", "Canada Winter Gamces, BC", "Feb. 21 2015", "../../assets/athletics/cwg2015.jpeg", this.cwg2015)];
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openDialog",
        value: function openDialog(project) {
          var dialogRef = this.dialog.open(_content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_3__["ContentPopupComponent"], {
            width: '500px',
            height: '500px',
            data: project,
            panelClass: 'custom-dialog-container'
          });
          dialogRef.afterClosed().subscribe(function (res) {});
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.scss */
      "./src/app/components/home-page/home-page.component.scss")).default]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/services/http/http.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/http/http.service.ts ***!
    \***********************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServicesHttpHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
      }

      _createClass(HttpService, [{
        key: "addObservableErrorHandling",
        value: function addObservableErrorHandling(ob) {
          var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          return ob.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(defaultValue);
          }));
        }
      }, {
        key: "getWikiAPI",
        value: function getWikiAPI(search) {
          var _this = this;

          var baseURL = "https://en.wikipedia.org/w/api.php?";
          var params = {
            origin: "*",
            action: "query",
            format: "json",
            titles: search,
            prop: "links",
            pllimit: "max"
          };
          var url = this.formulateURL(baseURL, params);
          var ob = this.http.get(url);
          ob = this.addObservableErrorHandling(ob, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            if (result) {
              return _this.getTitles(result);
            }

            return [];
          }));
          return ob;
        }
      }, {
        key: "formulateURL",
        value: function formulateURL(baseURL, params) {
          var newURL = baseURL;
          Object.keys(params).forEach(function (key) {
            newURL += "&" + key + "=" + params[key];
          });
          return newURL;
        }
      }, {
        key: "getTitles",
        value: function getTitles(response) {
          if (!response.query || !response.query.pages) {
            return [];
          }

          var titles = [];
          var pages = response.query.pages;

          for (var p in pages) {
            var links = pages[p].links;

            if (links) {
              links.forEach(function (l) {
                var title = l.title;

                if (!title.includes(":")) {
                  titles.push(title);
                }
              });
            }
          }

          return titles;
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpService);
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/raviseth/Documents/CS/Web/AngularMaterialPersonalWebsite/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map