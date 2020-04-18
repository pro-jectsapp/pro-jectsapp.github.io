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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/__ivy_ngcc__/fesm2015/angular-split.js");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/__ivy_ngcc__/fesm2015/ngx-monaco-editor.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _components_projects_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/projects-list.component */ "./src/app/components/projects-list.component.ts");
/* harmony import */ var _core_services_github_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/services/github.service */ "./src/app/core/services/github.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _components_project_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/project-view.component */ "./src/app/components/project-view.component.ts");
/* harmony import */ var _core_utils_markdown_parse_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/utils/markdown-parse.pipe */ "./src/app/core/utils/markdown-parse.pipe.ts");
/* harmony import */ var _core_utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/utils/safe-html.pipe */ "./src/app/core/utils/safe-html.pipe.ts");
/* harmony import */ var _components_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/card.component */ "./src/app/components/card.component.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login.component */ "./src/app/components/login.component.ts");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _core_services_github_service__WEBPACK_IMPORTED_MODULE_11__["GithubService"], _core_services_project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            angular_split__WEBPACK_IMPORTED_MODULE_6__["AngularSplitModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__["MonacoEditorModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _components_projects_list_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsListComponent"],
        _components_project_view_component__WEBPACK_IMPORTED_MODULE_13__["ProjectViewComponent"],
        _core_utils_markdown_parse_pipe__WEBPACK_IMPORTED_MODULE_14__["MarkdownParsePipe"],
        _core_utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__["SafeHtmlPipe"],
        _components_card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"],
        _components_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angular_split__WEBPACK_IMPORTED_MODULE_6__["AngularSplitModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__["MonacoEditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _components_projects_list_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsListComponent"],
                    _components_project_view_component__WEBPACK_IMPORTED_MODULE_13__["ProjectViewComponent"],
                    _core_utils_markdown_parse_pipe__WEBPACK_IMPORTED_MODULE_14__["MarkdownParsePipe"],
                    _core_utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__["SafeHtmlPipe"],
                    _components_card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"],
                    _components_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    angular_split__WEBPACK_IMPORTED_MODULE_6__["AngularSplitModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__["MonacoEditorModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                ],
                providers: [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _core_services_github_service__WEBPACK_IMPORTED_MODULE_11__["GithubService"], _core_services_project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"]],
                bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/__ivy_ngcc__/fesm2015/angular-split.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_github_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/github.service */ "./src/app/core/services/github.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _projects_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects-list.component */ "./src/app/components/projects-list.component.ts");
/* harmony import */ var _project_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project-view.component */ "./src/app/components/project-view.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login.component */ "./src/app/components/login.component.ts");














function AppComponent_details_8_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.githubService.ghUser.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppComponent_details_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "summary", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_details_8_img_2_Template, 1, 1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Signed in as ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_details_8_Template_li_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.githubService.ghUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.githubService.ghUser ? ctx_r0.githubService.ghUser.login : "...");
} }
function AppComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "as-split", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "as-split-area", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-projects-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "as-split-area", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-project-view", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("columnSelected", function AppComponent_div_9_Template_app_project_view_columnSelected_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onColumnSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login", 23);
} }
function AppComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Authenticated as ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.githubService.ghUser ? ctx_r4.githubService.ghUser.login : "...");
} }
function AppComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Not logged in ");
} }
class AppComponent {
    constructor(githubService, projectService, authService, route) {
        this.githubService = githubService;
        this.projectService = projectService;
        this.authService = authService;
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(map => {
            if (map.code && map.code.length === 20) {
                axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://pro-jects.now.sh/api/authorize?code=${map.code}`).then(res => {
                    if (res.data.access_token) {
                        this.authService.setUser(res.data.access_token);
                    }
                    window.location.href = '/';
                });
            }
        });
    }
    onColumnSelected() {
        this.splitComponent.setVisibleAreaSizes([0, 100]);
    }
    logout() {
        this.authService.logoutUser();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_split__WEBPACK_IMPORTED_MODULE_1__["SplitComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.splitComponent = _t.first);
    } }, decls: 22, vars: 6, consts: [[1, "wrapper"], [1, "nav"], [1, "nav-block"], ["src", "/assets/images/GitHub-Mark-Light-64px.png", "alt", "GitHub Mark", 1, "nav-block__image", 2, "margin", "0 5px"], [1, "nav-block__heading"], [4, "ngIf"], ["class", "app", 4, "ngIf", "ngIfElse"], ["loginScreen", ""], [1, "bar"], [2, "text-align", "right"], [4, "ngIf", "ngIfElse"], ["notLoggedInMessage", ""], [1, "user-details__summary"], ["class", "nav-block__image nav-block__image--rounded", 3, "src", 4, "ngIf"], [1, "user-details"], [1, "user-details__list"], [3, "click"], [1, "nav-block__image", "nav-block__image--rounded", 3, "src"], [1, "app"], ["unit", "percent", "direction", "horizontal", "useTransition", "true"], ["size", "25"], ["size", "75", "minSize", "50"], [3, "columnSelected"], [2, "flex", "1", "overflow", "hidden"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_details_8_Template, 14, 2, "details", 5);
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
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn())("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectService.currentProject ? ctx.projectService.currentProject.name : "You haven't selected any project yet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn())("ngIfElse", _r5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], angular_split__WEBPACK_IMPORTED_MODULE_1__["SplitComponent"], angular_split__WEBPACK_IMPORTED_MODULE_1__["SplitAreaDirective"], _projects_list_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsListComponent"], _project_view_component__WEBPACK_IMPORTED_MODULE_10__["ProjectViewComponent"], _login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.nav[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  color: #fff;\n  background-color: #161515;\n}\n.nav-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nav-block[_ngcontent-%COMP%]   .nav-block__image[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n}\n.nav-block[_ngcontent-%COMP%]   .nav-block__image--rounded[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.nav-block[_ngcontent-%COMP%]   .nav-block__heading[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details__summary[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details__summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #fff;\n  color: #000;\n  right: 20px;\n  box-shadow: 0 0 5px 0 rgba(22,21,21,0.267);\n  width: 200px;\n  text-align: left;\n  margin-top: 2px;\n  border-radius: 5px;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid #e1e4e8;\n  margin: 0;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-details__list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-details__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 15px;\n  cursor: pointer;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-details__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.nav-block[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-details__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #0366d6;\n  color: #fff;\n}\n.app[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  overflow: hidden;\n}\n.bar[_ngcontent-%COMP%] {\n  background-color: #0366d6;\n  font-size: 12px;\n  padding: 2px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=src/app/views/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXBwL3NyYy9hcHAvdmlld3MvYXBwL2FwcC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdmlld3MvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQU87RUFDUCxhQUFRO0VBQ1IsZ0JBQVU7RUFDVixhQUFTO0VBQ1Qsc0JBQWdCO0FDQ2xCO0FEQ0E7RUFDRSxXQUFPO0VBQ1AsYUFBUztFQUNULG1CQUFnQjtFQUNoQiw4QkFBaUI7RUFDakIsYUFBUztFQUNULFdBQU87RUFDUCx5QkFBa0I7QUNDcEI7QURDQTtFQUNFLGFBQVM7RUFDVCxtQkFBYTtBQ0NmO0FEQ0U7RUFDRSxZQUFRO0VBQ1IsV0FBTztBQ0NYO0FEQ0U7RUFDRSxtQkFBZTtBQ0NuQjtBRENFO0VBQ0UsU0FBUTtBQ0NaO0FEQ0U7RUFDRSxjQUFRO0VBQ1IsYUFBUTtFQUNSLG1CQUFZO0FDQ2hCO0FEQ0k7RUFDRSxhQUFTO0FDQ2Y7QURDRTtFQUNFLGtCQUFVO0VBQ1Ysc0JBQWtCO0VBQ2xCLFdBQU87RUFDUCxXQUFPO0VBQ1AsMENBQVk7RUFDWixZQUFPO0VBQ1AsZ0JBQVc7RUFDWCxlQUFZO0VBQ1osa0JBQWU7QUNDbkI7QURDSTtFQUNFLDZCQUFZO0VBQ1osU0FBUTtBQ0NkO0FEQ0k7RUFDRSxZQUFRO0FDQ2Q7QURDSTtFQUNFLGdCQUFZO0VBQ1osU0FBUTtFQUNSLFVBQVM7QUNDZjtBRENNO0VBQ0UsY0FBUztFQUNULGtCQUFTO0VBQ1QsZUFBUTtBQ0NoQjtBRENRO0VBQ0UsOEJBQTBCO0VBQzFCLCtCQUEyQjtBQ0NyQztBRENRO0VBQ0UseUJBQWtCO0VBQ2xCLFdBQU87QUNDakI7QURFQTtFQUNFLFdBQU87RUFDUCxPQUFNO0VBQ04sZ0JBQVU7QUNBWjtBREVBO0VBQ0UseUJBQWtCO0VBQ2xCLGVBQVc7RUFDWCxZQUFTO0VBQ1QsV0FBTztFQUNQLGFBQVM7RUFDVCxtQkFBYTtFQUNiLDhCQUFpQjtBQ0FuQjtBQUNBLDhEQUE4RCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcC9hcHAuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlclxuICB3aWR0aDogMTAwJVxuICBoZWlnaHQ6IDEwMHZoXG4gIG92ZXJmbG93OiBoaWRkZW5cbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG5cbi5uYXZcbiAgd2lkdGg6IDEwMCVcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWRpcmVjdGlvbjogcm93XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICBwYWRkaW5nOiAxMHB4XG4gIGNvbG9yOiB3aGl0ZVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNTE1XG5cbi5uYXYtYmxvY2tcbiAgZGlzcGxheTogZmxleFxuICBhbGlnbi1pdGVtczogY2VudGVyXG5cbiAgLm5hdi1ibG9ja19faW1hZ2VcbiAgICBoZWlnaHQ6IDMycHhcbiAgICB3aWR0aDogMzJweFxuXG4gIC5uYXYtYmxvY2tfX2ltYWdlLS1yb3VuZGVkXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxuXG4gIC5uYXYtYmxvY2tfX2hlYWRpbmdcbiAgICBtYXJnaW46IDBcblxuICAudXNlci1kZXRhaWxzX19zdW1tYXJ5XG4gICAgbWFyZ2luOiAwIDEwcHhcbiAgICBkaXNwbGF5IGZsZXhcbiAgICBhbGlnbi1pdGVtcyBjZW50ZXJcblxuICAgICY6Oi13ZWJraXQtZGV0YWlscy1tYXJrZXJcbiAgICAgIGRpc3BsYXk6IG5vbmVcblxuICAudXNlci1kZXRhaWxzXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZlxuICAgIGNvbG9yOiBibGFja1xuICAgIHJpZ2h0OiAyMHB4XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwICMxNjE1MTU0NFxuICAgIHdpZHRoOiAyMDBweFxuICAgIHRleHQtYWxpZ24gbGVmdFxuICAgIG1hcmdpbi10b3A6IDJweFxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxuXG4gICAgaHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFlNGU4XG4gICAgICBtYXJnaW46IDBcblxuICAgIHBcbiAgICAgIG1hcmdpbjogMTVweFxuXG4gICAgLnVzZXItZGV0YWlsc19fbGlzdFxuICAgICAgbGlzdC1zdHlsZTogbm9uZVxuICAgICAgbWFyZ2luOiAwXG4gICAgICBwYWRkaW5nOiAwXG5cbiAgICAgIGxpXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcblxuICAgICAgICAmOmxhc3QtY2hpbGRcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzIDVweFxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzIDVweFxuXG4gICAgICAgICY6aG92ZXJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2NmQ2XG4gICAgICAgICAgY29sb3I6IHdoaXRlXG5cblxuLmFwcFxuICB3aWR0aDogMTAwJVxuICBmbGV4OiAxXG4gIG92ZXJmbG93OiBoaWRkZW5cblxuLmJhclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2NmQ2XG4gIGZvbnQtc2l6ZTogMTJweFxuICBwYWRkaW5nOiAycHhcbiAgY29sb3I6IHdoaXRlXG4gIGRpc3BsYXk6IGZsZXhcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE1MTU7XG59XG4ubmF2LWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXYtYmxvY2sgLm5hdi1ibG9ja19faW1hZ2Uge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xufVxuLm5hdi1ibG9jayAubmF2LWJsb2NrX19pbWFnZS0tcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubmF2LWJsb2NrIC5uYXYtYmxvY2tfX2hlYWRpbmcge1xuICBtYXJnaW46IDA7XG59XG4ubmF2LWJsb2NrIC51c2VyLWRldGFpbHNfX3N1bW1hcnkge1xuICBtYXJnaW46IDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXYtYmxvY2sgLnVzZXItZGV0YWlsc19fc3VtbWFyeTo6LXdlYmtpdC1kZXRhaWxzLW1hcmtlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubmF2LWJsb2NrIC51c2VyLWRldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICByaWdodDogMjBweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMjIsMjEsMjEsMC4yNjcpO1xuICB3aWR0aDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm5hdi1ibG9jayAudXNlci1kZXRhaWxzIGhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWU0ZTg7XG4gIG1hcmdpbjogMDtcbn1cbi5uYXYtYmxvY2sgLnVzZXItZGV0YWlscyBwIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuLm5hdi1ibG9jayAudXNlci1kZXRhaWxzIC51c2VyLWRldGFpbHNfX2xpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ubmF2LWJsb2NrIC51c2VyLWRldGFpbHMgLnVzZXItZGV0YWlsc19fbGlzdCBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXYtYmxvY2sgLnVzZXItZGV0YWlscyAudXNlci1kZXRhaWxzX19saXN0IGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ubmF2LWJsb2NrIC51c2VyLWRldGFpbHMgLnVzZXItZGV0YWlsc19fbGlzdCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzY2ZDY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFwcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzY2ZDY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC92aWV3cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: '../views/app/app.component.html',
                styleUrls: ['../views/app/app.component.styl'],
            }]
    }], function () { return [{ type: _core_services_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"] }, { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, { splitComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_split__WEBPACK_IMPORTED_MODULE_1__["SplitComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/components/card.component.ts":
/*!**********************************************!*\
  !*** ./src/app/components/card.component.ts ***!
  \**********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/github.service */ "./src/app/core/services/github.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/__ivy_ngcc__/fesm2015/ngx-monaco-editor.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/utils/safe-html.pipe */ "./src/app/core/utils/safe-html.pipe.ts");
/* harmony import */ var _core_utils_markdown_parse_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/utils/markdown-parse.pipe */ "./src/app/core/utils/markdown-parse.pipe.ts");












function CardComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_container_2_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onMove(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_container_2_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onMove(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_container_2_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_container_2_Template_mat_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.startEditing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CardComponent_ng_template_3_mat_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 11);
} }
function CardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_template_3_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.saveCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CardComponent_ng_template_3_mat_spinner_4_Template, 1, 0, "mat-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_template_3_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.saveCardAndCloseEditor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_ng_template_3_Template_mat_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.closeEditor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isBusy);
} }
function CardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "markdownParse");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, ctx_r3.card.note)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function CardComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-monaco-editor", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CardComponent_ng_template_6_Template_ngx_monaco_editor_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.editorContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r5.editorOptions)("ngModel", ctx_r5.editorContent);
} }
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
})(Direction || (Direction = {}));
class CardComponent {
    constructor(githubService, projectService) {
        this.githubService = githubService;
        this.projectService = projectService;
        this.moveUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isEditing = false;
        this.isBusy = false;
        this.editorOptions = { theme: 'vs-dark', language: 'markdown', automaticLayout: true };
        this.editorContent = '';
    }
    onMove(direction) {
        if (direction === Direction.Up) {
            this.moveUp.emit();
        }
        else if (direction === Direction.Down) {
            this.moveDown.emit();
        }
    }
    startEditing() {
        this.isEditing = true;
        this.editorContent = this.card.note;
    }
    saveCard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isBusy = true;
            yield this.githubService.saveCard(this.card.id, this.editorContent);
            this.isBusy = false;
        });
    }
    closeEditor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isBusy = true;
            yield this.projectService.refreshColumnCards(this.column);
            this.editorContent = '';
            this.isEditing = false;
            this.isBusy = false;
        });
    }
    saveCardAndCloseEditor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isBusy = true;
            yield this.githubService.saveCard(this.card.id, this.editorContent);
            yield this.projectService.refreshColumnCards(this.column);
            this.editorContent = '';
            this.isEditing = false;
            this.isBusy = false;
        });
    }
    onDelete() {
        this.delete.emit();
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { card: "card", column: "column" }, outputs: { moveUp: "moveUp", moveDown: "moveDown", delete: "delete" }, decls: 8, vars: 4, consts: [[1, "card"], [1, "card__bar"], [4, "ngIf", "ngIfElse"], ["editorButtons", ""], ["class", "card__content", 3, "innerHTML", 4, "ngIf", "ngIfElse"], ["editor", ""], [1, "card__bar__icon", 3, "click"], [1, "card__bar__icon", "icon__save", "card__bar__icon--big", 3, "click"], ["diameter", "20", 4, "ngIf"], [1, "card__bar__icon", "icon__done", "card__bar__icon--big", 3, "click"], [1, "card__bar__icon", "icon__close", "card__bar__icon--big", 3, "click"], ["diameter", "20"], [1, "card__content", 3, "innerHTML"], [1, "card__editor"], [2, "height", "100%", 3, "options", "ngModel", "ngModelChange"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CardComponent_ng_container_2_Template, 11, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CardComponent_ng_template_3_Template, 10, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CardComponent_div_5_Template, 3, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CardComponent_ng_template_6_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEditing)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEditing)("ngIfElse", _r4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__["EditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], pipes: [_core_utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeHtmlPipe"], _core_utils_markdown_parse_pipe__WEBPACK_IMPORTED_MODULE_10__["MarkdownParsePipe"]], styles: [".card {\n  border: solid 1px #eee;\n  border-radius: 5px;\n  background-color: #fff;\n  margin: 10px;\n}\n.card__content {\n  padding: 0 10px;\n}\n.card__content * {\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\n.card__content *:last-child {\n  margin-bottom: 10px;\n}\n.card__bar {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.card__bar__icon {\n  color: #808080;\n  width: 15px;\n  height: 15px;\n  font-size: 15px;\n  cursor: pointer;\n  margin: 0 1px;\n}\n.card__bar__icon--big {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  margin: 0 2px;\n}\n.card__bar .icon__done:hover {\n  color: #28a745;\n}\n.card__bar .icon__close:hover {\n  color: #d73a49;\n}\n.card__bar .icon__save:hover {\n  color: #24292e;\n}\n.card__editor {\n  height: 70vh;\n}\n.card__editor .editor-container {\n  height: 100% !important;\n}\n/*# sourceMappingURL=src/app/views/card/card.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2FyZC9zcmMvYXBwL3ZpZXdzL2NhcmQvY2FyZC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdmlld3MvY2FyZC9jYXJkLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQVE7RUFDUixrQkFBZTtFQUNmLHNCQUFrQjtFQUNsQixZQUFRO0FDQ1Y7QURDRTtFQUNFLGVBQVM7QUNDYjtBRENJO0VBQ0UsYUFBWTtFQUNaLG9CQUFlO0FDQ3JCO0FEQ0k7RUFDRSxtQkFBZTtBQ0NyQjtBRENFO0VBQ0UsYUFBUztFQUNULGFBQVM7RUFDVCw4QkFBaUI7QUNDckI7QURDSTtFQUNFLGNBQU87RUFDUCxXQUFPO0VBQ1AsWUFBUTtFQUNSLGVBQVc7RUFDWCxlQUFRO0VBQ1IsYUFBUTtBQ0NkO0FEQ007RUFDRSxXQUFPO0VBQ1AsWUFBUTtFQUNSLGVBQVc7RUFDWCxhQUFRO0FDQ2hCO0FERU07RUFDRSxjQUFPO0FDQWY7QURHTTtFQUNFLGNBQU87QUNEZjtBRElNO0VBQ0UsY0FBTztBQ0ZmO0FESUU7RUFDRSxZQUFRO0FDRlo7QURJSTtFQUNFLHVCQUFRO0FDRmQ7QUFDQSxnRUFBZ0UiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jYXJkL2NhcmQuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFxuICBib3JkZXI6IHNvbGlkIDFweCAjZWVlZWVlXG4gIGJvcmRlci1yYWRpdXM6IDVweFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmXG4gIG1hcmdpbjogMTBweFxuXG4gICZfX2NvbnRlbnRcbiAgICBwYWRkaW5nOiAwIDEwcHhcblxuICAgICpcbiAgICAgIG1hcmdpbi10b3A6IDBcbiAgICAgIG1hcmdpbi1ib3R0b206IC41ZW1cblxuICAgICo6bGFzdC1jaGlsZFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxuXG4gICZfX2JhclxuICAgIHBhZGRpbmc6IDEwcHhcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG5cbiAgICAmX19pY29uXG4gICAgICBjb2xvcjogZ3JleVxuICAgICAgd2lkdGg6IDE1cHhcbiAgICAgIGhlaWdodDogMTVweFxuICAgICAgZm9udC1zaXplOiAxNXB4XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgIG1hcmdpbjogMCAxcHhcblxuICAgICAgJi0tYmlnXG4gICAgICAgIHdpZHRoOiAyMHB4XG4gICAgICAgIGhlaWdodDogMjBweFxuICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICAgICAgbWFyZ2luOiAwIDJweFxuXG4gICAgLmljb25fX2RvbmVcbiAgICAgICY6aG92ZXJcbiAgICAgICAgY29sb3I6ICMyOGE3NDVcblxuICAgIC5pY29uX19jbG9zZVxuICAgICAgJjpob3ZlclxuICAgICAgICBjb2xvcjogI2Q3M2E0OVxuXG4gICAgLmljb25fX3NhdmVcbiAgICAgICY6aG92ZXJcbiAgICAgICAgY29sb3I6ICMyNDI5MmVcblxuICAmX19lZGl0b3JcbiAgICBoZWlnaHQ6IDcwdmhcblxuICAgIC5lZGl0b3ItY29udGFpbmVyXG4gICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiIsIi5jYXJkIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDEwcHg7XG59XG4uY2FyZF9fY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5jYXJkX19jb250ZW50ICoge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbi5jYXJkX19jb250ZW50ICo6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FyZF9fYmFyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNhcmRfX2Jhcl9faWNvbiB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIDFweDtcbn1cbi5jYXJkX19iYXJfX2ljb24tLWJpZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwIDJweDtcbn1cbi5jYXJkX19iYXIgLmljb25fX2RvbmU6aG92ZXIge1xuICBjb2xvcjogIzI4YTc0NTtcbn1cbi5jYXJkX19iYXIgLmljb25fX2Nsb3NlOmhvdmVyIHtcbiAgY29sb3I6ICNkNzNhNDk7XG59XG4uY2FyZF9fYmFyIC5pY29uX19zYXZlOmhvdmVyIHtcbiAgY29sb3I6ICMyNDI5MmU7XG59XG4uY2FyZF9fZWRpdG9yIHtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuLmNhcmRfX2VkaXRvciAuZWRpdG9yLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC92aWV3cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: '../views/card/card.component.html',
                styleUrls: ['../views/card/card.component.styl'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _core_services_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"] }, { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }]; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], moveUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], moveDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginComponent {
    constructor() { }
    login() {
        const clientId = '435bb3ee9ba9d983cb60';
        window.location.href = `https://github.com/login/oauth/authorize?scope=repo%20write%3Aorg%20user&client_id=${clientId}`;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 8, vars: 0, consts: [[1, "login"], [1, "login__button", 3, "click"], ["src", "/assets/images/GitHub-Mark-Light-32px.png"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "(pro)jects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A better UI for GitHub Projects \uD83D\uDCDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_5_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sign in with GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".login[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n}\n.login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.login__button[_ngcontent-%COMP%] {\n  display: block;\n  padding: 6px 12px;\n  line-height: 20px;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-repeat: repeat-x;\n  background-position: -1px -1px;\n  background-size: 110% 110%;\n  border: 1px solid rgba(0,0,0,0.2);\n  border-radius: 0.25em;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: #fff;\n  background: linear-gradient(-180deg, #34d058, #28a745 90%);\n  margin: 10px auto;\n}\n.login__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1em;\n  display: inline-block;\n  vertical-align: text-top;\n  margin: 0 2px;\n}\n/*# sourceMappingURL=src/app/views/login/login.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbG9naW4vc3JjL2FwcC92aWV3cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFRO0VBQ1IsYUFBUztFQUNULHNCQUFnQjtFQUNoQix1QkFBaUI7RUFDakIsbUJBQWE7RUFDYixjQUFVO0FDQ1o7QURDRTs7RUFDRSxTQUFRO0FDRVo7QURBRTtFQUNFLGNBQVM7RUFDVCxpQkFBUztFQUNULGlCQUFhO0VBQ2IsbUJBQWE7RUFDYixzQkFBZ0I7RUFDaEIsZUFBUTtFQUNSLHlCQUFhO0tBQWIsc0JBQWE7TUFBYixxQkFBYTtVQUFiLGlCQUFhO0VBQ2IsMkJBQW1CO0VBQ25CLDhCQUFxQjtFQUNyQiwwQkFBaUI7RUFDakIsaUNBQVE7RUFDUixxQkFBZTtFQUNmLHdCQUFZO0tBQVoscUJBQVk7VUFBWixnQkFBWTtFQUNaLFdBQU87RUFDUCwwREFBWTtFQUNaLGlCQUFRO0FDRVo7QURBSTtFQUNFLFdBQVE7RUFDUixxQkFBUztFQUNULHdCQUFnQjtFQUNoQixhQUFRO0FDRWQ7QUFDQSxrRUFBa0UiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpblxuICBoZWlnaHQ6IDEwMCVcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgb3ZlcmZsb3c6IGF1dG9cblxuICBoMSwgcFxuICAgIG1hcmdpbjogMFxuXG4gICZfX2J1dHRvblxuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgcGFkZGluZzogNnB4IDEycHhcbiAgICBsaW5lLWhlaWdodDogMjBweFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXBcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgY3Vyc29yOiBwb2ludGVyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmVcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXhcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMXB4IC0xcHhcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgMTEwJVxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKVxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbVxuICAgIGFwcGVhcmFuY2U6IG5vbmVcbiAgICBjb2xvcjogd2hpdGVcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjMzRkMDU4LCMyOGE3NDUgOTAlKVxuICAgIG1hcmdpbjogMTBweCBhdXRvXG5cbiAgICBpbWdcbiAgICAgIGhlaWdodDogMWVtXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcFxuICAgICAgbWFyZ2luOiAwIDJweFxuIiwiLmxvZ2luIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubG9naW4gaDEsXG4ubG9naW4gcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5sb2dpbl9fYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMXB4IC0xcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTEwJSAxMTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjMzRkMDU4LCAjMjhhNzQ1IDkwJSk7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuLmxvZ2luX19idXR0b24gaW1nIHtcbiAgaGVpZ2h0OiAxZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICBtYXJnaW46IDAgMnB4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC92aWV3cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: '../views/login/login.component.html',
                styleUrls: ['../views/login/login.component.styl'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/project-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/project-view.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectViewComponent", function() { return ProjectViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var devpun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devpun */ "./node_modules/devpun/index.js");
/* harmony import */ var devpun__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devpun__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "./src/app/components/card.component.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_github_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/github.service */ "./src/app/core/services/github.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function ProjectViewComponent_div_0_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectViewComponent_div_0_li_14_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onColumnClicked(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectViewComponent_div_0_li_14_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const column_r5 = ctx.$implicit; const i_r6 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.deleteColumn(column_r5, i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.selectedColumn !== undefined ? ctx_r3.projectService.currentProject.columns[ctx_r3.selectedColumn].id === column_r5.id ? "columns-list__item__wrapper--selected" : "" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r5.name, " ");
} }
function ProjectViewComponent_div_0_div_15_app_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("moveUp", function ProjectViewComponent_div_0_div_15_app_card_1_Template_app_card_moveUp_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const card_r11 = ctx.$implicit; const i_r12 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.moveCard(card_r11, i_r12 - 1, i_r12); })("moveDown", function ProjectViewComponent_div_0_div_15_app_card_1_Template_app_card_moveDown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const card_r11 = ctx.$implicit; const i_r12 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.moveCard(card_r11, i_r12 + 1, i_r12); })("delete", function ProjectViewComponent_div_0_div_15_app_card_1_Template_app_card_delete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const card_r11 = ctx.$implicit; const i_r12 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.deleteCard(card_r11, i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r11)("column", ctx_r10.selectedColumn);
} }
function ProjectViewComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectViewComponent_div_0_div_15_app_card_1_Template, 1, 2, "app-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectViewComponent_div_0_div_15_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.addCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add a new card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.projectService.currentProject.columns[ctx_r4.selectedColumn].cards);
} }
function ProjectViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectViewComponent_div_0_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.setViewMode(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "vertical_split");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectViewComponent_div_0_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.setViewMode(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectViewComponent_div_0_Template_mat_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.addColumn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectViewComponent_div_0_li_14_Template, 5, 3, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectViewComponent_div_0_div_15_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.viewMode === 0 ? "project-view-bar__icon--active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.viewMode === 1 ? "project-view-bar__icon--active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projectService.currentProject.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedColumn !== undefined);
} }
function ProjectViewComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No project selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// @ts-ignore
Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};
var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["Switch"] = 0] = "Switch";
    ViewMode[ViewMode["Columns"] = 1] = "Columns";
})(ViewMode || (ViewMode = {}));
class ProjectViewComponent {
    constructor(projectService, githubService) {
        this.projectService = projectService;
        this.githubService = githubService;
        this.columnSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewMode = ViewMode.Switch;
    }
    ngOnInit() {
        this.projectService.projectChanged.subscribe(() => {
            this.selectedColumn = undefined;
        });
    }
    onColumnClicked(column) {
        if (this.selectedColumn === undefined) {
            this.columnSelected.emit();
        }
        this.selectedColumn = column;
    }
    moveCard(card, pos, oldPos) {
        const currentColumn = this.projectService.currentProject.columns[this.selectedColumn];
        if (pos >= 0 && pos < currentColumn.cards.length) {
            let positionFormatted;
            switch (true) {
                case pos === 0:
                    positionFormatted = 'top';
                    break;
                case pos === currentColumn.cards.length - 1:
                    positionFormatted = 'bottom';
                    break;
                default:
                    if (currentColumn.cards[pos - 1].id === card.id) {
                        positionFormatted = `after:${currentColumn.cards[pos].id}`;
                    }
                    else {
                        positionFormatted = `after:${currentColumn.cards[pos - 1].id}`;
                    }
            }
            this.githubService.moveCard(card.id, positionFormatted);
            this.projectService.currentProject.columns[this.selectedColumn].cards.move(oldPos, pos);
        }
    }
    deleteCard(card, pos) {
        if (confirm('Are you sure to delete this card?')) {
            this.projectService.currentProject.columns[this.selectedColumn].cards.splice(pos, 1);
            this.githubService.deleteCard(card.id);
        }
    }
    setViewMode(mode) {
        if (mode !== this.viewMode) {
            this.viewMode = mode;
        }
    }
    addColumn() {
        const name = prompt('Give title for the column');
        if (name && name !== '') {
            this.githubService.createColumn(this.projectService.currentProject.id, name).then(() => {
                this.projectService.refreshProjectColumns();
            });
        }
    }
    addCard() {
        const joke = devpun__WEBPACK_IMPORTED_MODULE_1___default.a.random();
        this.githubService
            .createCard(this.projectService.currentProject.columns[this.selectedColumn].id, joke)
            .then(() => {
            this.projectService.refreshColumnCards(this.selectedColumn).then(() => {
                document.querySelector('.cards-view').scroll({ top: 0, behavior: 'smooth' });
                // Ridiculous monkey patch. Don't do this at home, kids
                setTimeout(() => {
                    this.firstCard.startEditing();
                }, 0);
            });
        });
    }
    deleteColumn(column, pos) {
        if (confirm('Are you sure to delete this column?')) {
            this.projectService.currentProject.columns.splice(pos, 1);
            this.githubService.deleteColumn(column.id);
        }
    }
}
ProjectViewComponent.ɵfac = function ProjectViewComponent_Factory(t) { return new (t || ProjectViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_github_service__WEBPACK_IMPORTED_MODULE_4__["GithubService"])); };
ProjectViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectViewComponent, selectors: [["app-project-view"]], viewQuery: function ProjectViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.firstCard = _t.first);
    } }, outputs: { columnSelected: "columnSelected" }, decls: 3, vars: 2, consts: [["class", "project-view__wrapper", 4, "ngIf", "ngIfElse"], ["noProjectBlock", ""], [1, "project-view__wrapper"], [1, "project-view-bar"], ["title", "Column Switch View", 1, "project-view-bar__icon", 2, "transform", "scale(1.25)", 3, "click"], ["title", "Column View", 1, "project-view-bar__icon", 3, "click"], [1, "project-view"], [1, "columns-list__wrapper"], [1, "columns-list__header"], [2, "width", "12px", "height", "12px", "font-size", "12px", "transform", "scale(1.25)", "cursor", "pointer", 3, "click"], [1, "columns-list"], ["class", "columns-list__item__wrapper", 3, "class", 4, "ngFor", "ngForOf"], ["class", "cards-view cards-view--switch-view", 4, "ngIf"], [1, "columns-list__item__wrapper"], [1, "columns-list__item", 3, "click"], [1, "delete-button", 3, "click"], [1, "cards-view", "cards-view--switch-view"], [3, "card", "column", "moveUp", "moveDown", "delete", 4, "ngFor", "ngForOf"], [1, "cards-view__add-button", 3, "click"], [3, "card", "column", "moveUp", "moveDown", "delete"], [1, "no-project"]], template: function ProjectViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectViewComponent_div_0_Template, 16, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectViewComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectService.currentProject)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: [".project-view__wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #fafbfc;\n}\n.project-view {\n  width: 100%;\n  flex: 1;\n  display: flex;\n  overflow: auto;\n}\n.project-view-bar {\n  width: 100%;\n  background-color: #fff;\n  border-bottom: solid 1px #eee;\n  display: flex;\n  color: #161515;\n  padding: 2px 17px;\n}\n.project-view-bar__icon {\n  color: #808080;\n  margin: 0 2px;\n  cursor: pointer;\n}\n.project-view-bar__icon--active {\n  color: #000;\n}\n.cards-view--switch-view {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n.columns-list__wrapper {\n  width: 200px;\n  height: 100%;\n  border-right: solid 1px #eee;\n  background-color: #fff;\n  line-height: 1;\n}\n.columns-list__wrapper .columns-list__header {\n  color: #808080;\n  font-size: 12px;\n  padding: 3px;\n  display: flex;\n  justify-content: space-between;\n}\n.columns-list__wrapper .columns-list {\n  text-align: center;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.columns-list__wrapper .columns-list__item__wrapper {\n  margin: 0;\n  width: 100%;\n  display: block;\n  position: relative;\n}\n.columns-list__wrapper .columns-list__item {\n  padding: 7px 0;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n  font-weight: bold;\n}\n.columns-list__wrapper .columns-list__item__wrapper .delete-button {\n  visibility: hidden;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  height: 100%;\n  margin-right: 1px;\n  position: absolute;\n  right: 0;\n  -webkit-font-feature-settings: 'liga';\n  font-family: 'Material Icons';\n  color: #d3d4d5;\n}\n.columns-list__wrapper .columns-list__item__wrapper .delete-button:hover {\n  color: #b1b2b3;\n}\n.columns-list__wrapper .columns-list__item__wrapper:hover {\n  background-color: #f5f6f7;\n}\n.columns-list__wrapper .columns-list__item__wrapper:hover .delete-button {\n  visibility: visible;\n}\n.columns-list__wrapper .columns-list__item__wrapper--selected {\n  background-color: #f5f6f7;\n}\n.cards-view__add-button {\n  display: block;\n  padding: 6px 12px;\n  line-height: 20px;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-repeat: repeat-x;\n  background-position: -1px -1px;\n  background-size: 110% 110%;\n  border: 1px solid rgba(0,0,0,0.2);\n  border-radius: 0.25em;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: #fff;\n  background: linear-gradient(-180deg, #34d058, #28a745 90%);\n  margin: 5px auto;\n}\n.no-project {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #808080;\n  font-size: 2em;\n  text-align: center;\n  padding: 5px;\n}\n/*# sourceMappingURL=src/app/views/project-view/project-view.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvamVjdC12aWV3L3NyYy9hcHAvdmlld3MvcHJvamVjdC12aWV3L3Byb2plY3Qtdmlldy5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdmlld3MvcHJvamVjdC12aWV3L3Byb2plY3Qtdmlldy5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQU87RUFDUCxZQUFRO0VBQ1IsYUFBUztFQUNULHNCQUFnQjtFQUNoQix5QkFBa0I7QUNDcEI7QURDQTtFQUNFLFdBQU87RUFDUCxPQUFNO0VBQ04sYUFBUztFQUNULGNBQVU7QUNDWjtBRENBO0VBQ0UsV0FBTztFQUNQLHNCQUFrQjtFQUNsQiw2QkFBZTtFQUNmLGFBQVM7RUFDVCxjQUFPO0VBQ1AsaUJBQVM7QUNDWDtBRENFO0VBQ0UsY0FBTztFQUNQLGFBQVE7RUFDUixlQUFRO0FDQ1o7QURDRTtFQUNFLFdBQU87QUNDWDtBRENBO0VBQ0UsV0FBTztFQUNQLFlBQVE7RUFDUixjQUFVO0FDQ1o7QURDQTtFQUNFLFlBQU87RUFDUCxZQUFRO0VBQ1IsNEJBQWM7RUFDZCxzQkFBa0I7RUFDbEIsY0FBYTtBQ0NmO0FEQ0U7RUFDRSxjQUFPO0VBQ1AsZUFBVztFQUNYLFlBQVM7RUFDVCxhQUFTO0VBQ1QsOEJBQWlCO0FDQ3JCO0FEQ0U7RUFDRSxrQkFBWTtFQUNaLGdCQUFZO0VBQ1osVUFBUztFQUNULFNBQVE7QUNDWjtBRENJO0VBQ0UsU0FBUTtFQUNSLFdBQU87RUFDUCxjQUFTO0VBQ1Qsa0JBQVU7QUNDaEI7QURDTTtFQUNFLGNBQVM7RUFDVCxxQkFBUztFQUNULFdBQU87RUFDUCxlQUFRO0VBQ1IsaUJBQWE7QUNDckI7QURDTTtFQUNFLGtCQUFZO0VBQ1osb0JBQVM7RUFDVCxtQkFBYTtFQUNiLGVBQVE7RUFDUixZQUFRO0VBQ1IsaUJBQWM7RUFDZCxrQkFBVTtFQUNWLFFBQU87RUFDUCxxQ0FBK0I7RUFDL0IsNkJBQWE7RUFDYixjQUFPO0FDQ2Y7QURDUTtFQUNFLGNBQU87QUNDakI7QURDTTtFQUNFLHlCQUFrQjtBQ0MxQjtBRENRO0VBQ0UsbUJBQVk7QUNDdEI7QURDSTtFQUNFLHlCQUFrQjtBQ0N4QjtBREVBO0VBQ0UsY0FBUztFQUNULGlCQUFTO0VBQ1QsaUJBQWE7RUFDYixtQkFBYTtFQUNiLHNCQUFnQjtFQUNoQixlQUFRO0VBQ1IseUJBQWE7S0FBYixzQkFBYTtNQUFiLHFCQUFhO1VBQWIsaUJBQWE7RUFDYiwyQkFBbUI7RUFDbkIsOEJBQXFCO0VBQ3JCLDBCQUFpQjtFQUNqQixpQ0FBUTtFQUNSLHFCQUFlO0VBQ2Ysd0JBQVk7S0FBWixxQkFBWTtVQUFaLGdCQUFZO0VBQ1osV0FBTztFQUNQLDBEQUFZO0VBQ1osZ0JBQVE7QUNBVjtBRElBO0VBQ0UsV0FBTztFQUNQLFlBQVE7RUFDUixhQUFTO0VBQ1Qsc0JBQWdCO0VBQ2hCLHVCQUFpQjtFQUNqQixtQkFBYTtFQUNiLGNBQU87RUFDUCxjQUFXO0VBQ1gsa0JBQVc7RUFDWCxZQUFTO0FDRlg7QUFDQSxnRkFBZ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wcm9qZWN0LXZpZXcvcHJvamVjdC12aWV3LmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qtdmlld19fd3JhcHBlclxuICB3aWR0aDogMTAwJVxuICBoZWlnaHQ6IDEwMCVcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmNcblxuLnByb2plY3Qtdmlld1xuICB3aWR0aDogMTAwJVxuICBmbGV4OiAxXG4gIGRpc3BsYXk6IGZsZXhcbiAgb3ZlcmZsb3c6IGF1dG9cblxuLnByb2plY3Qtdmlldy1iYXJcbiAgd2lkdGg6IDEwMCVcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZlxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VlZWVlZVxuICBkaXNwbGF5OiBmbGV4XG4gIGNvbG9yOiAjMTYxNTE1XG4gIHBhZGRpbmc6IDJweCAxN3B4XG5cbiAgJl9faWNvblxuICAgIGNvbG9yOiBncmF5XG4gICAgbWFyZ2luOiAwIDJweFxuICAgIGN1cnNvcjogcG9pbnRlclxuXG4gICZfX2ljb24tLWFjdGl2ZVxuICAgIGNvbG9yOiBibGFja1xuXG4uY2FyZHMtdmlldy0tc3dpdGNoLXZpZXdcbiAgd2lkdGg6IDEwMCVcbiAgaGVpZ2h0OiAxMDAlXG4gIG92ZXJmbG93OiBhdXRvXG5cbi5jb2x1bW5zLWxpc3RfX3dyYXBwZXJcbiAgd2lkdGg6IDIwMHB4XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2VlZWVlZVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmXG4gIGxpbmUtaGVpZ2h0OiAxXG5cbiAgLmNvbHVtbnMtbGlzdF9faGVhZGVyXG4gICAgY29sb3I6IGdyYXlcbiAgICBmb250LXNpemU6IDEycHhcbiAgICBwYWRkaW5nOiAzcHhcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG5cbiAgLmNvbHVtbnMtbGlzdFxuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcbiAgICBwYWRkaW5nOiAwXG4gICAgbWFyZ2luOiAwXG5cbiAgICAmX19pdGVtX193cmFwcGVyXG4gICAgICBtYXJnaW46IDBcbiAgICAgIHdpZHRoOiAxMDAlXG4gICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG5cbiAgICAgIF5bMV1fX2l0ZW1cbiAgICAgICAgcGFkZGluZzogN3B4IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcblxuICAgICAgLmRlbGV0ZS1idXR0b25cbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFweFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJ1xuICAgICAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJ1xuICAgICAgICBjb2xvcjogI2QzZDRkNVxuXG4gICAgICAgICY6aG92ZXJcbiAgICAgICAgICBjb2xvcjogI2IxYjJiM1xuXG4gICAgICAmOmhvdmVyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZjdcblxuICAgICAgICAuZGVsZXRlLWJ1dHRvblxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcblxuICAgICZfX2l0ZW1fX3dyYXBwZXItLXNlbGVjdGVkXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3XG5cblxuLmNhcmRzLXZpZXdfX2FkZC1idXR0b25cbiAgZGlzcGxheTogYmxvY2tcbiAgcGFkZGluZzogNnB4IDEycHhcbiAgbGluZS1oZWlnaHQ6IDIwcHhcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gIGN1cnNvcjogcG9pbnRlclxuICB1c2VyLXNlbGVjdDogbm9uZVxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXhcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAtMXB4XG4gIGJhY2tncm91bmQtc2l6ZTogMTEwJSAxMTAlXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKVxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW1cbiAgYXBwZWFyYW5jZTogbm9uZVxuICBjb2xvcjogd2hpdGVcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsIzM0ZDA1OCwjMjhhNzQ1IDkwJSlcbiAgbWFyZ2luOiA1cHggYXV0b1xuXG5cblxuLm5vLXByb2plY3RcbiAgd2lkdGg6IDEwMCVcbiAgaGVpZ2h0OiAxMDAlXG4gIGRpc3BsYXk6IGZsZXhcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICBhbGlnbi1pdGVtczogY2VudGVyXG4gIGNvbG9yOiBncmV5XG4gIGZvbnQtc2l6ZTogMmVtXG4gIHRleHQtYWxpZ24gY2VudGVyXG4gIHBhZGRpbmc6IDVweFxuIiwiLnByb2plY3Qtdmlld19fd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG59XG4ucHJvamVjdC12aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnByb2plY3Qtdmlldy1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjMTYxNTE1O1xuICBwYWRkaW5nOiAycHggMTdweDtcbn1cbi5wcm9qZWN0LXZpZXctYmFyX19pY29uIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIG1hcmdpbjogMCAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9qZWN0LXZpZXctYmFyX19pY29uLS1hY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbn1cbi5jYXJkcy12aWV3LS1zd2l0Y2gtdmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbHVtbnMtbGlzdF9fd3JhcHBlciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5jb2x1bW5zLWxpc3RfX3dyYXBwZXIgLmNvbHVtbnMtbGlzdF9faGVhZGVyIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29sdW1ucy1saXN0X193cmFwcGVyIC5jb2x1bW5zLWxpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5jb2x1bW5zLWxpc3RfX3dyYXBwZXIgLmNvbHVtbnMtbGlzdF9faXRlbV9fd3JhcHBlciB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29sdW1ucy1saXN0X193cmFwcGVyIC5jb2x1bW5zLWxpc3RfX2l0ZW0ge1xuICBwYWRkaW5nOiA3cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb2x1bW5zLWxpc3RfX3dyYXBwZXIgLmNvbHVtbnMtbGlzdF9faXRlbV9fd3JhcHBlciAuZGVsZXRlLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGNvbG9yOiAjZDNkNGQ1O1xufVxuLmNvbHVtbnMtbGlzdF9fd3JhcHBlciAuY29sdW1ucy1saXN0X19pdGVtX193cmFwcGVyIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNiMWIyYjM7XG59XG4uY29sdW1ucy1saXN0X193cmFwcGVyIC5jb2x1bW5zLWxpc3RfX2l0ZW1fX3dyYXBwZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3O1xufVxuLmNvbHVtbnMtbGlzdF9fd3JhcHBlciAuY29sdW1ucy1saXN0X19pdGVtX193cmFwcGVyOmhvdmVyIC5kZWxldGUtYnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5jb2x1bW5zLWxpc3RfX3dyYXBwZXIgLmNvbHVtbnMtbGlzdF9faXRlbV9fd3JhcHBlci0tc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3O1xufVxuLmNhcmRzLXZpZXdfX2FkZC1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICMzNGQwNTgsICMyOGE3NDUgOTAlKTtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cbi5uby1wcm9qZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3ZpZXdzL3Byb2plY3Qtdmlldy9wcm9qZWN0LXZpZXcuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-view',
                templateUrl: '../views/project-view/project-view.component.html',
                styleUrls: ['../views/project-view/project-view.component.styl'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }, { type: _core_services_github_service__WEBPACK_IMPORTED_MODULE_4__["GithubService"] }]; }, { columnSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], firstCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/components/projects-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/projects-list.component.ts ***!
  \*******************************************************/
/*! exports provided: ProjectsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function() { return ProjectsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/github.service */ "./src/app/core/services/github.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ProjectsListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You haven't created projects associated to your account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsListComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsListComponent_li_5_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const project_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onProjectClicked(project_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.name);
} }
class ProjectsListComponent {
    constructor(githubService, projectService) {
        this.githubService = githubService;
        this.projectService = projectService;
        this.userProjects = [];
        this.orgProjects = [];
    }
    ngOnInit() {
        this.getProjects();
    }
    getProjects() {
        this.githubService.getUserProjects().then((projects) => {
            this.userProjects = projects;
        });
    }
    onProjectClicked(projectId) {
        this.projectService.setCurrentProject(projectId);
    }
}
ProjectsListComponent.ɵfac = function ProjectsListComponent_Factory(t) { return new (t || ProjectsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
ProjectsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsListComponent, selectors: [["app-projects-list"]], decls: 6, vars: 2, consts: [[1, "projects-list__wrapper"], ["class", "projects-list__empty-caption", 4, "ngIf"], [1, "projects-list"], ["class", "projects-list__item", 4, "ngFor", "ngForOf"], [1, "projects-list__empty-caption"], [1, "projects-list__item"], [3, "click"]], template: function ProjectsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User's projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectsListComponent_div_3_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsListComponent_li_5_Template, 3, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userProjects.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userProjects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".projects-list__wrapper[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.projects-list__wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.projects-list__empty-caption[_ngcontent-%COMP%] {\n  color: #808080;\n  margin: 5px 0 0 1em;\n  font-size: 0.8em;\n}\n.projects-list[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  overflow: auto;\n}\n.projects-list[_ngcontent-%COMP%]   .projects-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0366d6;\n  text-decoration: none;\n  font-weight: 600;\n  cursor: pointer;\n}\n.projects-list[_ngcontent-%COMP%]   .projects-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=src/app/views/projects-list/projects-list.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvamVjdHMtbGlzdC9zcmMvYXBwL3ZpZXdzL3Byb2plY3RzLWxpc3QvcHJvamVjdHMtbGlzdC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdmlld3MvcHJvamVjdHMtbGlzdC9wcm9qZWN0cy1saXN0LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBUztBQ0NYO0FEQ0U7RUFDRSxTQUFRO0FDQ1o7QURDQTtFQUNFLGNBQU87RUFDUCxtQkFBUTtFQUNSLGdCQUFXO0FDQ2I7QURDQTtFQUNFLGVBQVk7RUFDWixjQUFVO0FDQ1o7QURFSTtFQUNFLGNBQU87RUFDUCxxQkFBaUI7RUFDakIsZ0JBQWE7RUFDYixlQUFRO0FDQWQ7QURFTTtFQUNFLDBCQUFpQjtBQ0F6QjtBQUNBLGtGQUFrRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2plY3RzLWxpc3QvcHJvamVjdHMtbGlzdC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0cy1saXN0X193cmFwcGVyXG4gIHBhZGRpbmc6IDEwcHhcblxuICBoM1xuICAgIG1hcmdpbjogMFxuXG4ucHJvamVjdHMtbGlzdF9fZW1wdHktY2FwdGlvblxuICBjb2xvcjogZ3JheVxuICBtYXJnaW46IDVweCAwIDAgMWVtXG4gIGZvbnQtc2l6ZTogLjhlbVxuXG4ucHJvamVjdHMtbGlzdFxuICBtYXJnaW4tdG9wOiA1cHhcbiAgb3ZlcmZsb3c6IGF1dG9cblxuICAucHJvamVjdHMtbGlzdF9faXRlbVxuICAgIHNwYW5cbiAgICAgIGNvbG9yOiAjMDM2NmQ2XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuXG4gICAgICAmOmhvdmVyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXG4iLCIucHJvamVjdHMtbGlzdF9fd3JhcHBlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucHJvamVjdHMtbGlzdF9fd3JhcHBlciBoMyB7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9qZWN0cy1saXN0X19lbXB0eS1jYXB0aW9uIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIG1hcmdpbjogNXB4IDAgMCAxZW07XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4ucHJvamVjdHMtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ucHJvamVjdHMtbGlzdCAucHJvamVjdHMtbGlzdF9faXRlbSBzcGFuIHtcbiAgY29sb3I6ICMwMzY2ZDY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2plY3RzLWxpc3QgLnByb2plY3RzLWxpc3RfX2l0ZW0gc3Bhbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC92aWV3cy9wcm9qZWN0cy1saXN0L3Byb2plY3RzLWxpc3QuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-list',
                templateUrl: '../views/projects-list/projects-list.component.html',
                styleUrls: ['../views/projects-list/projects-list.component.styl'],
            }]
    }], function () { return [{ type: _core_services_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"] }, { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthService {
    constructor() {
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loggedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    setUser(token) {
        window.localStorage.setItem('githubToken', token);
        this.loggedIn.emit();
    }
    getUser() {
        return window.localStorage.getItem('githubToken');
    }
    logoutUser() {
        window.localStorage.removeItem('githubToken');
        this.loggedOut.emit();
    }
    isLoggedIn() {
        return !!window.localStorage.getItem('githubToken');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/services/github.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/github.service.ts ***!
  \*************************************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _octokit_rest_dist_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/rest/dist-web */ "./node_modules/@octokit/rest/dist-web/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");





class GithubService {
    constructor(authService) {
        this.authService = authService;
        if (authService.isLoggedIn()) {
            this.octokit = new _octokit_rest_dist_web__WEBPACK_IMPORTED_MODULE_2__["Octokit"]({ auth: authService.getUser(), userAgent: '(pro)jects v.0.1.0' });
        }
        this.authService.loggedIn.subscribe(() => {
            if (this.authService.isLoggedIn()) {
                this.octokit = new _octokit_rest_dist_web__WEBPACK_IMPORTED_MODULE_2__["Octokit"]({
                    auth: authService.getUser(),
                    userAgent: '(pro)jects v.0.1.0',
                });
            }
        });
        this.authService.loggedOut.subscribe(() => {
            if (!this.authService.isLoggedIn()) {
                this.octokit = undefined;
            }
        });
    }
    checkUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.octokit) {
                if (this.ghUser) {
                    return true;
                }
                else {
                    let res;
                    try {
                        res = yield this.octokit.users.getAuthenticated();
                    }
                    catch (err) {
                        this.authService.logoutUser();
                        return false;
                    }
                    this.ghUser = res.data;
                    return true;
                }
            }
            return false;
        });
    }
    getUserProjects() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.checkUser()) {
                const projects = yield this.octokit.projects.listForUser({ username: this.ghUser.login });
                this.allProjects = projects.data;
                return projects.data;
            }
            else {
                throw new Error('User not logged in');
            }
        });
    }
    getProject(projectId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.checkUser()) {
                return (this.allProjects.find(data => data.id === projectId) ||
                    (yield this.octokit.projects.get({ project_id: projectId })).data);
            }
            else {
                throw new Error('User not logged in');
            }
        });
    }
    getProjectColumns(projectId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.checkUser()) {
                return (yield this.octokit.projects.listColumns({
                    project_id: projectId,
                    headers: {
                        'If-None-Match': '',
                    },
                })).data;
            }
            else {
                throw new Error('User not logged in');
            }
        });
    }
    getColumnCards(columnId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.checkUser()) {
                return (yield this.octokit.projects.listCards({
                    column_id: columnId,
                    headers: {
                        'If-None-Match': '',
                    },
                })).data;
            }
            else {
                throw new Error('User not logged in');
            }
        });
    }
    moveCard(cardId, pos) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.checkUser()) {
                yield this.octokit.projects.moveCard({ card_id: cardId, position: pos });
            }
            else {
                throw new Error('User not logged in');
            }
        });
    }
    saveCard(cardId, note) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.checkUser()) {
                yield this.octokit.projects.updateCard({ card_id: cardId, note });
            }
            else {
                throw new Error('User not logged in');
            }
        });
    }
    deleteCard(cardId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.checkUser()) {
                yield this.octokit.projects.deleteCard({ card_id: cardId });
            }
            else {
                throw new Error('User not logged in');
            }
        });
    }
    createColumn(projectId, name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.checkUser()) {
                yield this.octokit.projects.createColumn({ project_id: projectId, name });
            }
        });
    }
    createCard(columnId, note) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.checkUser()) {
                yield this.octokit.projects.createCard({ column_id: columnId, note });
            }
            else {
                throw new Error('User not logged in');
            }
        });
    }
    deleteColumn(columnId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.checkUser()) {
                yield this.octokit.projects.deleteColumn({ column_id: columnId });
            }
            else {
                throw new Error('User not logged in');
            }
        });
    }
}
GithubService.ɵfac = function GithubService_Factory(t) { return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
GithubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GithubService, factory: GithubService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GithubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/project.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/project.service.ts ***!
  \**************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github.service */ "./src/app/core/services/github.service.ts");




class ProjectService {
    constructor(githubService) {
        this.githubService = githubService;
        this.projectChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    setCurrentProject(projectId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.currentProject = yield this.githubService.getProject(projectId);
            this.currentProject.columns = yield this.githubService.getProjectColumns(projectId);
            this.projectChanged.emit(this.currentProject);
            for (const col of this.currentProject.columns) {
                col.cards = yield this.githubService.getColumnCards(col.id);
            }
        });
    }
    refreshProjectColumns() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.currentProject.columns = yield this.githubService.getProjectColumns(this.currentProject.id);
            for (const col of this.currentProject.columns) {
                col.cards = yield this.githubService.getColumnCards(col.id);
            }
        });
    }
    refreshProjectCards() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (const col of this.currentProject.columns) {
                col.cards = yield this.githubService.getColumnCards(col.id);
            }
        });
    }
    refreshColumnCards(col) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.currentProject.columns[col].cards = yield this.githubService.getColumnCards(this.currentProject.columns[col].id);
        });
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/utils/markdown-parse.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/core/utils/markdown-parse.pipe.ts ***!
  \***************************************************/
/*! exports provided: MarkdownParsePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownParsePipe", function() { return MarkdownParsePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);



class MarkdownParsePipe {
    transform(value, ...args) {
        return marked__WEBPACK_IMPORTED_MODULE_1___default()(value);
    }
}
MarkdownParsePipe.ɵfac = function MarkdownParsePipe_Factory(t) { return new (t || MarkdownParsePipe)(); };
MarkdownParsePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "markdownParse", type: MarkdownParsePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkdownParsePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'markdownParse',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/utils/safe-html.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/core/utils/safe-html.pipe.ts ***!
  \**********************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeHtml',
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/pro-jectsapp/pro-jects/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map