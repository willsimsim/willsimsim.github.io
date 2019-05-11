(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-displaymovie></app-displaymovie>\n<app-intheaters></app-intheaters>\n<app-toprated></app-toprated>\n<app-comingsoon></app-comingsoon>\n<app-footer></app-footer>\n\n<!-- <app-header></app-header>\n<app-seriespage></app-seriespage> -->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Desta Movies';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _displaymovie_displaymovie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displaymovie/displaymovie.component */ "./src/app/displaymovie/displaymovie.component.ts");
/* harmony import */ var _intheaters_intheaters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intheaters/intheaters.component */ "./src/app/intheaters/intheaters.component.ts");
/* harmony import */ var _toprated_toprated_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toprated/toprated.component */ "./src/app/toprated/toprated.component.ts");
/* harmony import */ var _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comingsoon/comingsoon.component */ "./src/app/comingsoon/comingsoon.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _seriespage_seriespage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./seriespage/seriespage.component */ "./src/app/seriespage/seriespage.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _displaymovie_displaymovie_component__WEBPACK_IMPORTED_MODULE_6__["DisplaymovieComponent"],
                _intheaters_intheaters_component__WEBPACK_IMPORTED_MODULE_7__["IntheatersComponent"],
                _toprated_toprated_component__WEBPACK_IMPORTED_MODULE_8__["TopratedComponent"],
                _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_9__["ComingsoonComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
                _seriespage_seriespage_component__WEBPACK_IMPORTED_MODULE_12__["SeriespageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Cards */\r\n.list {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 3.90625vw;\r\n  padding: 0 4.88281vw;\r\n  margin-top: 2%;\r\n  margin-bottom: 7%;\r\n  float:left;\r\n}\r\n.list__item {\r\n\ttransition: all .3s ease;\r\n\t-webkit-perspective: 1000px;\r\n\t        perspective: 1000px;\r\n\t-webkit-transform-style: preserve-3d;\r\n\t        transform-style: preserve-3d;\r\n  border-radius: 8px;\r\n}\r\n.list__item img {\r\n\twidth: 18.5vw;\r\n\theight: 27.3vw;\r\n  margin-right: 3.5vw;\r\n  margin-top: 2vw;\r\n\t-webkit-perspective: 1000px;\r\n\t        perspective: 1000px;\r\n\t-webkit-transform-style: preserve-3d;\r\n\t        transform-style: preserve-3d;\r\n  border-radius: 8px;\r\n}\r\n.list__item:hover {\r\n  -webkit-transform: scale(1.1) translateY(-5px);\r\n          transform: scale(1.1) translateY(-5px);\r\n  -webkit-filter: brightness(27%);\r\n}\r\n/* Overlay Text */\r\n.content {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  color: #fff;\r\n  font-weight: bold;\r\n  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;\r\n  margin-left: -5%;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nh3 {\r\n  white-space: nowrap;\r\n  margin-bottom: 10%;\r\n  margin-top: 30%;\r\n  font-size: 1.3vw;\r\n  text-align: center;\r\n}\r\np {\r\n  font-size: 1.0vw;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWO0NBQ0MsYUFBYTtDQUNiLFdBQVc7Q0FDWCx3QkFBd0I7RUFDdkIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaO0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsMkJBQW1CO1NBQW5CLG1CQUFtQjtDQUNuQixvQ0FBNEI7U0FBNUIsNEJBQTRCO0VBQzNCLGtCQUFrQjtBQUNwQjtBQUVBO0NBQ0MsYUFBYTtDQUNiLGNBQWM7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQiwyQkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLG9DQUE0QjtTQUE1Qiw0QkFBNEI7RUFDM0Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw4Q0FBc0M7VUFBdEMsc0NBQXNDO0VBQ3RDLCtCQUErQjtBQUNqQztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpRUFBaUU7RUFDakUsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQix5QkFBeUI7S0FFdEIsc0JBQXNCO01BQ3JCLHFCQUFxQjtVQUNqQixpQkFBaUI7QUFDM0I7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2FyZHMgKi9cclxuLmxpc3Qge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMy45MDYyNXZ3O1xyXG4gIHBhZGRpbmc6IDAgNC44ODI4MXZ3O1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDclO1xyXG4gIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi5saXN0X19pdGVtIHtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcblx0cGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmxpc3RfX2l0ZW0gaW1nIHtcclxuXHR3aWR0aDogMTguNXZ3O1xyXG5cdGhlaWdodDogMjcuM3Z3O1xyXG4gIG1hcmdpbi1yaWdodDogMy41dnc7XHJcbiAgbWFyZ2luLXRvcDogMnZ3O1xyXG5cdHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcblx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5saXN0X19pdGVtOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgdHJhbnNsYXRlWSgtNXB4KTtcclxuICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcygyNyUpO1xyXG59XHJcblxyXG4vKiBPdmVybGF5IFRleHQgKi9cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6IC0ycHggMCBibGFjaywgMCAycHggYmxhY2ssIDJweCAwIGJsYWNrLCAwIC0ycHggYmxhY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IC01JTtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogMzAlO1xyXG4gIGZvbnQtc2l6ZTogMS4zdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDEuMHZ3O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\n  <div class=\"list__item\">\n    <img src=\"https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg\">\n    <div class=\"content\">\n      <h3>John Wick 3</h3>\n      <p>Super-Assassin John Wick is on the run after killing a member of\n          the international assassin's guild, and with a $14 million price tag\n          on his head - he is the target of hit men and women everywhere.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/comingsoon/comingsoon.component.css":
/*!*****************************************************!*\
  !*** ./src/app/comingsoon/comingsoon.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Heading */\r\n.container {\r\n  padding-top: 4%;\r\n  margin-left: 4.5%;\r\n}\r\n.heading {\r\n\tfont-size: 2.34375vw;\r\n\tline-height: 1.5;\r\n\tmargin-bottom: 0.48828vw;\r\n  z-index: -1;\r\n  color: white;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nhr{\r\n  background-color: white;\r\n}\r\n/* Cards */\r\n.list {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 3.90625vw;\r\n  padding: 0 4.88281vw;\r\n  margin-top: 2%;\r\n  margin-bottom: 7%;\r\n}\r\n.list__item {\r\n\ttransition: all .3s ease;\r\n\t-webkit-perspective: 1000px;\r\n\t        perspective: 1000px;\r\n\t-webkit-transform-style: preserve-3d;\r\n\t        transform-style: preserve-3d;\r\n  border-radius: 8px;\r\n}\r\n.list__item img {\r\n\twidth: 18.5vw;\r\n\theight: 27.3vw;\r\n  margin-right: 3.5vw;\r\n  margin-top: 2vw;\r\n\t-webkit-perspective: 1000px;\r\n\t        perspective: 1000px;\r\n\t-webkit-transform-style: preserve-3d;\r\n\t        transform-style: preserve-3d;\r\n  border-radius: 8px;\r\n}\r\n.list__item:hover {\r\n  -webkit-transform: scale(1.1) translateY(-5px);\r\n          transform: scale(1.1) translateY(-5px);\r\n  -webkit-filter: brightness(27%);\r\n}\r\n/* Overlay Text */\r\n.content {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  color: #fff;\r\n  font-weight: bold;\r\n  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;\r\n  margin-left: -5%;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nh3 {\r\n  white-space: nowrap;\r\n  font-size: 1.3vw;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29taW5nc29vbi9jb21pbmdzb29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTtBQUNaO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQix3QkFBd0I7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IseUJBQXlCO0tBRXRCLHNCQUFzQjtNQUNyQixxQkFBcUI7VUFDakIsaUJBQWlCO0FBQzNCO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFFQSxVQUFVO0FBQ1Y7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLHdCQUF3QjtFQUN2QixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLDJCQUFtQjtTQUFuQixtQkFBbUI7Q0FDbkIsb0NBQTRCO1NBQTVCLDRCQUE0QjtFQUMzQixrQkFBa0I7QUFDcEI7QUFFQTtDQUNDLGFBQWE7Q0FDYixjQUFjO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEIsMkJBQW1CO1NBQW5CLG1CQUFtQjtDQUNuQixvQ0FBNEI7U0FBNUIsNEJBQTRCO0VBQzNCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsOENBQXNDO1VBQXRDLHNDQUFzQztFQUN0QywrQkFBK0I7QUFDakM7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUVBQWlFO0VBQ2pFLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IseUJBQXlCO0tBRXRCLHNCQUFzQjtNQUNyQixxQkFBcUI7VUFDakIsaUJBQWlCO0FBQzNCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbWluZ3Nvb24vY29taW5nc29vbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVhZGluZyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDQuNSU7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuXHRmb250LXNpemU6IDIuMzQzNzV2dztcclxuXHRsaW5lLWhlaWdodDogMS41O1xyXG5cdG1hcmdpbi1ib3R0b206IDAuNDg4Mjh2dztcclxuICB6LWluZGV4OiAtMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuaHJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIENhcmRzICovXHJcbi5saXN0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206IDMuOTA2MjV2dztcclxuICBwYWRkaW5nOiAwIDQuODgyODF2dztcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBtYXJnaW4tYm90dG9tOiA3JTtcclxufVxyXG5cclxuLmxpc3RfX2l0ZW0ge1xyXG5cdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuXHRwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG5cdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ubGlzdF9faXRlbSBpbWcge1xyXG5cdHdpZHRoOiAxOC41dnc7XHJcblx0aGVpZ2h0OiAyNy4zdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzLjV2dztcclxuICBtYXJnaW4tdG9wOiAydnc7XHJcblx0cGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmxpc3RfX2l0ZW06aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKSB0cmFuc2xhdGVZKC01cHgpO1xyXG4gIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDI3JSk7XHJcbn1cclxuXHJcbi8qIE92ZXJsYXkgVGV4dCAqL1xyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXNoYWRvdzogLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaztcclxuICBtYXJnaW4tbGVmdDogLTUlO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmgzIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogMS4zdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/comingsoon/comingsoon.component.html":
/*!******************************************************!*\
  !*** ./src/app/comingsoon/comingsoon.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"heading\">Coming Soon</div><hr>\n  </div>\n  <div class=\"list\">\n    <div class=\"list__item\">\n      <img src=\"https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg\">\n      <div class=\"content\">\n        <h3>John Wick 3</h3>\n      </div>\n    </div>\n    <div class=\"list__item\">\n      <img src=\"https://m.media-amazon.com/images/M/MV5BMDhiNzUzYTItMWFjYS00ZDUwLWIxNTItMTlmMzAxZjNmMTJkXkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_SX300.jpg\">\n      <div class=\"content\">\n        <h3>The Sun Is Also a Star</h3>\n      </div>\n    </div>\n    <div class=\"list__item\">\n      <img src=\"https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_SX300.jpg\">\n      <div class=\"content\">\n        <h3>Aladdin</h3>\n      </div>\n    </div>\n    <div class=\"list__item\">\n        <img src=\"https://m.media-amazon.com/images/M/MV5BNTljMzM4Y2UtZGVhMi00MTZjLWFlNDgtZjE3OGZkZTdjZTJjXkEyXkFqcGdeQXVyODg5ODM0Mjk@._V1_SX300.jpg\">\n        <div class=\"content\">\n          <h3>The Third Wife</h3>\n        </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/comingsoon/comingsoon.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comingsoon/comingsoon.component.ts ***!
  \****************************************************/
/*! exports provided: ComingsoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingsoonComponent", function() { return ComingsoonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComingsoonComponent = /** @class */ (function () {
    function ComingsoonComponent() {
    }
    ComingsoonComponent.prototype.ngOnInit = function () {
    };
    ComingsoonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comingsoon',
            template: __webpack_require__(/*! ./comingsoon.component.html */ "./src/app/comingsoon/comingsoon.component.html"),
            styles: [__webpack_require__(/*! ./comingsoon.component.css */ "./src/app/comingsoon/comingsoon.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComingsoonComponent);
    return ComingsoonComponent;
}());



/***/ }),

/***/ "./src/app/displaymovie/displaymovie.component.css":
/*!*********************************************************!*\
  !*** ./src/app/displaymovie/displaymovie.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /* Carousel */\r\n  .carousel-inner img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n  .carousel-item {\r\n  height: 92vh;\r\n}\r\n  /* Play Button */\r\n  .playBtn {\r\n  position:absolute;\r\n  top:50%;\r\n  left:50%;\r\n  margin-left:-5vw;\r\n  margin-top:-1.5vw;\r\n  width:10vw;\r\n  height:3vw;\r\n  text-align:center;\r\n  line-height:3vw;\r\n  font-size:1vw;\r\n  font-weight:bolder;\r\n  text-transform:uppercase;\r\n  color:white;\r\n  background:#FF0000;\r\n  border-radius:20px;\r\n  cursor:pointer;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n  .playBtn:hover {\r\n  background:#370000;\r\n}\r\n  .playBtn span {\r\n  width:100%;\r\n  height:100%;\r\n  background:blue;\r\n  position:absolute;\r\n  display:block;\r\n  top:0;\r\n  left:0;\r\n  opacity:0;\r\n}\r\n  .playBtn iframe {\r\n position:absolute;\r\n top:0;\r\n left:0;\r\n height:0px !important;\r\n width:0px !important;\r\n}\r\n  @media (max-width:800px) and (min-width:100px) {\r\n  .playBtn {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    margin-left:-12vw;\r\n    margin-top:-5.5vw;\r\n    width:26%;\r\n    height:6%;\r\n    text-align:center;\r\n    line-height:360%;\r\n    font-size:75%;\r\n    font-weight:bolder;\r\n    text-transform:uppercase;\r\n    color:white;\r\n    background:#FF0000;\r\n    border-radius:20px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheW1vdmllL2Rpc3BsYXltb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLGFBQWE7RUFDYjtJQUNFLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0VBRUE7RUFDRSxZQUFZO0FBQ2Q7RUFFQSxnQkFBZ0I7RUFDaEI7RUFDRSxpQkFBaUI7RUFDakIsT0FBTztFQUNQLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLHlCQUF5QjtLQUV0QixzQkFBc0I7TUFDckIscUJBQXFCO1VBQ2pCLGlCQUFpQjtBQUMzQjtFQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0VBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLEtBQUs7RUFDTCxNQUFNO0VBQ04sU0FBUztBQUNYO0VBR0E7Q0FDQyxpQkFBaUI7Q0FDakIsS0FBSztDQUNMLE1BQU07Q0FDTixxQkFBcUI7Q0FDckIsb0JBQW9CO0FBQ3JCO0VBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsU0FBUztJQUNULFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kaXNwbGF5bW92aWUvZGlzcGxheW1vdmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC8qIENhcm91c2VsICovXHJcbiAgLmNhcm91c2VsLWlubmVyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIGhlaWdodDogOTJ2aDtcclxufVxyXG5cclxuLyogUGxheSBCdXR0b24gKi9cclxuLnBsYXlCdG4ge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDo1MCU7XHJcbiAgbGVmdDo1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6LTV2dztcclxuICBtYXJnaW4tdG9wOi0xLjV2dztcclxuICB3aWR0aDoxMHZ3O1xyXG4gIGhlaWdodDozdnc7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6M3Z3O1xyXG4gIGZvbnQtc2l6ZToxdnc7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiNGRjAwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5wbGF5QnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiMzNzAwMDA7XHJcbn1cclxuXHJcbi5wbGF5QnRuIHNwYW4ge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYmFja2dyb3VuZDpibHVlO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIG9wYWNpdHk6MDtcclxufVxyXG5cclxuXHJcbi5wbGF5QnRuIGlmcmFtZSB7XHJcbiBwb3NpdGlvbjphYnNvbHV0ZTtcclxuIHRvcDowO1xyXG4gbGVmdDowO1xyXG4gaGVpZ2h0OjBweCAhaW1wb3J0YW50O1xyXG4gd2lkdGg6MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjgwMHB4KSBhbmQgKG1pbi13aWR0aDoxMDBweCkge1xyXG4gIC5wbGF5QnRuIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6LTEydnc7XHJcbiAgICBtYXJnaW4tdG9wOi01LjV2dztcclxuICAgIHdpZHRoOjI2JTtcclxuICAgIGhlaWdodDo2JTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6MzYwJTtcclxuICAgIGZvbnQtc2l6ZTo3NSU7XHJcbiAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6I0ZGMDAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/displaymovie/displaymovie.component.html":
/*!**********************************************************!*\
  !*** ./src/app/displaymovie/displaymovie.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"movies\" class=\"carousel slide\" data-ride=\"carousel\">\n\n    <!-- Indicators -->\n    <ul class=\"carousel-indicators\">\n      <li data-target=\"#detective-pikachu\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#avengers-endgame\" data-slide-to=\"1\"></li>\n      <li data-target=\"#us\" data-slide-to=\"2\"></li>\n    </ul>\n\n    <!-- The slideshow -->\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"https://www.legendary.com/wp-content/uploads/2018/11/POKEMON_DETECTIVE_PIKACHU_POSTER_Website_1600x900-with-TT-1.jpg\" alt=\"Detective Pikachu Poster\">\n        <div class=\"playBtn\">play trailer</div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"https://empirecinema.com.mt/wp-content/uploads/2019/03/Avengers-Endgame-2019-Desktop-Movie-Wallpapers-HD-4-1.jpg\" alt=\"Avengers: Endgame Poster\">\n        <div class=\"playBtn\">play trailer</div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"http://www.thepantheronline.com/site/wp-content/uploads/2019/04/Us-imdb.png\" alt=\"Us Poster\">\n        <div class=\"playBtn\">play trailer</div>\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"carousel-control-prev\" href=\"#movies\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#movies\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n  </div>\n"

/***/ }),

/***/ "./src/app/displaymovie/displaymovie.component.ts":
/*!********************************************************!*\
  !*** ./src/app/displaymovie/displaymovie.component.ts ***!
  \********************************************************/
/*! exports provided: DisplaymovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaymovieComponent", function() { return DisplaymovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DisplaymovieComponent = /** @class */ (function () {
    function DisplaymovieComponent() {
    }
    DisplaymovieComponent.prototype.ngOnInit = function () {
    };
    DisplaymovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-displaymovie',
            template: __webpack_require__(/*! ./displaymovie.component.html */ "./src/app/displaymovie/displaymovie.component.html"),
            styles: [__webpack_require__(/*! ./displaymovie.component.css */ "./src/app/displaymovie/displaymovie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DisplaymovieComponent);
    return DisplaymovieComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n  position:absolute;\r\n  width:100%;\r\n  height:90px;\r\n  background:#00A4BD;\r\n}\r\n\r\n.fafa {\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  color: white;\r\n  text-align: center;\r\n  padding-left: 1.8%;\r\n}\r\n\r\ni {\r\n  padding-left: 2%;\r\n  padding-top: 1.8%\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6OTBweDtcclxuICBiYWNrZ3JvdW5kOiMwMEE0QkQ7XHJcbn1cclxuXHJcbi5mYWZhIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjglO1xyXG59XHJcblxyXG5pIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIHBhZGRpbmctdG9wOiAxLjglXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"fafa\">\n      <a href=\"https://linkedin.com\" target=\"_blank\"><i class=\"fa fa-linkedin\" style=\"font-size:20px;color:white\"></i></a>\n      <a href=\"mailto:sfx@gmail.com\"><i class=\"fa fa-envelope\" style=\"font-size:20px;color:white\"></i></a>\n      <a href=\"tel:+49897644321\"><i class=\"fa fa-phone\" style=\"font-size:20px;color:white\"></i></a>\n    </div>\n    <p>Made by SFX</p>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n  background-color: #FDFEFF;\r\n}\r\n\r\n/* Logo */\r\n\r\n.navbar-brand{\r\n  margin-left: 1.5%;\r\n  color: #000F19;\r\n}\r\n\r\n/* Search Bar */\r\n\r\n.form-inline{\r\n  margin: auto;\r\n  width:55%;\r\n}\r\n\r\n.input-group{\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLFNBQVM7O0FBQ1Q7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQSxlQUFlOztBQUNmO0VBQ0UsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkVGRjtcclxufVxyXG5cclxuLyogTG9nbyAqL1xyXG4ubmF2YmFyLWJyYW5ke1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjUlO1xyXG4gIGNvbG9yOiAjMDAwRjE5O1xyXG59XHJcblxyXG4vKiBTZWFyY2ggQmFyICovXHJcbi5mb3JtLWlubGluZXtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6NTUlO1xyXG59XHJcbi5pbnB1dC1ncm91cHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\">\n  <a class=\"navbar-brand\" href=\"#\">My Movies</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <form class=\"form-inline my-2 my-lg-0\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n      </div>\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search for a movie title, e.g.- 'Aquaman'\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </div>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/intheaters/intheaters.component.css":
/*!*****************************************************!*\
  !*** ./src/app/intheaters/intheaters.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Heading */\r\n.container {\r\n  padding-top: 4%;\r\n  margin-left: 4.5%;\r\n}\r\n.heading {\r\n\tfont-size: 2.34375vw;\r\n\tline-height: 1.5;\r\n\tmargin-bottom: 0.48828vw;\r\n  z-index: -1;\r\n  color: white;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nhr{\r\n  background-color: white;\r\n}\r\n/* Cards */\r\n.list {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 3.90625vw;\r\n  padding: 0 4.88281vw;\r\n  margin-top: 2%;\r\n  margin-bottom: 0;\r\n}\r\n.list__item {\r\n\ttransition: all .3s ease;\r\n\t-webkit-perspective: 1000px;\r\n\t        perspective: 1000px;\r\n\t-webkit-transform-style: preserve-3d;\r\n\t        transform-style: preserve-3d;\r\n  border-radius: 8px;\r\n}\r\n.list__item img {\r\n\twidth: 18.5vw;\r\n\theight: 27.3vw;\r\n  margin-right: 3.5vw;\r\n  margin-top: 2vw;\r\n\t-webkit-perspective: 1000px;\r\n\t        perspective: 1000px;\r\n\t-webkit-transform-style: preserve-3d;\r\n\t        transform-style: preserve-3d;\r\n  border-radius: 8px;\r\n}\r\n.list__item:hover {\r\n  -webkit-transform: scale(1.1) translateY(-5px);\r\n          transform: scale(1.1) translateY(-5px);\r\n  -webkit-filter: brightness(27%);\r\n}\r\n/* Overlay Text */\r\n.content {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  color: #fff;\r\n  font-weight: bold;\r\n  font-size: 5px;\r\n  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;\r\n  margin-left: -5%;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nh3 {\r\n  white-space: nowrap;\r\n  font-size: 1.3vw;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50aGVhdGVycy9pbnRoZWF0ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTtBQUNaO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQix3QkFBd0I7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IseUJBQXlCO0tBRXRCLHNCQUFzQjtNQUNyQixxQkFBcUI7VUFDakIsaUJBQWlCO0FBQzNCO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFFQSxVQUFVO0FBQ1Y7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLHdCQUF3QjtFQUN2QixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLDJCQUFtQjtTQUFuQixtQkFBbUI7Q0FDbkIsb0NBQTRCO1NBQTVCLDRCQUE0QjtFQUMzQixrQkFBa0I7QUFDcEI7QUFFQTtDQUNDLGFBQWE7Q0FDYixjQUFjO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEIsMkJBQW1CO1NBQW5CLG1CQUFtQjtDQUNuQixvQ0FBNEI7U0FBNUIsNEJBQTRCO0VBQzNCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsOENBQXNDO1VBQXRDLHNDQUFzQztFQUN0QywrQkFBK0I7QUFDakM7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlFQUFpRTtFQUNqRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLHlCQUF5QjtLQUV0QixzQkFBc0I7TUFDckIscUJBQXFCO1VBQ2pCLGlCQUFpQjtBQUMzQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9pbnRoZWF0ZXJzL2ludGhlYXRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlYWRpbmcgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0LjUlO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcblx0Zm9udC1zaXplOiAyLjM0Mzc1dnc7XHJcblx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRtYXJnaW4tYm90dG9tOiAwLjQ4ODI4dnc7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmhye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBDYXJkcyAqL1xyXG4ubGlzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tYm90dG9tOiAzLjkwNjI1dnc7XHJcbiAgcGFkZGluZzogMCA0Ljg4Mjgxdnc7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmxpc3RfX2l0ZW0ge1xyXG5cdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuXHRwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG5cdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ubGlzdF9faXRlbSBpbWcge1xyXG5cdHdpZHRoOiAxOC41dnc7XHJcblx0aGVpZ2h0OiAyNy4zdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzLjV2dztcclxuICBtYXJnaW4tdG9wOiAydnc7XHJcblx0cGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmxpc3RfX2l0ZW06aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKSB0cmFuc2xhdGVZKC01cHgpO1xyXG4gIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDI3JSk7XHJcbn1cclxuXHJcbi8qIE92ZXJsYXkgVGV4dCAqL1xyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDVweDtcclxuICB0ZXh0LXNoYWRvdzogLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaztcclxuICBtYXJnaW4tbGVmdDogLTUlO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmgzIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogMS4zdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/intheaters/intheaters.component.html":
/*!******************************************************!*\
  !*** ./src/app/intheaters/intheaters.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"heading\">In Theaters</div><hr>\n</div>\n<div class=\"list\">\n  <div class=\"list__item\">\n    <img src=\"https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg\">\n    <div class=\"content\">\n      <h3>Pokémon Detective Pikachu</h3>\n    </div>\n  </div>\n  <div class=\"list__item\">\n    <img src=\"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg\">\n    <div class=\"content\">\n      <h3>Avengers: Endgame</h3>\n    </div>\n  </div>\n  <div class=\"list__item\">\n    <img src=\"https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg\">\n    <div class=\"content\">\n      <h3>Us</h3>\n    </div>\n  </div>\n  <div class=\"list__item\">\n      <img src=\"https://m.media-amazon.com/images/M/MV5BMTU3NzYxODgwNV5BMl5BanBnXkFtZTgwNjc5NjI5NjM@._V1_SX300.jpg\">\n      <div class=\"content\">\n        <h3>Sonic the Hedgehog</h3>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/intheaters/intheaters.component.ts":
/*!****************************************************!*\
  !*** ./src/app/intheaters/intheaters.component.ts ***!
  \****************************************************/
/*! exports provided: IntheatersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntheatersComponent", function() { return IntheatersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntheatersComponent = /** @class */ (function () {
    function IntheatersComponent() {
    }
    IntheatersComponent.prototype.ngOnInit = function () {
    };
    IntheatersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intheaters',
            template: __webpack_require__(/*! ./intheaters.component.html */ "./src/app/intheaters/intheaters.component.html"),
            styles: [__webpack_require__(/*! ./intheaters.component.css */ "./src/app/intheaters/intheaters.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntheatersComponent);
    return IntheatersComponent;
}());



/***/ }),

/***/ "./src/app/seriespage/seriespage.component.css":
/*!*****************************************************!*\
  !*** ./src/app/seriespage/seriespage.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n  line-height: 1.3;\r\n  letter-spacing: 0.04em;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  color: white;\r\n  background-color: #000F19;\r\n  box-sizing: border-box;\r\n  font-size: 0.75em;\r\n}\r\n@media (min-width: 53.57143em) {\r\n  html {\r\n    font-size: 1.4vw;\r\n  }\r\n}\r\n*, *:before, *:after {\r\n  box-sizing: inherit;\r\n}\r\nbody, h1, ul, p {\r\n  margin: 0;\r\n  color: white;\r\n}\r\n.box {\r\n  margin-top: 5%;\r\n  padding-left: 2%;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nul {\r\n  padding: 0;\r\n}\r\nli {\r\n  list-style-type: none;\r\n}\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n  vertical-align: top;\r\n}\r\n.o-button {\r\n  font-size: 0.75rem;\r\n  line-height: 1;\r\n  letter-spacing: 0.1em;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  padding: 0.5rem 1.125rem;\r\n  background-color: #e50914;\r\n  color: white;\r\n}\r\n.o-button--gray {\r\n  background-color: #646464;\r\n}\r\n.c-title {\r\n  font-weight: inherit;\r\n}\r\n.c-title__category {\r\n  font-size: 1.375rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.03em;\r\n  display: block;\r\n}\r\n.c-title__name {\r\n  font-size: 4rem;\r\n  line-height: 1;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.03em;\r\n}\r\n.l-header {\r\n  font-size: 16px;\r\n  padding: 0 2.5rem;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.l-header > * {\r\n  margin-top: 24px;\r\n}\r\n.l-header__logo {\r\n  width: 120px;\r\n  height: 33px;\r\n  fill: #e50914;\r\n}\r\n.l-header__browse {\r\n  color: #e50914;\r\n  font-weight: bold;\r\n  margin-right: auto;\r\n  margin-left: 40px;\r\n  padding-right: 40px;\r\n}\r\n.l-header__nav {\r\n  display: flex;\r\n}\r\n.l-header__nav > * + * {\r\n  margin-left: 32px;\r\n}\r\n.l-hero {\r\n  padding: 6rem 2.5rem 5rem;\r\n}\r\n.l-hero__text {\r\n  width: 40%;\r\n}\r\n.l-hero__subhl {\r\n  font-weight: bold;\r\n  margin-top: 1.25rem;\r\n  margin-bottom: 0.625rem;\r\n}\r\n.l-hero__buttons {\r\n  margin-top: 1.5rem;\r\n  display: flex;\r\n}\r\n.l-hero__buttons > * + * {\r\n  margin-left: 0.75rem;\r\n}\r\n.l-cards {\r\n  padding-left: 2.5rem;\r\n  margin-bottom: 3rem;\r\n  overflow: hidden;\r\n}\r\n.l-cards__title {\r\n  font-size: inherit;\r\n}\r\n.l-cards__list {\r\n  margin-top: 0.5rem;\r\n  display: flex;\r\n}\r\n.l-cards__item {\r\n  background-color: #646464;\r\n  height: 9rem;\r\n  flex: 0 0 16rem;\r\n}\r\n.l-cards__item + .l-cards__item {\r\n  margin-left: 0.25rem;\r\n}\r\n.tags {\r\n  position: relative;\r\n  margin-top: 5px;\r\n}\r\n.tags span {\r\n  padding: 2px 5px;\r\n  margin-right: 2px;\r\n  color: #fff;\r\n  display: inline-block;\r\n  border-radius: 4px;\r\n}\r\n.tags span.fantasy {\r\n  background: #7206f7;\r\n}\r\n.tags span.scifi {\r\n  background: #f70661;\r\n}\r\n/* Card */\r\n.list {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n  padding: 0 4.88281vw;\r\n  margin-top: -30%;\r\n  padding-left: 64%;\r\n}\r\n.list__item {\r\n\ttransition: all .3s ease;\r\n\t-webkit-perspective: 1000px;\r\n\t        perspective: 1000px;\r\n\t-webkit-transform-style: preserve-3d;\r\n\t        transform-style: preserve-3d;\r\n  border-radius: 8px;\r\n}\r\n.list__item img {\r\n\twidth: 18.5vw;\r\n\theight: 27.3vw;\r\n  margin-right: 3.5vw;\r\n  margin-top: 2vw;\r\n\t-webkit-perspective: 1000px;\r\n\t        perspective: 1000px;\r\n\t-webkit-transform-style: preserve-3d;\r\n\t        transform-style: preserve-3d;\r\n  border-radius: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VyaWVzcGFnZS9zZXJpZXNwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsMkRBQTJEO0VBQzNELFlBQVk7RUFDWix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQix5QkFBeUI7S0FFdEIsc0JBQXNCO01BQ3JCLHFCQUFxQjtVQUNqQixpQkFBaUI7QUFDM0I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBLFNBQVM7QUFDVDtDQUNDLGFBQWE7Q0FDYixXQUFXO0VBQ1Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QiwyQkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLG9DQUE0QjtTQUE1Qiw0QkFBNEI7RUFDM0Isa0JBQWtCO0FBQ3BCO0FBRUE7Q0FDQyxhQUFhO0NBQ2IsY0FBYztFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0NBQ2hCLDJCQUFtQjtTQUFuQixtQkFBbUI7Q0FDbkIsb0NBQTRCO1NBQTVCLDRCQUE0QjtFQUMzQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zZXJpZXNwYWdlL3Nlcmllc3BhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwRjE5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1zaXplOiAwLjc1ZW07XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDUzLjU3MTQzZW0pIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMS40dnc7XHJcbiAgfVxyXG59XHJcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcbmJvZHksIGgxLCB1bCwgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbnVsIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbmxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4uby1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS4xMjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MDkxNDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm8tYnV0dG9uLS1ncmF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ2NDY0O1xyXG59XHJcbi5jLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxufVxyXG4uYy10aXRsZV9fY2F0ZWdvcnkge1xyXG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jLXRpdGxlX19uYW1lIHtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG59XHJcbi5sLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDAgMi41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sLWhlYWRlciA+ICoge1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuLmwtaGVhZGVyX19sb2dvIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAzM3B4O1xyXG4gIGZpbGw6ICNlNTA5MTQ7XHJcbn1cclxuLmwtaGVhZGVyX19icm93c2Uge1xyXG4gIGNvbG9yOiAjZTUwOTE0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG59XHJcbi5sLWhlYWRlcl9fbmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5sLWhlYWRlcl9fbmF2ID4gKiArICoge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG59XHJcbi5sLWhlcm8ge1xyXG4gIHBhZGRpbmc6IDZyZW0gMi41cmVtIDVyZW07XHJcbn1cclxuLmwtaGVyb19fdGV4dCB7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG4ubC1oZXJvX19zdWJobCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcclxufVxyXG4ubC1oZXJvX19idXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubC1oZXJvX19idXR0b25zID4gKiArICoge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xyXG59XHJcbi5sLWNhcmRzIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmwtY2FyZHNfX3RpdGxlIHtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuLmwtY2FyZHNfX2xpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5sLWNhcmRzX19pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ2NDY0O1xyXG4gIGhlaWdodDogOXJlbTtcclxuICBmbGV4OiAwIDAgMTZyZW07XHJcbn1cclxuLmwtY2FyZHNfX2l0ZW0gKyAubC1jYXJkc19faXRlbSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XHJcbn1cclxuXHJcbi50YWdzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4udGFncyBzcGFuIHtcclxuICBwYWRkaW5nOiAycHggNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi50YWdzIHNwYW4uZmFudGFzeSB7XHJcbiAgYmFja2dyb3VuZDogIzcyMDZmNztcclxufVxyXG5cclxuLnRhZ3Mgc3Bhbi5zY2lmaSB7XHJcbiAgYmFja2dyb3VuZDogI2Y3MDY2MTtcclxufVxyXG5cclxuLyogQ2FyZCAqL1xyXG4ubGlzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDQuODgyODF2dztcclxuICBtYXJnaW4tdG9wOiAtMzAlO1xyXG4gIHBhZGRpbmctbGVmdDogNjQlO1xyXG59XHJcblxyXG4ubGlzdF9faXRlbSB7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG5cdHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcblx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5saXN0X19pdGVtIGltZyB7XHJcblx0d2lkdGg6IDE4LjV2dztcclxuXHRoZWlnaHQ6IDI3LjN2dztcclxuICBtYXJnaW4tcmlnaHQ6IDMuNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2dztcclxuXHRwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG5cdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/seriespage/seriespage.component.html":
/*!******************************************************!*\
  !*** ./src/app/seriespage/seriespage.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"l-hero\">\n    <div class=\"l-hero__text\">\n      <h1 class=\"c-title\">\n        <span class=\"c-title__category\"><strong>My</strong> Movies</span>\n        <span class=\"c-title__name\">John Wick 3</span>\n      </h1>\n      <div class=\"tags\">\n        <br><span class=\"fantasy\">Action</span><span class=\"fantasy\">Drama</span><span class=\"fantasy\">Adventure</span>\n        <br><br>\n      </div>\n      <p>Super-Assassin John Wick is on the run after killing a member of\n          the international assassin's guild, and with a $14 million price tag\n          on his head - he is the target of hit men and women everywhere.</p>\n\n      <div class=\"l-hero__buttons\">\n        <div class=\"o-button\">Play</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"list\">\n    <div class=\"list__item\">\n      <img src=\"https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg\">\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/seriespage/seriespage.component.ts":
/*!****************************************************!*\
  !*** ./src/app/seriespage/seriespage.component.ts ***!
  \****************************************************/
/*! exports provided: SeriespageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriespageComponent", function() { return SeriespageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SeriespageComponent = /** @class */ (function () {
    function SeriespageComponent() {
    }
    SeriespageComponent.prototype.ngOnInit = function () {
    };
    SeriespageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seriespage',
            template: __webpack_require__(/*! ./seriespage.component.html */ "./src/app/seriespage/seriespage.component.html"),
            styles: [__webpack_require__(/*! ./seriespage.component.css */ "./src/app/seriespage/seriespage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SeriespageComponent);
    return SeriespageComponent;
}());



/***/ }),

/***/ "./src/app/toprated/toprated.component.css":
/*!*************************************************!*\
  !*** ./src/app/toprated/toprated.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Heading */\r\n.container {\r\n  padding-top: 4%;\r\n  margin-left: 4.5%;\r\n}\r\n.heading {\r\n\tfont-size: 2.34375vw;\r\n\tline-height: 1.5;\r\n\tmargin-bottom: 0.48828vw;\r\n  z-index: -1;\r\n  color: white;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nhr{\r\n  background-color: white;\r\n}\r\n/* Cards */\r\n.list {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 3.90625vw;\r\n  padding: 0 4.88281vw;\r\n  margin-top: 2%;\r\n  margin-bottom: 0;\r\n}\r\n.list__item {\r\n\ttransition: all .3s ease;\r\n\t-webkit-perspective: 1000px;\r\n\t        perspective: 1000px;\r\n\t-webkit-transform-style: preserve-3d;\r\n\t        transform-style: preserve-3d;\r\n  border-radius: 8px;\r\n}\r\n.list__item img {\r\n\twidth: 18.5vw;\r\n\theight: 27.3vw;\r\n  margin-right: 3.5vw;\r\n  margin-top: 2vw;\r\n\t-webkit-perspective: 1000px;\r\n\t        perspective: 1000px;\r\n\t-webkit-transform-style: preserve-3d;\r\n\t        transform-style: preserve-3d;\r\n  border-radius: 8px;\r\n}\r\n.list__item:hover {\r\n  -webkit-transform: scale(1.1) translateY(-5px);\r\n          transform: scale(1.1) translateY(-5px);\r\n  -webkit-filter: brightness(27%);\r\n}\r\n/* Overlay Text */\r\n.content {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  color: #fff;\r\n  font-weight: bold;\r\n  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;\r\n  margin-left: -5%;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nh3 {\r\n  white-space: nowrap;\r\n  font-size: 1.3vw;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wcmF0ZWQvdG9wcmF0ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZO0FBQ1o7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQix5QkFBeUI7S0FFdEIsc0JBQXNCO01BQ3JCLHFCQUFxQjtVQUNqQixpQkFBaUI7QUFDM0I7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBLFVBQVU7QUFDVjtDQUNDLGFBQWE7Q0FDYixXQUFXO0NBQ1gsd0JBQXdCO0VBQ3ZCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsMkJBQW1CO1NBQW5CLG1CQUFtQjtDQUNuQixvQ0FBNEI7U0FBNUIsNEJBQTRCO0VBQzNCLGtCQUFrQjtBQUNwQjtBQUVBO0NBQ0MsYUFBYTtDQUNiLGNBQWM7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQiwyQkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLG9DQUE0QjtTQUE1Qiw0QkFBNEI7RUFDM0Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw4Q0FBc0M7VUFBdEMsc0NBQXNDO0VBQ3RDLCtCQUErQjtBQUNqQztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpRUFBaUU7RUFDakUsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQix5QkFBeUI7S0FFdEIsc0JBQXNCO01BQ3JCLHFCQUFxQjtVQUNqQixpQkFBaUI7QUFDM0I7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdG9wcmF0ZWQvdG9wcmF0ZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlYWRpbmcgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0LjUlO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcblx0Zm9udC1zaXplOiAyLjM0Mzc1dnc7XHJcblx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRtYXJnaW4tYm90dG9tOiAwLjQ4ODI4dnc7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmhye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBDYXJkcyAqL1xyXG4ubGlzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tYm90dG9tOiAzLjkwNjI1dnc7XHJcbiAgcGFkZGluZzogMCA0Ljg4Mjgxdnc7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmxpc3RfX2l0ZW0ge1xyXG5cdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuXHRwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG5cdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ubGlzdF9faXRlbSBpbWcge1xyXG5cdHdpZHRoOiAxOC41dnc7XHJcblx0aGVpZ2h0OiAyNy4zdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzLjV2dztcclxuICBtYXJnaW4tdG9wOiAydnc7XHJcblx0cGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmxpc3RfX2l0ZW06aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKSB0cmFuc2xhdGVZKC01cHgpO1xyXG4gIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDI3JSk7XHJcbn1cclxuXHJcbi8qIE92ZXJsYXkgVGV4dCAqL1xyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXNoYWRvdzogLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaztcclxuICBtYXJnaW4tbGVmdDogLTUlO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmgzIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogMS4zdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/toprated/toprated.component.html":
/*!**************************************************!*\
  !*** ./src/app/toprated/toprated.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"heading\">Top Rated Movies</div><hr>\n  </div>\n  <div class=\"list\">\n    <div class=\"list__item\">\n      <img src=\"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg\">\n      <div class=\"content\">\n        <h3>The Shawshank Redemption</h3>\n      </div>\n    </div>\n    <div class=\"list__item\">\n      <img src=\"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg\">\n      <div class=\"content\">\n        <h3>The Godfather</h3>\n      </div>\n    </div>\n    <div class=\"list__item\">\n      <img src=\"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg\">\n      <div class=\"content\">\n        <h3>The Godfather: Part II</h3>\n      </div>\n    </div>\n    <div class=\"list__item\">\n        <img src=\"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg\">\n        <div class=\"content\">\n          <h3>The Dark Knight</h3>\n        </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/toprated/toprated.component.ts":
/*!************************************************!*\
  !*** ./src/app/toprated/toprated.component.ts ***!
  \************************************************/
/*! exports provided: TopratedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopratedComponent", function() { return TopratedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopratedComponent = /** @class */ (function () {
    function TopratedComponent() {
    }
    TopratedComponent.prototype.ngOnInit = function () {
    };
    TopratedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toprated',
            template: __webpack_require__(/*! ./toprated.component.html */ "./src/app/toprated/toprated.component.html"),
            styles: [__webpack_require__(/*! ./toprated.component.css */ "./src/app/toprated/toprated.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopratedComponent);
    return TopratedComponent;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lior\mymovie\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map