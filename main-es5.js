function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-split */
    "./node_modules/angular-split/__ivy_ngcc__/fesm2015/angular-split.js");
    /* harmony import */


    var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-monaco-editor */
    "./node_modules/ngx-monaco-editor/__ivy_ngcc__/fesm2015/ngx-monaco-editor.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/app.component */
    "./src/app/components/app.component.ts");
    /* harmony import */


    var _components_projects_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/projects-list.component */
    "./src/app/components/projects-list.component.ts");
    /* harmony import */


    var _core_services_github_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./core/services/github.service */
    "./src/app/core/services/github.service.ts");
    /* harmony import */


    var _core_services_project_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./core/services/project.service */
    "./src/app/core/services/project.service.ts");
    /* harmony import */


    var _components_project_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/project-view.component */
    "./src/app/components/project-view.component.ts");
    /* harmony import */


    var _core_utils_markdown_parse_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./core/utils/markdown-parse.pipe */
    "./src/app/core/utils/markdown-parse.pipe.ts");
    /* harmony import */


    var _core_utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./core/utils/safe-html.pipe */
    "./src/app/core/utils/safe-html.pipe.ts");
    /* harmony import */


    var _components_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/card.component */
    "./src/app/components/card.component.ts");
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var _components_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/login.component */
    "./src/app/components/login.component.ts");
    /* harmony import */


    var _core_services_fav_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./core/services/fav.service */
    "./src/app/core/services/fav.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _core_services_github_service__WEBPACK_IMPORTED_MODULE_11__["GithubService"], _core_services_project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"], _core_services_fav_service__WEBPACK_IMPORTED_MODULE_19__["FavService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angular_split__WEBPACK_IMPORTED_MODULE_6__["AngularSplitModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__["MonacoEditorModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_projects_list_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsListComponent"], _components_project_view_component__WEBPACK_IMPORTED_MODULE_13__["ProjectViewComponent"], _core_utils_markdown_parse_pipe__WEBPACK_IMPORTED_MODULE_14__["MarkdownParsePipe"], _core_utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__["SafeHtmlPipe"], _components_card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"], _components_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angular_split__WEBPACK_IMPORTED_MODULE_6__["AngularSplitModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__["MonacoEditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_projects_list_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsListComponent"], _components_project_view_component__WEBPACK_IMPORTED_MODULE_13__["ProjectViewComponent"], _core_utils_markdown_parse_pipe__WEBPACK_IMPORTED_MODULE_14__["MarkdownParsePipe"], _core_utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__["SafeHtmlPipe"], _components_card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"], _components_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angular_split__WEBPACK_IMPORTED_MODULE_6__["AngularSplitModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__["MonacoEditorModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"]],
          providers: [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _core_services_github_service__WEBPACK_IMPORTED_MODULE_11__["GithubService"], _core_services_project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"], _core_services_fav_service__WEBPACK_IMPORTED_MODULE_19__["FavService"]],
          bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/app.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/components/app.component.ts ***!
    \*********************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppComponentsAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-split */
    "./node_modules/angular-split/__ivy_ngcc__/fesm2015/angular-split.js");
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! axios */
    "./node_modules/axios/index.js");
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _core_services_github_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/services/github.service */
    "./src/app/core/services/github.service.ts");
    /* harmony import */


    var _core_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/services/project.service */
    "./src/app/core/services/project.service.ts");
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _projects_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projects-list.component */
    "./src/app/components/projects-list.component.ts");
    /* harmony import */


    var _project_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./project-view.component */
    "./src/app/components/project-view.component.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/components/login.component.ts");

    function AppComponent_details_8_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.githubService.ghUser.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AppComponent_details_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "details", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "summary", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_details_8_img_2_Template, 1, 1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_drop_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Signed in as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_details_8_Template_li_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Log out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.githubService.ghUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.githubService.ghUser ? ctx_r0.githubService.ghUser.login : "...");
      }
    }

    function AppComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "as-split", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "as-split-area", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-projects-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "as-split-area", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-project-view", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("columnSelected", function AppComponent_div_9_Template_app_project_view_columnSelected_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.onColumnSelected();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login", 24);
      }
    }

    function AppComponent_ng_container_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Authenticated as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.githubService.ghUser ? ctx_r4.githubService.ghUser.login : "...");
      }
    }

    function AppComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Not logged in ");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(githubService, projectService, authService, route) {
        _classCallCheck(this, AppComponent);

        this.githubService = githubService;
        this.projectService = projectService;
        this.authService = authService;
        this.route = route;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (map) {
            if (map.code && map.code.length === 20) {
              axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://pro-jects.now.sh/api/authorize?code=".concat(map.code)).then(function (res) {
                if (res.data.access_token) {
                  _this.authService.setUser(res.data.access_token);

                  window.location.href = '/';
                }
              });
            }
          });
        }
      }, {
        key: "onColumnSelected",
        value: function onColumnSelected() {
          this.splitComponent.setVisibleAreaSizes([0, 100]);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logoutUser();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_split__WEBPACK_IMPORTED_MODULE_1__["SplitComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.splitComponent = _t.first);
        }
      },
      decls: 22,
      vars: 6,
      consts: [[1, "wrapper"], [1, "nav"], [1, "nav-block"], ["src", "/assets/images/GitHub-Mark-Light-64px.png", "alt", "GitHub Mark", 1, "nav-block__image", 2, "margin", "0 5px"], [1, "nav-block__heading"], ["class", "user-details__wrapper", 4, "ngIf"], ["class", "app", 4, "ngIf", "ngIfElse"], ["loginScreen", ""], [1, "bar"], [2, "text-align", "right"], [4, "ngIf", "ngIfElse"], ["notLoggedInMessage", ""], [1, "user-details__wrapper"], [1, "user-details__summary"], ["class", "nav-block__image nav-block__image--rounded", 3, "src", 4, "ngIf"], [1, "user-details"], [1, "user-details__list"], [3, "click"], [1, "nav-block__image", "nav-block__image--rounded", 3, "src"], [1, "app"], ["unit", "percent", "direction", "horizontal", "useTransition", "true"], ["size", "25"], ["size", "75", "minSize", "50"], [3, "columnSelected"], [2, "flex", "1", "overflow", "hidden"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "(pro)jects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_details_8_Template, 13, 2, "details", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_9_Template, 6, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_ng_template_10_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Project: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_ng_container_19_Template, 4, 1, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_ng_template_20_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn())("ngIfElse", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectService.currentProject ? ctx.projectService.currentProject.name : "You haven't selected any project yet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn())("ngIfElse", _r5);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], angular_split__WEBPACK_IMPORTED_MODULE_1__["SplitComponent"], angular_split__WEBPACK_IMPORTED_MODULE_1__["SplitAreaDirective"], _projects_list_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsListComponent"], _project_view_component__WEBPACK_IMPORTED_MODULE_10__["ProjectViewComponent"], _login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.nav[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  color: #fff;\n  background-color: #161515;\n}\n.nav-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nav-block[_ngcontent-%COMP%]   .nav-block__image[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n}\n.nav-block[_ngcontent-%COMP%]   .nav-block__image--rounded[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.nav-block[_ngcontent-%COMP%]   .nav-block__heading[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details__summary[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details__summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #fff;\n  color: #000;\n  right: 20px;\n  box-shadow: 0 0 5px 0 rgba(22,21,21,0.267);\n  width: 200px;\n  text-align: left;\n  margin-top: 2px;\n  border-radius: 5px;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-details__list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border-top: 1px solid #e1e4e8;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-details__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 15px;\n  cursor: pointer;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-details__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-details__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #0366d6;\n  color: #fff;\n}\n.app[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  overflow: hidden;\n}\n.bar[_ngcontent-%COMP%] {\n  background-color: #0366d6;\n  font-size: 12px;\n  padding: 2px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=src/app/views/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXBwL3NyYy9hcHAvdmlld3MvYXBwL2FwcC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdmlld3MvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQU87RUFDUCxhQUFRO0VBQ1IsZ0JBQVU7RUFDVixhQUFTO0VBQ1Qsc0JBQWdCO0FDQ2xCO0FEQ0E7RUFDRSxXQUFPO0VBQ1AsYUFBUztFQUNULG1CQUFnQjtFQUNoQiw4QkFBaUI7RUFDakIsYUFBUztFQUNULFdBQU87RUFDUCx5QkFBa0I7QUNDcEI7QURDQTtFQUNFLGFBQVM7RUFDVCxtQkFBYTtBQ0NmO0FEQ0U7RUFDRSxZQUFRO0VBQ1IsV0FBTztBQ0NYO0FEQ0U7RUFDRSxtQkFBZTtBQ0NuQjtBRENFO0VBQ0UsU0FBUTtBQ0NaO0FEQ0U7RUFDRSxjQUFRO0VBQ1IsYUFBUTtFQUNSLG1CQUFZO0FDQ2hCO0FEQ0k7RUFDRSxhQUFTO0FDQ2Y7QURDRTtFQUNFLGtCQUFVO0VBQ1Ysc0JBQWtCO0VBQ2xCLFdBQU87RUFDUCxXQUFPO0VBQ1AsMENBQVk7RUFDWixZQUFPO0VBQ1AsZ0JBQVc7RUFDWCxlQUFZO0VBQ1osa0JBQWU7QUNDbkI7QURDSTtFQUNFLFlBQVE7QUNDZDtBRENJO0VBQ0UsZ0JBQVk7RUFDWixTQUFRO0VBQ1IsVUFBUztFQUNULDZCQUFZO0FDQ2xCO0FEQ007RUFDRSxjQUFTO0VBQ1Qsa0JBQVM7RUFDVCxlQUFRO0FDQ2hCO0FEQ1E7RUFDRSw4QkFBMEI7RUFDMUIsK0JBQTJCO0FDQ3JDO0FEQ1E7RUFDRSx5QkFBa0I7RUFDbEIsV0FBTztBQ0NqQjtBREVBO0VBQ0UsV0FBTztFQUNQLE9BQU07RUFDTixnQkFBVTtBQ0FaO0FERUE7RUFDRSx5QkFBa0I7RUFDbEIsZUFBVztFQUNYLFlBQVM7RUFDVCxXQUFPO0VBQ1AsYUFBUztFQUNULG1CQUFhO0VBQ2IsOEJBQWlCO0FDQW5CO0FBQ0EsOERBQThEIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYXBwL2FwcC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyXG4gIHdpZHRoOiAxMDAlXG4gIGhlaWdodDogMTAwdmhcbiAgb3ZlcmZsb3c6IGhpZGRlblxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cblxuLm5hdlxuICB3aWR0aDogMTAwJVxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gIHBhZGRpbmc6IDEwcHhcbiAgY29sb3I6IHdoaXRlXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE1MTVcblxuLm5hdi1ibG9ja1xuICBkaXNwbGF5OiBmbGV4XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcblxuICAubmF2LWJsb2NrX19pbWFnZVxuICAgIGhlaWdodDogMzJweFxuICAgIHdpZHRoOiAzMnB4XG5cbiAgLm5hdi1ibG9ja19faW1hZ2UtLXJvdW5kZWRcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4XG5cbiAgLm5hdi1ibG9ja19faGVhZGluZ1xuICAgIG1hcmdpbjogMFxuXG4gIC51c2VyLWRldGFpbHNfX3N1bW1hcnlcbiAgICBtYXJnaW46IDAgMTBweFxuICAgIGRpc3BsYXkgZmxleFxuICAgIGFsaWduLWl0ZW1zIGNlbnRlclxuXG4gICAgJjo6LXdlYmtpdC1kZXRhaWxzLW1hcmtlclxuICAgICAgZGlzcGxheTogbm9uZVxuXG4gIC51c2VyLWRldGFpbHNcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmXG4gICAgY29sb3I6IGJsYWNrXG4gICAgcmlnaHQ6IDIwcHhcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgIzE2MTUxNTQ0XG4gICAgd2lkdGg6IDIwMHB4XG4gICAgdGV4dC1hbGlnbiBsZWZ0XG4gICAgbWFyZ2luLXRvcDogMnB4XG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG5cbiAgICBwXG4gICAgICBtYXJnaW46IDE1cHhcblxuICAgIC51c2VyLWRldGFpbHNfX2xpc3RcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmVcbiAgICAgIG1hcmdpbjogMFxuICAgICAgcGFkZGluZzogMFxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWU0ZThcblxuICAgICAgbGlcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4XG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxuXG4gICAgICAgICY6bGFzdC1jaGlsZFxuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgNXB4XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMgNXB4XG5cbiAgICAgICAgJjpob3ZlclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzY2ZDZcbiAgICAgICAgICBjb2xvcjogd2hpdGVcblxuXG4uYXBwXG4gIHdpZHRoOiAxMDAlXG4gIGZsZXg6IDFcbiAgb3ZlcmZsb3c6IGhpZGRlblxuXG4uYmFyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzY2ZDZcbiAgZm9udC1zaXplOiAxMnB4XG4gIHBhZGRpbmc6IDJweFxuICBjb2xvcjogd2hpdGVcbiAgZGlzcGxheTogZmxleFxuICBhbGlnbi1pdGVtczogY2VudGVyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuIiwiLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5uYXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTUxNTtcbn1cbi5uYXYtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5hdi1ibG9jayAubmF2LWJsb2NrX19pbWFnZSB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG59XG4ubmF2LWJsb2NrIC5uYXYtYmxvY2tfX2ltYWdlLS1yb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5uYXYtYmxvY2sgLm5hdi1ibG9ja19faGVhZGluZyB7XG4gIG1hcmdpbjogMDtcbn1cbi5uYXYtYmxvY2sgLnVzZXItZGV0YWlsc19fc3VtbWFyeSB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5hdi1ibG9jayAudXNlci1kZXRhaWxzX19zdW1tYXJ5Ojotd2Via2l0LWRldGFpbHMtbWFya2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5uYXYtYmxvY2sgLnVzZXItZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgyMiwyMSwyMSwwLjI2Nyk7XG4gIHdpZHRoOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubmF2LWJsb2NrIC51c2VyLWRldGFpbHMgcCB7XG4gIG1hcmdpbjogMTVweDtcbn1cbi5uYXYtYmxvY2sgLnVzZXItZGV0YWlscyAudXNlci1kZXRhaWxzX19saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UxZTRlODtcbn1cbi5uYXYtYmxvY2sgLnVzZXItZGV0YWlscyAudXNlci1kZXRhaWxzX19saXN0IGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdi1ibG9jayAudXNlci1kZXRhaWxzIC51c2VyLWRldGFpbHNfX2xpc3QgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5uYXYtYmxvY2sgLnVzZXItZGV0YWlscyAudXNlci1kZXRhaWxzX19saXN0IGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzNjZkNjtcbiAgY29sb3I6ICNmZmY7XG59XG4uYXBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzNjZkNjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3ZpZXdzL2FwcC9hcHAuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: '../views/app/app.component.html',
          styleUrls: ['../views/app/app.component.styl']
        }]
      }], function () {
        return [{
          type: _core_services_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"]
        }, {
          type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]
        }, {
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, {
        splitComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [angular_split__WEBPACK_IMPORTED_MODULE_1__["SplitComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/card.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/components/card.component.ts ***!
    \**********************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppComponentsCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/services/github.service */
    "./src/app/core/services/github.service.ts");
    /* harmony import */


    var _core_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/services/project.service */
    "./src/app/core/services/project.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-monaco-editor */
    "./node_modules/ngx-monaco-editor/__ivy_ngcc__/fesm2015/ngx-monaco-editor.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _core_utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../core/utils/safe-html.pipe */
    "./src/app/core/utils/safe-html.pipe.ts");
    /* harmony import */


    var _core_utils_markdown_parse_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../core/utils/markdown-parse.pipe */
    "./src/app/core/utils/markdown-parse.pipe.ts");

    function CardComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_container_2_Template_mat_icon_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.onMove(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "arrow_upward");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_container_2_Template_mat_icon_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.onMove(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "arrow_downward");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_container_2_Template_mat_icon_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.onDelete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_container_2_Template_mat_icon_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r10.startEditing();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "create");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function CardComponent_ng_template_3_mat_spinner_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 11);
      }
    }

    function CardComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_template_3_Template_mat_icon_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r12.saveCard();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "save");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CardComponent_ng_template_3_mat_spinner_4_Template, 1, 0, "mat-spinner", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_template_3_Template_mat_icon_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.saveCardAndCloseEditor();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "done");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_template_3_Template_mat_icon_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r15.closeEditor();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isBusy);
      }
    }

    function CardComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "markdownParse");
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, ctx_r3.card.note)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function CardComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-monaco-editor", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CardComponent_ng_template_6_Template_ngx_monaco_editor_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r16.editorContent = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r5.editorOptions)("ngModel", ctx_r5.editorContent);
      }
    }

    var Direction;

    (function (Direction) {
      Direction[Direction["Up"] = 0] = "Up";
      Direction[Direction["Down"] = 1] = "Down";
    })(Direction || (Direction = {}));

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent(githubService, projectService) {
        _classCallCheck(this, CardComponent);

        this.githubService = githubService;
        this.projectService = projectService;
        this.moveUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isEditing = false;
        this.isBusy = false;
        this.editorOptions = {
          theme: 'vs-dark',
          language: 'markdown',
          automaticLayout: true
        };
        this.editorContent = '';
      }

      _createClass(CardComponent, [{
        key: "onMove",
        value: function onMove(direction) {
          if (direction === Direction.Up) {
            this.moveUp.emit();
          } else if (direction === Direction.Down) {
            this.moveDown.emit();
          }
        }
      }, {
        key: "startEditing",
        value: function startEditing() {
          this.isEditing = true;
          this.editorContent = this.card.note;
        }
      }, {
        key: "saveCard",
        value: function saveCard() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isBusy = true;
                    _context.next = 3;
                    return this.githubService.saveCard(this.card.id, this.editorContent);

                  case 3:
                    this.isBusy = false;

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "closeEditor",
        value: function closeEditor() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isBusy = true;
                    _context2.next = 3;
                    return this.projectService.refreshColumnCards(this.column);

                  case 3:
                    this.editorContent = '';
                    this.isEditing = false;
                    this.isBusy = false;

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "saveCardAndCloseEditor",
        value: function saveCardAndCloseEditor() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.isBusy = true;
                    _context3.next = 3;
                    return this.githubService.saveCard(this.card.id, this.editorContent);

                  case 3:
                    _context3.next = 5;
                    return this.projectService.refreshColumnCards(this.column);

                  case 5:
                    this.editorContent = '';
                    this.isEditing = false;
                    this.isBusy = false;

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          this["delete"].emit();
        }
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]));
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      inputs: {
        card: "card",
        column: "column"
      },
      outputs: {
        moveUp: "moveUp",
        moveDown: "moveDown",
        "delete": "delete"
      },
      decls: 8,
      vars: 4,
      consts: [[1, "card"], [1, "card__bar"], [4, "ngIf", "ngIfElse"], ["editorButtons", ""], ["class", "card__content", 3, "innerHTML", 4, "ngIf", "ngIfElse"], ["editor", ""], [1, "card__bar__icon", 3, "click"], [1, "card__bar__icon", "icon__save", "card__bar__icon--big", 3, "click"], ["diameter", "20", 4, "ngIf"], [1, "card__bar__icon", "icon__done", "card__bar__icon--big", 3, "click"], [1, "card__bar__icon", "icon__close", "card__bar__icon--big", 3, "click"], ["diameter", "20"], [1, "card__content", 3, "innerHTML"], [1, "card__editor"], [2, "height", "100%", 3, "options", "ngModel", "ngModelChange"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CardComponent_ng_container_2_Template, 11, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CardComponent_ng_template_3_Template, 10, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CardComponent_div_5_Template, 3, 5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CardComponent_ng_template_6_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEditing)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEditing)("ngIfElse", _r4);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__["EditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]],
      pipes: [_core_utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeHtmlPipe"], _core_utils_markdown_parse_pipe__WEBPACK_IMPORTED_MODULE_10__["MarkdownParsePipe"]],
      styles: [".card {\n  border: solid 1px #eee;\n  border-radius: 5px;\n  background-color: #fff;\n  margin: 10px;\n}\n.card__content {\n  padding: 0 10px;\n}\n.card__content * {\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\n.card__content *:last-child {\n  margin-bottom: 10px;\n}\n.card__bar {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.card__bar__icon {\n  color: #808080;\n  width: 15px;\n  height: 15px;\n  font-size: 15px;\n  cursor: pointer;\n  margin: 0 1px;\n}\n.card__bar__icon--big {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  margin: 0 2px;\n}\n.card__bar .icon__done:hover {\n  color: #28a745;\n}\n.card__bar .icon__close:hover {\n  color: #d73a49;\n}\n.card__bar .icon__save:hover {\n  color: #24292e;\n}\n.card__editor {\n  height: 70vh;\n}\n.card__editor .editor-container {\n  height: 100% !important;\n}\n/*# sourceMappingURL=src/app/views/card/card.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2FyZC9zcmMvYXBwL3ZpZXdzL2NhcmQvY2FyZC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdmlld3MvY2FyZC9jYXJkLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQVE7RUFDUixrQkFBZTtFQUNmLHNCQUFrQjtFQUNsQixZQUFRO0FDQ1Y7QURDRTtFQUNFLGVBQVM7QUNDYjtBRENJO0VBQ0UsYUFBWTtFQUNaLG9CQUFlO0FDQ3JCO0FEQ0k7RUFDRSxtQkFBZTtBQ0NyQjtBRENFO0VBQ0UsYUFBUztFQUNULGFBQVM7RUFDVCw4QkFBaUI7QUNDckI7QURDSTtFQUNFLGNBQU87RUFDUCxXQUFPO0VBQ1AsWUFBUTtFQUNSLGVBQVc7RUFDWCxlQUFRO0VBQ1IsYUFBUTtBQ0NkO0FEQ007RUFDRSxXQUFPO0VBQ1AsWUFBUTtFQUNSLGVBQVc7RUFDWCxhQUFRO0FDQ2hCO0FERU07RUFDRSxjQUFPO0FDQWY7QURHTTtFQUNFLGNBQU87QUNEZjtBRElNO0VBQ0UsY0FBTztBQ0ZmO0FESUU7RUFDRSxZQUFRO0FDRlo7QURJSTtFQUNFLHVCQUFRO0FDRmQ7QUFDQSxnRUFBZ0UiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jYXJkL2NhcmQuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFxuICBib3JkZXI6IHNvbGlkIDFweCAjZWVlZWVlXG4gIGJvcmRlci1yYWRpdXM6IDVweFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmXG4gIG1hcmdpbjogMTBweFxuXG4gICZfX2NvbnRlbnRcbiAgICBwYWRkaW5nOiAwIDEwcHhcblxuICAgICpcbiAgICAgIG1hcmdpbi10b3A6IDBcbiAgICAgIG1hcmdpbi1ib3R0b206IC41ZW1cblxuICAgICo6bGFzdC1jaGlsZFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxuXG4gICZfX2JhclxuICAgIHBhZGRpbmc6IDEwcHhcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG5cbiAgICAmX19pY29uXG4gICAgICBjb2xvcjogZ3JleVxuICAgICAgd2lkdGg6IDE1cHhcbiAgICAgIGhlaWdodDogMTVweFxuICAgICAgZm9udC1zaXplOiAxNXB4XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgIG1hcmdpbjogMCAxcHhcblxuICAgICAgJi0tYmlnXG4gICAgICAgIHdpZHRoOiAyMHB4XG4gICAgICAgIGhlaWdodDogMjBweFxuICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICAgICAgbWFyZ2luOiAwIDJweFxuXG4gICAgLmljb25fX2RvbmVcbiAgICAgICY6aG92ZXJcbiAgICAgICAgY29sb3I6ICMyOGE3NDVcblxuICAgIC5pY29uX19jbG9zZVxuICAgICAgJjpob3ZlclxuICAgICAgICBjb2xvcjogI2Q3M2E0OVxuXG4gICAgLmljb25fX3NhdmVcbiAgICAgICY6aG92ZXJcbiAgICAgICAgY29sb3I6ICMyNDI5MmVcblxuICAmX19lZGl0b3JcbiAgICBoZWlnaHQ6IDcwdmhcblxuICAgIC5lZGl0b3ItY29udGFpbmVyXG4gICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiIsIi5jYXJkIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDEwcHg7XG59XG4uY2FyZF9fY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5jYXJkX19jb250ZW50ICoge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbi5jYXJkX19jb250ZW50ICo6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FyZF9fYmFyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNhcmRfX2Jhcl9faWNvbiB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIDFweDtcbn1cbi5jYXJkX19iYXJfX2ljb24tLWJpZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwIDJweDtcbn1cbi5jYXJkX19iYXIgLmljb25fX2RvbmU6aG92ZXIge1xuICBjb2xvcjogIzI4YTc0NTtcbn1cbi5jYXJkX19iYXIgLmljb25fX2Nsb3NlOmhvdmVyIHtcbiAgY29sb3I6ICNkNzNhNDk7XG59XG4uY2FyZF9fYmFyIC5pY29uX19zYXZlOmhvdmVyIHtcbiAgY29sb3I6ICMyNDI5MmU7XG59XG4uY2FyZF9fZWRpdG9yIHtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuLmNhcmRfX2VkaXRvciAuZWRpdG9yLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC92aWV3cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-card',
          templateUrl: '../views/card/card.component.html',
          styleUrls: ['../views/card/card.component.styl'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _core_services_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]
        }, {
          type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
        }];
      }, {
        card: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        column: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        moveUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        moveDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        "delete": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/components/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/services/auth.service */
    "./src/app/core/services/auth.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.keystrokesHistory = '';
      }

      _createClass(LoginComponent, [{
        key: "onKeyDown",
        value: function onKeyDown(e) {
          this.keystrokesHistory += e.key;

          if (this.keystrokesHistory === 'dev') {
            var token = prompt('Entered dev mode. Now you can enter the access token manually, without using oauth');

            if (token) {
              this.authService.setUser(token);
            }

            this.keystrokesHistory = '';
          }
        }
      }, {
        key: "login",
        value: function login() {
          var clientId = '435bb3ee9ba9d983cb60';
          window.location.href = "https://github.com/login/oauth/authorize?scope=repo%20write%3Aorg%20user&client_id=".concat(clientId);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      hostBindings: function LoginComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function LoginComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      decls: 8,
      vars: 0,
      consts: [[1, "login"], [1, "login__button", 3, "click"], ["src", "/assets/images/GitHub-Mark-Light-32px.png"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "(pro)jects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A better UI for GitHub Projects \uD83D\uDCDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_5_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sign in with GitHub ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".login[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n}\n.login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.login__button[_ngcontent-%COMP%] {\n  display: block;\n  padding: 6px 12px;\n  line-height: 20px;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-repeat: repeat-x;\n  background-position: -1px -1px;\n  background-size: 110% 110%;\n  border: 1px solid rgba(0,0,0,0.2);\n  border-radius: 0.25em;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: #fff;\n  background: linear-gradient(-180deg, #34d058, #28a745 90%);\n  margin: 10px auto;\n}\n.login__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1em;\n  display: inline-block;\n  vertical-align: text-top;\n  margin: 0 2px;\n}\n/*# sourceMappingURL=src/app/views/login/login.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbG9naW4vc3JjL2FwcC92aWV3cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFRO0VBQ1IsYUFBUztFQUNULHNCQUFnQjtFQUNoQix1QkFBaUI7RUFDakIsbUJBQWE7RUFDYixjQUFVO0FDQ1o7QURDRTs7RUFDRSxTQUFRO0FDRVo7QURBRTtFQUNFLGNBQVM7RUFDVCxpQkFBUztFQUNULGlCQUFhO0VBQ2IsbUJBQWE7RUFDYixzQkFBZ0I7RUFDaEIsZUFBUTtFQUNSLHlCQUFhO0tBQWIsc0JBQWE7TUFBYixxQkFBYTtVQUFiLGlCQUFhO0VBQ2IsMkJBQW1CO0VBQ25CLDhCQUFxQjtFQUNyQiwwQkFBaUI7RUFDakIsaUNBQVE7RUFDUixxQkFBZTtFQUNmLHdCQUFZO0tBQVoscUJBQVk7VUFBWixnQkFBWTtFQUNaLFdBQU87RUFDUCwwREFBWTtFQUNaLGlCQUFRO0FDRVo7QURBSTtFQUNFLFdBQVE7RUFDUixxQkFBUztFQUNULHdCQUFnQjtFQUNoQixhQUFRO0FDRWQ7QUFDQSxrRUFBa0UiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpblxuICBoZWlnaHQ6IDEwMCVcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgb3ZlcmZsb3c6IGF1dG9cblxuICBoMSwgcFxuICAgIG1hcmdpbjogMFxuXG4gICZfX2J1dHRvblxuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgcGFkZGluZzogNnB4IDEycHhcbiAgICBsaW5lLWhlaWdodDogMjBweFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXBcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgY3Vyc29yOiBwb2ludGVyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmVcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXhcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMXB4IC0xcHhcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgMTEwJVxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKVxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbVxuICAgIGFwcGVhcmFuY2U6IG5vbmVcbiAgICBjb2xvcjogd2hpdGVcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjMzRkMDU4LCMyOGE3NDUgOTAlKVxuICAgIG1hcmdpbjogMTBweCBhdXRvXG5cbiAgICBpbWdcbiAgICAgIGhlaWdodDogMWVtXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcFxuICAgICAgbWFyZ2luOiAwIDJweFxuIiwiLmxvZ2luIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubG9naW4gaDEsXG4ubG9naW4gcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5sb2dpbl9fYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMXB4IC0xcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTEwJSAxMTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjMzRkMDU4LCAjMjhhNzQ1IDkwJSk7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuLmxvZ2luX19idXR0b24gaW1nIHtcbiAgaGVpZ2h0OiAxZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICBtYXJnaW46IDAgMnB4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC92aWV3cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: '../views/login/login.component.html',
          styleUrls: ['../views/login/login.component.styl']
        }]
      }], function () {
        return [{
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, {
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keydown', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/project-view.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/project-view.component.ts ***!
    \******************************************************/

  /*! exports provided: ProjectViewComponent */

  /***/
  function srcAppComponentsProjectViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectViewComponent", function () {
      return ProjectViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var devpun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! devpun */
    "./node_modules/devpun/index.js");
    /* harmony import */


    var devpun__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devpun__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./card.component */
    "./src/app/components/card.component.ts");
    /* harmony import */


    var _core_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/services/project.service */
    "./src/app/core/services/project.service.ts");
    /* harmony import */


    var _core_services_github_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/services/github.service */
    "./src/app/core/services/github.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ProjectViewComponent_div_0_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectViewComponent_div_0_li_9_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var i_r6 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.onColumnClicked(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectViewComponent_div_0_li_9_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var column_r5 = ctx.$implicit;
          var i_r6 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.deleteColumn(column_r5, i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r5 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.selectedColumn !== undefined ? ctx_r3.projectService.currentProject.columns[ctx_r3.selectedColumn].id === column_r5.id ? "columns-list__item__wrapper--selected" : "" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r5.name, " ");
      }
    }

    function ProjectViewComponent_div_0_div_10_app_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("moveUp", function ProjectViewComponent_div_0_div_10_app_card_1_Template_app_card_moveUp_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var card_r11 = ctx.$implicit;
          var i_r12 = ctx.index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r13.moveCard(card_r11, i_r12 - 1, i_r12);
        })("moveDown", function ProjectViewComponent_div_0_div_10_app_card_1_Template_app_card_moveDown_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var card_r11 = ctx.$implicit;
          var i_r12 = ctx.index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r15.moveCard(card_r11, i_r12 + 1, i_r12);
        })("delete", function ProjectViewComponent_div_0_div_10_app_card_1_Template_app_card_delete_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var card_r11 = ctx.$implicit;
          var i_r12 = ctx.index;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r16.deleteCard(card_r11, i_r12);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r11 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r11)("column", ctx_r10.selectedColumn);
      }
    }

    function ProjectViewComponent_div_0_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectViewComponent_div_0_div_10_app_card_1_Template, 1, 2, "app-card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectViewComponent_div_0_div_10_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.addCard();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add a new card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.projectService.currentProject.columns[ctx_r4.selectedColumn].cards);
      }
    }

    function ProjectViewComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Column");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectViewComponent_div_0_Template_mat_icon_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.addColumn();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectViewComponent_div_0_li_9_Template, 5, 3, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectViewComponent_div_0_div_10_Template, 4, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projectService.currentProject.columns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedColumn !== undefined);
      }
    }

    function ProjectViewComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No project selected ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    } // @ts-ignore


    Array.prototype.move = function (from, to) {
      this.splice(to, 0, this.splice(from, 1)[0]);
    };

    var ProjectViewComponent = /*#__PURE__*/function () {
      function ProjectViewComponent(projectService, githubService) {
        _classCallCheck(this, ProjectViewComponent);

        this.projectService = projectService;
        this.githubService = githubService;
        this.columnSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ProjectViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.projectService.projectChanged.subscribe(function () {
            _this2.selectedColumn = undefined;
          });
        }
      }, {
        key: "onColumnClicked",
        value: function onColumnClicked(column) {
          if (this.selectedColumn === undefined) {
            this.columnSelected.emit();
          }

          this.selectedColumn = column;
        }
      }, {
        key: "moveCard",
        value: function moveCard(card, pos, oldPos) {
          var currentColumn = this.projectService.currentProject.columns[this.selectedColumn];

          if (pos >= 0 && pos < currentColumn.cards.length) {
            var positionFormatted;

            switch (true) {
              case pos === 0:
                positionFormatted = 'top';
                break;

              case pos === currentColumn.cards.length - 1:
                positionFormatted = 'bottom';
                break;

              default:
                if (currentColumn.cards[pos - 1].id === card.id) {
                  positionFormatted = "after:".concat(currentColumn.cards[pos].id);
                } else {
                  positionFormatted = "after:".concat(currentColumn.cards[pos - 1].id);
                }

            }

            this.githubService.moveCard(card.id, positionFormatted);
            this.projectService.currentProject.columns[this.selectedColumn].cards.move(oldPos, pos);
          }
        }
      }, {
        key: "deleteCard",
        value: function deleteCard(card, pos) {
          if (confirm('Are you sure to delete this card?')) {
            this.projectService.currentProject.columns[this.selectedColumn].cards.splice(pos, 1);
            this.githubService.deleteCard(card.id);
          }
        }
      }, {
        key: "addColumn",
        value: function addColumn() {
          var _this3 = this;

          var name = prompt('Give title for the column');

          if (name && name !== '') {
            this.githubService.createColumn(this.projectService.currentProject.id, name).then(function (_ref) {
              var data = _ref.data;

              _this3.projectService.refreshProjectColumns().then(function () {
                var index = _this3.projectService.currentProject.columns.findIndex(function (col) {
                  return col.id === data.id;
                });

                _this3.onColumnClicked(index);
              });
            });
          }
        }
      }, {
        key: "addCard",
        value: function addCard() {
          var _this4 = this;

          var joke = devpun__WEBPACK_IMPORTED_MODULE_1___default.a.random();
          this.githubService.createCard(this.projectService.currentProject.columns[this.selectedColumn].id, joke).then(function () {
            _this4.projectService.refreshColumnCards(_this4.selectedColumn).then(function () {
              document.querySelector('.cards-view').scroll({
                top: 0,
                behavior: 'smooth'
              }); // Ridiculous monkey patch. Don't do this at home, kids

              setTimeout(function () {
                _this4.firstCard.startEditing();
              }, 0);
            });
          });
        }
      }, {
        key: "deleteColumn",
        value: function deleteColumn(column, pos) {
          if (confirm('Are you sure to delete this column?')) {
            this.projectService.currentProject.columns.splice(pos, 1);
            this.githubService.deleteColumn(column.id);
          }
        }
      }]);

      return ProjectViewComponent;
    }();

    ProjectViewComponent.ɵfac = function ProjectViewComponent_Factory(t) {
      return new (t || ProjectViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_github_service__WEBPACK_IMPORTED_MODULE_4__["GithubService"]));
    };

    ProjectViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectViewComponent,
      selectors: [["app-project-view"]],
      viewQuery: function ProjectViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.firstCard = _t.first);
        }
      },
      outputs: {
        columnSelected: "columnSelected"
      },
      decls: 3,
      vars: 2,
      consts: [["class", "project-view__wrapper", 4, "ngIf", "ngIfElse"], ["noProjectBlock", ""], [1, "project-view__wrapper"], [1, "project-view"], [1, "columns-list__wrapper"], [1, "columns-list__header"], [2, "width", "12px", "height", "12px", "font-size", "12px", "transform", "scale(1.25)", "cursor", "pointer", 3, "click"], [1, "columns-list"], ["class", "columns-list__item__wrapper", 3, "class", 4, "ngFor", "ngForOf"], ["class", "cards-view cards-view--switch-view", 4, "ngIf"], [1, "columns-list__item__wrapper"], [1, "columns-list__item", 3, "click"], [1, "delete-button", 3, "click"], [1, "cards-view", "cards-view--switch-view"], [3, "card", "column", "moveUp", "moveDown", "delete", 4, "ngFor", "ngForOf"], [1, "cards-view__add-button", 3, "click"], [3, "card", "column", "moveUp", "moveDown", "delete"], [1, "no-project"]],
      template: function ProjectViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectViewComponent_div_0_Template, 11, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectViewComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectService.currentProject)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
      styles: [".project-view__wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #fafbfc;\n}\n.project-view {\n  width: 100%;\n  flex: 1;\n  display: flex;\n  overflow: auto;\n}\n.project-view-bar {\n  width: 100%;\n  background-color: #fff;\n  border-bottom: solid 1px #eee;\n  display: flex;\n  color: #161515;\n  padding: 2px 17px;\n}\n.project-view-bar__icon {\n  color: #808080;\n  margin: 0 2px;\n  cursor: pointer;\n}\n.project-view-bar__icon--active {\n  color: #000;\n}\n.cards-view--switch-view {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n.columns-list__wrapper {\n  width: 200px;\n  height: 100%;\n  border-right: solid 1px #eee;\n  background-color: #fff;\n  line-height: 1;\n}\n.columns-list__wrapper .columns-list__header {\n  color: #808080;\n  font-size: 12px;\n  padding: 3px;\n  display: flex;\n  justify-content: space-between;\n}\n.columns-list__wrapper .columns-list {\n  text-align: center;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.columns-list__wrapper .columns-list__item__wrapper {\n  margin: 0;\n  width: 100%;\n  display: block;\n  position: relative;\n}\n.columns-list__wrapper .columns-list__item {\n  padding: 7px 0;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n  font-weight: bold;\n}\n.columns-list__wrapper .columns-list__item__wrapper .delete-button {\n  visibility: hidden;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  height: 100%;\n  margin-right: 1px;\n  position: absolute;\n  right: 0;\n  -webkit-font-feature-settings: 'liga';\n  font-family: 'Material Icons';\n  color: #d3d4d5;\n}\n.columns-list__wrapper .columns-list__item__wrapper .delete-button:hover {\n  color: #b1b2b3;\n}\n.columns-list__wrapper .columns-list__item__wrapper:hover {\n  background-color: #f5f6f7;\n}\n.columns-list__wrapper .columns-list__item__wrapper:hover .delete-button {\n  visibility: visible;\n}\n.columns-list__wrapper .columns-list__item__wrapper--selected {\n  background-color: #f5f6f7;\n}\n.cards-view__add-button {\n  display: block;\n  padding: 6px 12px;\n  line-height: 20px;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-repeat: repeat-x;\n  background-position: -1px -1px;\n  background-size: 110% 110%;\n  border: 1px solid rgba(0,0,0,0.2);\n  border-radius: 0.25em;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: #fff;\n  background: linear-gradient(-180deg, #34d058, #28a745 90%);\n  margin: 5px auto;\n}\n.no-project {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #808080;\n  font-size: 2em;\n  text-align: center;\n  padding: 5px;\n}\n/*# sourceMappingURL=src/app/views/project-view/project-view.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvamVjdC12aWV3L3NyYy9hcHAvdmlld3MvcHJvamVjdC12aWV3L3Byb2plY3Qtdmlldy5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdmlld3MvcHJvamVjdC12aWV3L3Byb2plY3Qtdmlldy5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQU87RUFDUCxZQUFRO0VBQ1IsYUFBUztFQUNULHNCQUFnQjtFQUNoQix5QkFBa0I7QUNDcEI7QURDQTtFQUNFLFdBQU87RUFDUCxPQUFNO0VBQ04sYUFBUztFQUNULGNBQVU7QUNDWjtBRENBO0VBQ0UsV0FBTztFQUNQLHNCQUFrQjtFQUNsQiw2QkFBZTtFQUNmLGFBQVM7RUFDVCxjQUFPO0VBQ1AsaUJBQVM7QUNDWDtBRENFO0VBQ0UsY0FBTztFQUNQLGFBQVE7RUFDUixlQUFRO0FDQ1o7QURDRTtFQUNFLFdBQU87QUNDWDtBRENBO0VBQ0UsV0FBTztFQUNQLFlBQVE7RUFDUixjQUFVO0FDQ1o7QURDQTtFQUNFLFlBQU87RUFDUCxZQUFRO0VBQ1IsNEJBQWM7RUFDZCxzQkFBa0I7RUFDbEIsY0FBYTtBQ0NmO0FEQ0U7RUFDRSxjQUFPO0VBQ1AsZUFBVztFQUNYLFlBQVM7RUFDVCxhQUFTO0VBQ1QsOEJBQWlCO0FDQ3JCO0FEQ0U7RUFDRSxrQkFBWTtFQUNaLGdCQUFZO0VBQ1osVUFBUztFQUNULFNBQVE7QUNDWjtBRENJO0VBQ0UsU0FBUTtFQUNSLFdBQU87RUFDUCxjQUFTO0VBQ1Qsa0JBQVU7QUNDaEI7QURDTTtFQUNFLGNBQVM7RUFDVCxxQkFBUztFQUNULFdBQU87RUFDUCxlQUFRO0VBQ1IsaUJBQWE7QUNDckI7QURDTTtFQUNFLGtCQUFZO0VBQ1osb0JBQVM7RUFDVCxtQkFBYTtFQUNiLGVBQVE7RUFDUixZQUFRO0VBQ1IsaUJBQWM7RUFDZCxrQkFBVTtFQUNWLFFBQU87RUFDUCxxQ0FBK0I7RUFDL0IsNkJBQWE7RUFDYixjQUFPO0FDQ2Y7QURDUTtFQUNFLGNBQU87QUNDakI7QURDTTtFQUNFLHlCQUFrQjtBQ0MxQjtBRENRO0VBQ0UsbUJBQVk7QUNDdEI7QURDSTtFQUNFLHlCQUFrQjtBQ0N4QjtBREVBO0VBQ0UsY0FBUztFQUNULGlCQUFTO0VBQ1QsaUJBQWE7RUFDYixtQkFBYTtFQUNiLHNCQUFnQjtFQUNoQixlQUFRO0VBQ1IseUJBQWE7S0FBYixzQkFBYTtNQUFiLHFCQUFhO1VBQWIsaUJBQWE7RUFDYiwyQkFBbUI7RUFDbkIsOEJBQXFCO0VBQ3JCLDBCQUFpQjtFQUNqQixpQ0FBUTtFQUNSLHFCQUFlO0VBQ2Ysd0JBQVk7S0FBWixxQkFBWTtVQUFaLGdCQUFZO0VBQ1osV0FBTztFQUNQLDBEQUFZO0VBQ1osZ0JBQVE7QUNBVjtBRElBO0VBQ0UsV0FBTztFQUNQLFlBQVE7RUFDUixhQUFTO0VBQ1Qsc0JBQWdCO0VBQ2hCLHVCQUFpQjtFQUNqQixtQkFBYTtFQUNiLGNBQU87RUFDUCxjQUFXO0VBQ1gsa0JBQVc7RUFDWCxZQUFTO0FDRlg7QUFDQSxnRkFBZ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wcm9qZWN0LXZpZXcvcHJvamVjdC12aWV3LmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qtdmlld19fd3JhcHBlclxuICB3aWR0aDogMTAwJVxuICBoZWlnaHQ6IDEwMCVcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmNcblxuLnByb2plY3Qtdmlld1xuICB3aWR0aDogMTAwJVxuICBmbGV4OiAxXG4gIGRpc3BsYXk6IGZsZXhcbiAgb3ZlcmZsb3c6IGF1dG9cblxuLnByb2plY3Qtdmlldy1iYXJcbiAgd2lkdGg6IDEwMCVcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZlxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VlZWVlZVxuICBkaXNwbGF5OiBmbGV4XG4gIGNvbG9yOiAjMTYxNTE1XG4gIHBhZGRpbmc6IDJweCAxN3B4XG5cbiAgJl9faWNvblxuICAgIGNvbG9yOiBncmF5XG4gICAgbWFyZ2luOiAwIDJweFxuICAgIGN1cnNvcjogcG9pbnRlclxuXG4gICZfX2ljb24tLWFjdGl2ZVxuICAgIGNvbG9yOiBibGFja1xuXG4uY2FyZHMtdmlldy0tc3dpdGNoLXZpZXdcbiAgd2lkdGg6IDEwMCVcbiAgaGVpZ2h0OiAxMDAlXG4gIG92ZXJmbG93OiBhdXRvXG5cbi5jb2x1bW5zLWxpc3RfX3dyYXBwZXJcbiAgd2lkdGg6IDIwMHB4XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2VlZWVlZVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmXG4gIGxpbmUtaGVpZ2h0OiAxXG5cbiAgLmNvbHVtbnMtbGlzdF9faGVhZGVyXG4gICAgY29sb3I6IGdyYXlcbiAgICBmb250LXNpemU6IDEycHhcbiAgICBwYWRkaW5nOiAzcHhcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG5cbiAgLmNvbHVtbnMtbGlzdFxuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcbiAgICBwYWRkaW5nOiAwXG4gICAgbWFyZ2luOiAwXG5cbiAgICAmX19pdGVtX193cmFwcGVyXG4gICAgICBtYXJnaW46IDBcbiAgICAgIHdpZHRoOiAxMDAlXG4gICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG5cbiAgICAgIF5bMV1fX2l0ZW1cbiAgICAgICAgcGFkZGluZzogN3B4IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcblxuICAgICAgLmRlbGV0ZS1idXR0b25cbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFweFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJ1xuICAgICAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJ1xuICAgICAgICBjb2xvcjogI2QzZDRkNVxuXG4gICAgICAgICY6aG92ZXJcbiAgICAgICAgICBjb2xvcjogI2IxYjJiM1xuXG4gICAgICAmOmhvdmVyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZjdcblxuICAgICAgICAuZGVsZXRlLWJ1dHRvblxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcblxuICAgICZfX2l0ZW1fX3dyYXBwZXItLXNlbGVjdGVkXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3XG5cblxuLmNhcmRzLXZpZXdfX2FkZC1idXR0b25cbiAgZGlzcGxheTogYmxvY2tcbiAgcGFkZGluZzogNnB4IDEycHhcbiAgbGluZS1oZWlnaHQ6IDIwcHhcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gIGN1cnNvcjogcG9pbnRlclxuICB1c2VyLXNlbGVjdDogbm9uZVxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXhcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAtMXB4XG4gIGJhY2tncm91bmQtc2l6ZTogMTEwJSAxMTAlXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKVxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW1cbiAgYXBwZWFyYW5jZTogbm9uZVxuICBjb2xvcjogd2hpdGVcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsIzM0ZDA1OCwjMjhhNzQ1IDkwJSlcbiAgbWFyZ2luOiA1cHggYXV0b1xuXG5cblxuLm5vLXByb2plY3RcbiAgd2lkdGg6IDEwMCVcbiAgaGVpZ2h0OiAxMDAlXG4gIGRpc3BsYXk6IGZsZXhcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICBhbGlnbi1pdGVtczogY2VudGVyXG4gIGNvbG9yOiBncmV5XG4gIGZvbnQtc2l6ZTogMmVtXG4gIHRleHQtYWxpZ24gY2VudGVyXG4gIHBhZGRpbmc6IDVweFxuIiwiLnByb2plY3Qtdmlld19fd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG59XG4ucHJvamVjdC12aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnByb2plY3Qtdmlldy1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjMTYxNTE1O1xuICBwYWRkaW5nOiAycHggMTdweDtcbn1cbi5wcm9qZWN0LXZpZXctYmFyX19pY29uIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIG1hcmdpbjogMCAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9qZWN0LXZpZXctYmFyX19pY29uLS1hY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbn1cbi5jYXJkcy12aWV3LS1zd2l0Y2gtdmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbHVtbnMtbGlzdF9fd3JhcHBlciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5jb2x1bW5zLWxpc3RfX3dyYXBwZXIgLmNvbHVtbnMtbGlzdF9faGVhZGVyIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29sdW1ucy1saXN0X193cmFwcGVyIC5jb2x1bW5zLWxpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5jb2x1bW5zLWxpc3RfX3dyYXBwZXIgLmNvbHVtbnMtbGlzdF9faXRlbV9fd3JhcHBlciB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29sdW1ucy1saXN0X193cmFwcGVyIC5jb2x1bW5zLWxpc3RfX2l0ZW0ge1xuICBwYWRkaW5nOiA3cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb2x1bW5zLWxpc3RfX3dyYXBwZXIgLmNvbHVtbnMtbGlzdF9faXRlbV9fd3JhcHBlciAuZGVsZXRlLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGNvbG9yOiAjZDNkNGQ1O1xufVxuLmNvbHVtbnMtbGlzdF9fd3JhcHBlciAuY29sdW1ucy1saXN0X19pdGVtX193cmFwcGVyIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNiMWIyYjM7XG59XG4uY29sdW1ucy1saXN0X193cmFwcGVyIC5jb2x1bW5zLWxpc3RfX2l0ZW1fX3dyYXBwZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3O1xufVxuLmNvbHVtbnMtbGlzdF9fd3JhcHBlciAuY29sdW1ucy1saXN0X19pdGVtX193cmFwcGVyOmhvdmVyIC5kZWxldGUtYnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5jb2x1bW5zLWxpc3RfX3dyYXBwZXIgLmNvbHVtbnMtbGlzdF9faXRlbV9fd3JhcHBlci0tc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3O1xufVxuLmNhcmRzLXZpZXdfX2FkZC1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICMzNGQwNTgsICMyOGE3NDUgOTAlKTtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cbi5uby1wcm9qZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3ZpZXdzL3Byb2plY3Qtdmlldy9wcm9qZWN0LXZpZXcuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project-view',
          templateUrl: '../views/project-view/project-view.component.html',
          styleUrls: ['../views/project-view/project-view.component.styl'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
        }, {
          type: _core_services_github_service__WEBPACK_IMPORTED_MODULE_4__["GithubService"]
        }];
      }, {
        columnSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        firstCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/projects-list.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/projects-list.component.ts ***!
    \*******************************************************/

  /*! exports provided: ProjectsListComponent */

  /***/
  function srcAppComponentsProjectsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function () {
      return ProjectsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/services/github.service */
    "./src/app/core/services/github.service.ts");
    /* harmony import */


    var _core_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/services/project.service */
    "./src/app/core/services/project.service.ts");
    /* harmony import */


    var _core_services_fav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/services/fav.service */
    "./src/app/core/services/fav.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProjectsListComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You haven't added any favourite projects ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectsListComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsListComponent_div_5_Template_span_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var project_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onProjectClicked(project_r4.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsListComponent_div_5_Template__svg_svg_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var project_r4 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.removeFavProject(project_r4.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r4.name, " ");
      }
    }

    function ProjectsListComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You haven't created projects associated to your account ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectsListComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsListComponent_div_10_Template_span_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var project_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.onProjectClicked(project_r8.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsListComponent_div_10_Template__svg_svg_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var project_r8 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.favProject(project_r8.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r8.name, " ");
      }
    }

    var ProjectsListComponent = /*#__PURE__*/function () {
      function ProjectsListComponent(githubService, projectService, favService) {
        _classCallCheck(this, ProjectsListComponent);

        this.githubService = githubService;
        this.projectService = projectService;
        this.favService = favService;
        this.userProjects = [];
      }

      _createClass(ProjectsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProjects();
        }
      }, {
        key: "getProjects",
        value: function getProjects() {
          var _this5 = this;

          this.githubService.getUserProjects().then(function (projects) {
            _this5.userProjects = projects;

            _this5.favService.getFavProjects();
          });
        }
      }, {
        key: "onProjectClicked",
        value: function onProjectClicked(projectId) {
          this.projectService.setCurrentProject(projectId);
        }
      }, {
        key: "favProject",
        value: function favProject(projectId) {
          this.favService.addFavProject(this.userProjects.find(function (proj) {
            return proj.id === projectId;
          }));
        }
      }, {
        key: "removeFavProject",
        value: function removeFavProject(projectId) {
          this.favService.removeFavProject(projectId);
        }
      }]);

      return ProjectsListComponent;
    }();

    ProjectsListComponent.ɵfac = function ProjectsListComponent_Factory(t) {
      return new (t || ProjectsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_fav_service__WEBPACK_IMPORTED_MODULE_3__["FavService"]));
    };

    ProjectsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsListComponent,
      selectors: [["app-projects-list"]],
      decls: 11,
      vars: 4,
      consts: [[1, "projects-list__wrapper"], ["class", "projects-list__empty-caption", 4, "ngIf"], [1, "projects-list"], ["class", "projects-list__item", 4, "ngFor", "ngForOf"], [1, "projects-list__empty-caption"], [1, "projects-list__item"], ["src", "/assets/images/GitHub-Star.svg", "alt", "star", 1, "projects-list__item__icon"], [1, "projects-list__item__label", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 12 16", "width", "12", "height", "16", 1, "projects-list__item__action", 3, "click"], ["fill-rule", "evenodd", "d", "M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"], ["src", "/assets/images/GitHub-Project.svg", "alt", "githubProject", 1, "projects-list__item__icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 14 16", "width", "14", "height", "16", 1, "projects-list__item__action", 3, "click"], ["fill-rule", "evenodd", "d", "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"]],
      template: function ProjectsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Favourite projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectsListComponent_div_3_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsListComponent_div_5_Template, 6, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "User's projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsListComponent_div_8_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectsListComponent_div_10_Template, 6, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.favService.favProjects.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favService.favProjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userProjects.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userProjects);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".projects-list__wrapper[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.projects-list__wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.projects-list__empty-caption[_ngcontent-%COMP%] {\n  color: #808080;\n  margin: 5px 0 5px 1em;\n  font-size: 0.8em;\n}\n.projects-list[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  padding-left: 10px;\n  margin-bottom: 10px;\n  overflow: auto;\n}\n.projects-list[_ngcontent-%COMP%]   .projects-list__item[_ngcontent-%COMP%] {\n  position: relative;\n  padding-right: 20px;\n}\n.projects-list[_ngcontent-%COMP%]   .projects-list__item__icon[_ngcontent-%COMP%] {\n  height: 1rem;\n  vertical-align: -10%;\n}\n.projects-list[_ngcontent-%COMP%]   .projects-list__item__label[_ngcontent-%COMP%] {\n  color: #0366d6;\n  display: inline-block;\n  font-weight: 600;\n  cursor: pointer;\n  margin-left: 10px;\n}\n.projects-list[_ngcontent-%COMP%]   .projects-list__item__label[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.projects-list[_ngcontent-%COMP%]   .projects-list__item__action[_ngcontent-%COMP%] {\n  visibility: hidden;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  height: 100%;\n  position: absolute;\n  margin-left: 5px;\n  fill: #d3d4d5;\n}\n.projects-list[_ngcontent-%COMP%]   .projects-list__item__action[_ngcontent-%COMP%]:hover {\n  fill: #b1b2b3;\n}\n.projects-list[_ngcontent-%COMP%]   .projects-list__item[_ngcontent-%COMP%]:hover   .projects-list__item__action[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=src/app/views/projects-list/projects-list.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvamVjdHMtbGlzdC9zcmMvYXBwL3ZpZXdzL3Byb2plY3RzLWxpc3QvcHJvamVjdHMtbGlzdC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdmlld3MvcHJvamVjdHMtbGlzdC9wcm9qZWN0cy1saXN0LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBUztBQ0NYO0FEQ0U7RUFDRSxTQUFRO0FDQ1o7QURDQTtFQUNFLGNBQU87RUFDUCxxQkFBUTtFQUNSLGdCQUFXO0FDQ2I7QURDQTtFQUNFLGVBQVk7RUFDWixrQkFBYztFQUNkLG1CQUFlO0VBQ2YsY0FBVTtBQ0NaO0FEQ0U7RUFDRSxrQkFBVTtFQUNWLG1CQUFlO0FDQ25CO0FEQ0k7RUFDRSxZQUFRO0VBQ1Isb0JBQWdCO0FDQ3RCO0FEQ0k7RUFDRSxjQUFPO0VBQ1AscUJBQVM7RUFDVCxnQkFBYTtFQUNiLGVBQVE7RUFDUixpQkFBYTtBQ0NuQjtBRENNO0VBQ0UsMEJBQWlCO0FDQ3pCO0FEQ0k7RUFDRSxrQkFBWTtFQUNaLG9CQUFTO0VBQ1QsbUJBQWE7RUFDYixlQUFRO0VBQ1IsWUFBUTtFQUNSLGtCQUFVO0VBQ1YsZ0JBQWE7RUFDYixhQUFNO0FDQ1o7QURDTTtFQUNFLGFBQU07QUNDZDtBREVNO0VBQ0UsbUJBQVk7QUNBcEI7QUFDQSxrRkFBa0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wcm9qZWN0cy1saXN0L3Byb2plY3RzLWxpc3QuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdHMtbGlzdF9fd3JhcHBlclxuICBwYWRkaW5nOiAxMHB4XG5cbiAgaDNcbiAgICBtYXJnaW46IDBcblxuLnByb2plY3RzLWxpc3RfX2VtcHR5LWNhcHRpb25cbiAgY29sb3I6IGdyYXlcbiAgbWFyZ2luOiA1cHggMCA1cHggMWVtXG4gIGZvbnQtc2l6ZTogLjhlbVxuXG4ucHJvamVjdHMtbGlzdFxuICBtYXJnaW4tdG9wOiA1cHhcbiAgcGFkZGluZy1sZWZ0OiAxMHB4XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG92ZXJmbG93OiBhdXRvXG5cbiAgLnByb2plY3RzLWxpc3RfX2l0ZW1cbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4XG5cbiAgICAmX19pY29uXG4gICAgICBoZWlnaHQ6IDFyZW1cbiAgICAgIHZlcnRpY2FsLWFsaWduOiAtMTAlXG5cbiAgICAmX19sYWJlbFxuICAgICAgY29sb3I6ICMwMzY2ZDZcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMFxuICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweFxuXG4gICAgICAmOmhvdmVyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXG5cbiAgICAmX19hY3Rpb25cbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlblxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHhcbiAgICAgIGZpbGw6ICNkM2Q0ZDVcblxuICAgICAgJjpob3ZlclxuICAgICAgICBmaWxsOiAjYjFiMmIzXG5cbiAgICAmOmhvdmVyXG4gICAgICAucHJvamVjdHMtbGlzdF9faXRlbV9fYWN0aW9uXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcbiIsIi5wcm9qZWN0cy1saXN0X193cmFwcGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5wcm9qZWN0cy1saXN0X193cmFwcGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xufVxuLnByb2plY3RzLWxpc3RfX2VtcHR5LWNhcHRpb24ge1xuICBjb2xvcjogIzgwODA4MDtcbiAgbWFyZ2luOiA1cHggMCA1cHggMWVtO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuLnByb2plY3RzLWxpc3Qge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ucHJvamVjdHMtbGlzdCAucHJvamVjdHMtbGlzdF9faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5wcm9qZWN0cy1saXN0IC5wcm9qZWN0cy1saXN0X19pdGVtX19pY29uIHtcbiAgaGVpZ2h0OiAxcmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogLTEwJTtcbn1cbi5wcm9qZWN0cy1saXN0IC5wcm9qZWN0cy1saXN0X19pdGVtX19sYWJlbCB7XG4gIGNvbG9yOiAjMDM2NmQ2O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ucHJvamVjdHMtbGlzdCAucHJvamVjdHMtbGlzdF9faXRlbV9fbGFiZWw6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5wcm9qZWN0cy1saXN0IC5wcm9qZWN0cy1saXN0X19pdGVtX19hY3Rpb24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmaWxsOiAjZDNkNGQ1O1xufVxuLnByb2plY3RzLWxpc3QgLnByb2plY3RzLWxpc3RfX2l0ZW1fX2FjdGlvbjpob3ZlciB7XG4gIGZpbGw6ICNiMWIyYjM7XG59XG4ucHJvamVjdHMtbGlzdCAucHJvamVjdHMtbGlzdF9faXRlbTpob3ZlciAucHJvamVjdHMtbGlzdF9faXRlbV9fYWN0aW9uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvdmlld3MvcHJvamVjdHMtbGlzdC9wcm9qZWN0cy1saXN0LmNvbXBvbmVudC5jc3MubWFwICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects-list',
          templateUrl: '../views/projects-list/projects-list.component.html',
          styleUrls: ['../views/projects-list/projects-list.component.styl']
        }]
      }], function () {
        return [{
          type: _core_services_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"]
        }, {
          type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
        }, {
          type: _core_services_fav_service__WEBPACK_IMPORTED_MODULE_3__["FavService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/services/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppCoreServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService() {
        _classCallCheck(this, AuthService);

        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loggedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AuthService, [{
        key: "setUser",
        value: function setUser(token) {
          window.localStorage.setItem('githubToken', token);
          this.loggedIn.emit();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return window.localStorage.getItem('githubToken');
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          window.localStorage.removeItem('githubToken');
          this.loggedOut.emit();
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return !!window.localStorage.getItem('githubToken');
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)();
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/fav.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/core/services/fav.service.ts ***!
    \**********************************************/

  /*! exports provided: FavService */

  /***/
  function srcAppCoreServicesFavServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavService", function () {
      return FavService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FavService = /*#__PURE__*/function () {
      function FavService() {
        _classCallCheck(this, FavService);

        this.favProjects = [];
      }

      _createClass(FavService, [{
        key: "addFavProject",
        value: function addFavProject(project) {
          this.getFavProjects();

          if (!this.favProjects.find(function (proj) {
            return proj.id === project.id;
          })) {
            this.favProjects.push(project);
            localStorage.setItem('favProjects', JSON.stringify(this.favProjects));
          }
        }
      }, {
        key: "getFavProjects",
        value: function getFavProjects() {
          this.favProjects = JSON.parse(localStorage.getItem('favProjects')) || [];
        }
      }, {
        key: "removeFavProject",
        value: function removeFavProject(projectId) {
          this.getFavProjects();
          var index = this.favProjects.findIndex(function (proj) {
            return proj.id === projectId;
          });

          if (typeof index === 'number') {
            this.favProjects.splice(index, 1);
            localStorage.setItem('favProjects', JSON.stringify(this.favProjects));
          }
        }
      }]);

      return FavService;
    }();

    FavService.ɵfac = function FavService_Factory(t) {
      return new (t || FavService)();
    };

    FavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FavService,
      factory: FavService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/github.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/services/github.service.ts ***!
    \*************************************************/

  /*! exports provided: GithubService */

  /***/
  function srcAppCoreServicesGithubServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubService", function () {
      return GithubService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _octokit_rest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @octokit/rest */
    "./node_modules/@octokit/rest/dist-web/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/core/services/auth.service.ts");

    var GithubService = /*#__PURE__*/function () {
      function GithubService(authService) {
        var _this6 = this;

        _classCallCheck(this, GithubService);

        this.authService = authService;

        if (authService.isLoggedIn()) {
          this.octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_2__["Octokit"]({
            auth: authService.getUser(),
            userAgent: '(pro)jects v.0.1.0'
          });
        }

        this.authService.loggedIn.subscribe(function () {
          if (_this6.authService.isLoggedIn()) {
            _this6.octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_2__["Octokit"]({
              auth: authService.getUser(),
              userAgent: '(pro)jects v.0.1.0'
            });
          }
        });
        this.authService.loggedOut.subscribe(function () {
          if (!_this6.authService.isLoggedIn()) {
            _this6.octokit = undefined;
          }
        });
      }

      _createClass(GithubService, [{
        key: "checkUser",
        value: function checkUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var res;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!this.octokit) {
                      _context4.next = 17;
                      break;
                    }

                    if (!this.ghUser) {
                      _context4.next = 5;
                      break;
                    }

                    return _context4.abrupt("return", true);

                  case 5:
                    _context4.prev = 5;
                    _context4.next = 8;
                    return this.octokit.users.getAuthenticated();

                  case 8:
                    res = _context4.sent;
                    _context4.next = 15;
                    break;

                  case 11:
                    _context4.prev = 11;
                    _context4.t0 = _context4["catch"](5);
                    this.authService.logoutUser();
                    return _context4.abrupt("return", false);

                  case 15:
                    this.ghUser = res.data;
                    return _context4.abrupt("return", true);

                  case 17:
                    return _context4.abrupt("return", false);

                  case 18:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[5, 11]]);
          }));
        }
      }, {
        key: "getUserProjects",
        value: function getUserProjects() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var projects;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.checkUser();

                  case 2:
                    if (!_context5.sent) {
                      _context5.next = 10;
                      break;
                    }

                    _context5.next = 5;
                    return this.octokit.projects.listForUser({
                      username: this.ghUser.login
                    });

                  case 5:
                    projects = _context5.sent;
                    this.allProjects = projects.data;
                    return _context5.abrupt("return", projects.data);

                  case 10:
                    throw new Error('User not logged in');

                  case 11:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getProject",
        value: function getProject(projectId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.checkUser();

                  case 2:
                    if (!_context6.sent) {
                      _context6.next = 11;
                      break;
                    }

                    _context6.t0 = this.allProjects.find(function (data) {
                      return data.id === projectId;
                    });

                    if (_context6.t0) {
                      _context6.next = 8;
                      break;
                    }

                    _context6.next = 7;
                    return this.octokit.projects.get({
                      project_id: projectId
                    });

                  case 7:
                    _context6.t0 = _context6.sent.data;

                  case 8:
                    return _context6.abrupt("return", _context6.t0);

                  case 11:
                    throw new Error('User not logged in');

                  case 12:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getProjectColumns",
        value: function getProjectColumns(projectId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.checkUser();

                  case 2:
                    if (!_context7.sent) {
                      _context7.next = 8;
                      break;
                    }

                    _context7.next = 5;
                    return this.octokit.projects.listColumns({
                      project_id: projectId,
                      headers: {
                        'If-None-Match': ''
                      }
                    });

                  case 5:
                    return _context7.abrupt("return", _context7.sent.data);

                  case 8:
                    throw new Error('User not logged in');

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getColumnCards",
        value: function getColumnCards(columnId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.checkUser();

                  case 2:
                    if (!_context8.sent) {
                      _context8.next = 8;
                      break;
                    }

                    _context8.next = 5;
                    return this.octokit.projects.listCards({
                      column_id: columnId,
                      headers: {
                        'If-None-Match': ''
                      }
                    });

                  case 5:
                    return _context8.abrupt("return", _context8.sent.data);

                  case 8:
                    throw new Error('User not logged in');

                  case 9:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "moveCard",
        value: function moveCard(cardId, pos) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.checkUser();

                  case 2:
                    if (!_context9.sent) {
                      _context9.next = 7;
                      break;
                    }

                    _context9.next = 5;
                    return this.octokit.projects.moveCard({
                      card_id: cardId,
                      position: pos
                    });

                  case 5:
                    _context9.next = 8;
                    break;

                  case 7:
                    throw new Error('User not logged in');

                  case 8:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "saveCard",
        value: function saveCard(cardId, note) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.checkUser();

                  case 2:
                    if (!_context10.sent) {
                      _context10.next = 7;
                      break;
                    }

                    _context10.next = 5;
                    return this.octokit.projects.updateCard({
                      card_id: cardId,
                      note: note
                    });

                  case 5:
                    _context10.next = 8;
                    break;

                  case 7:
                    throw new Error('User not logged in');

                  case 8:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "deleteCard",
        value: function deleteCard(cardId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.checkUser();

                  case 2:
                    if (!_context11.sent) {
                      _context11.next = 7;
                      break;
                    }

                    _context11.next = 5;
                    return this.octokit.projects.deleteCard({
                      card_id: cardId
                    });

                  case 5:
                    _context11.next = 8;
                    break;

                  case 7:
                    throw new Error('User not logged in');

                  case 8:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "createColumn",
        value: function createColumn(projectId, name) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.checkUser();

                  case 2:
                    if (!_context12.sent) {
                      _context12.next = 6;
                      break;
                    }

                    _context12.next = 5;
                    return this.octokit.projects.createColumn({
                      project_id: projectId,
                      name: name
                    });

                  case 5:
                    return _context12.abrupt("return", _context12.sent);

                  case 6:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "createCard",
        value: function createCard(columnId, note) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.checkUser();

                  case 2:
                    if (!_context13.sent) {
                      _context13.next = 7;
                      break;
                    }

                    _context13.next = 5;
                    return this.octokit.projects.createCard({
                      column_id: columnId,
                      note: note
                    });

                  case 5:
                    _context13.next = 8;
                    break;

                  case 7:
                    throw new Error('User not logged in');

                  case 8:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "deleteColumn",
        value: function deleteColumn(columnId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.checkUser();

                  case 2:
                    if (!_context14.sent) {
                      _context14.next = 7;
                      break;
                    }

                    _context14.next = 5;
                    return this.octokit.projects.deleteColumn({
                      column_id: columnId
                    });

                  case 5:
                    _context14.next = 8;
                    break;

                  case 7:
                    throw new Error('User not logged in');

                  case 8:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }]);

      return GithubService;
    }();

    GithubService.ɵfac = function GithubService_Factory(t) {
      return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    GithubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GithubService,
      factory: GithubService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GithubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/project.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/project.service.ts ***!
    \**************************************************/

  /*! exports provided: ProjectService */

  /***/
  function srcAppCoreServicesProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./github.service */
    "./src/app/core/services/github.service.ts");

    var ProjectService = /*#__PURE__*/function () {
      function ProjectService(githubService) {
        _classCallCheck(this, ProjectService);

        this.githubService = githubService;
        this.projectChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ProjectService, [{
        key: "setCurrentProject",
        value: function setCurrentProject(projectId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var _iterator, _step, col;

            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    if (this.currentProject && this.currentProject.id === projectId) {
                      _context15.next = 26;
                      break;
                    }

                    _context15.next = 3;
                    return this.githubService.getProject(projectId);

                  case 3:
                    this.currentProject = _context15.sent;
                    _context15.next = 6;
                    return this.githubService.getProjectColumns(projectId);

                  case 6:
                    this.currentProject.columns = _context15.sent;
                    this.projectChanged.emit(this.currentProject);
                    _iterator = _createForOfIteratorHelper(this.currentProject.columns);
                    _context15.prev = 9;

                    _iterator.s();

                  case 11:
                    if ((_step = _iterator.n()).done) {
                      _context15.next = 18;
                      break;
                    }

                    col = _step.value;
                    _context15.next = 15;
                    return this.githubService.getColumnCards(col.id);

                  case 15:
                    col.cards = _context15.sent;

                  case 16:
                    _context15.next = 11;
                    break;

                  case 18:
                    _context15.next = 23;
                    break;

                  case 20:
                    _context15.prev = 20;
                    _context15.t0 = _context15["catch"](9);

                    _iterator.e(_context15.t0);

                  case 23:
                    _context15.prev = 23;

                    _iterator.f();

                    return _context15.finish(23);

                  case 26:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this, [[9, 20, 23, 26]]);
          }));
        }
      }, {
        key: "refreshProjectColumns",
        value: function refreshProjectColumns() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _iterator2, _step2, col;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.githubService.getProjectColumns(this.currentProject.id);

                  case 2:
                    this.currentProject.columns = _context16.sent;
                    _iterator2 = _createForOfIteratorHelper(this.currentProject.columns);
                    _context16.prev = 4;

                    _iterator2.s();

                  case 6:
                    if ((_step2 = _iterator2.n()).done) {
                      _context16.next = 13;
                      break;
                    }

                    col = _step2.value;
                    _context16.next = 10;
                    return this.githubService.getColumnCards(col.id);

                  case 10:
                    col.cards = _context16.sent;

                  case 11:
                    _context16.next = 6;
                    break;

                  case 13:
                    _context16.next = 18;
                    break;

                  case 15:
                    _context16.prev = 15;
                    _context16.t0 = _context16["catch"](4);

                    _iterator2.e(_context16.t0);

                  case 18:
                    _context16.prev = 18;

                    _iterator2.f();

                    return _context16.finish(18);

                  case 21:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this, [[4, 15, 18, 21]]);
          }));
        }
      }, {
        key: "refreshProjectCards",
        value: function refreshProjectCards() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var _iterator3, _step3, col;

            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _iterator3 = _createForOfIteratorHelper(this.currentProject.columns);
                    _context17.prev = 1;

                    _iterator3.s();

                  case 3:
                    if ((_step3 = _iterator3.n()).done) {
                      _context17.next = 10;
                      break;
                    }

                    col = _step3.value;
                    _context17.next = 7;
                    return this.githubService.getColumnCards(col.id);

                  case 7:
                    col.cards = _context17.sent;

                  case 8:
                    _context17.next = 3;
                    break;

                  case 10:
                    _context17.next = 15;
                    break;

                  case 12:
                    _context17.prev = 12;
                    _context17.t0 = _context17["catch"](1);

                    _iterator3.e(_context17.t0);

                  case 15:
                    _context17.prev = 15;

                    _iterator3.f();

                    return _context17.finish(15);

                  case 18:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this, [[1, 12, 15, 18]]);
          }));
        }
      }, {
        key: "refreshColumnCards",
        value: function refreshColumnCards(col) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.githubService.getColumnCards(this.currentProject.columns[col].id);

                  case 2:
                    this.currentProject.columns[col].cards = _context18.sent;

                  case 3:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }]);

      return ProjectService;
    }();

    ProjectService.ɵfac = function ProjectService_Factory(t) {
      return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]));
    };

    ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProjectService,
      factory: ProjectService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/utils/markdown-parse.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/utils/markdown-parse.pipe.ts ***!
    \***************************************************/

  /*! exports provided: MarkdownParsePipe */

  /***/
  function srcAppCoreUtilsMarkdownParsePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkdownParsePipe", function () {
      return MarkdownParsePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! marked */
    "./node_modules/marked/src/marked.js");
    /* harmony import */


    var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);

    var MarkdownParsePipe = /*#__PURE__*/function () {
      function MarkdownParsePipe() {
        _classCallCheck(this, MarkdownParsePipe);
      }

      _createClass(MarkdownParsePipe, [{
        key: "transform",
        value: function transform(value) {
          return marked__WEBPACK_IMPORTED_MODULE_1___default()(value);
        }
      }]);

      return MarkdownParsePipe;
    }();

    MarkdownParsePipe.ɵfac = function MarkdownParsePipe_Factory(t) {
      return new (t || MarkdownParsePipe)();
    };

    MarkdownParsePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "markdownParse",
      type: MarkdownParsePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkdownParsePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'markdownParse'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/utils/safe-html.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/core/utils/safe-html.pipe.ts ***!
    \**********************************************/

  /*! exports provided: SafeHtmlPipe */

  /***/
  function srcAppCoreUtilsSafeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
      return SafeHtmlPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var SafeHtmlPipe = /*#__PURE__*/function () {
      function SafeHtmlPipe(sanitizer) {
        _classCallCheck(this, SafeHtmlPipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SafeHtmlPipe, [{
        key: "transform",
        value: function transform(html) {
          return this.sanitizer.bypassSecurityTrustHtml(html);
        }
      }]);

      return SafeHtmlPipe;
    }();

    SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
      return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safeHtml'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /home/travis/build/pro-jectsapp/pro-jects/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map