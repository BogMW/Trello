webpackJsonp([1,4],{

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 123;


/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(140);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(userSVC) {
        this.userSVC = userSVC;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSVC.getCurr();
        setTimeout(function () {
            _this.loggedInUser = _this.userSVC.loggedInUser;
        }, 500);
    };
    AppComponent.prototype.ngOnChanges = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(229),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_list_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error_error_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_edit_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    // {
    //   path: 'Trello',
    //   children: [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */] },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__["a" /* RegistrationComponent */] }
    //   ]
    // }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__edit_edit_component__["a" /* EditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["c" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["d" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["e" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["f" /* MdInputModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditComponent = (function () {
    function EditComponent() {
        this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    EditComponent.prototype.saveCard = function (text) {
        this.onSave.emit(text);
        this.closeCard();
    };
    EditComponent.prototype.closeCard = function () {
        this.onClose.emit(false);
    };
    EditComponent.prototype.ngOnInit = function () {
    };
    return EditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], EditComponent.prototype, "cardToShow", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], EditComponent.prototype, "onSave", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], EditComponent.prototype, "onClose", void 0);
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-edit',
        template: __webpack_require__(230),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [])
], EditComponent);

//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__(231),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(userSVC, router) {
        this.userSVC = userSVC;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.loggedInUser = user;
            }
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.userSVC.logout();
        this.loggedInUser = null;
        this.router.navigate(['/login']);
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "loggedInUser", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(232),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = (function () {
    function ListComponent(userSVC, router) {
        this.userSVC = userSVC;
        this.router = router;
        this.formVisibility = false;
        this.showButtons = false;
        this.outArr = [];
        this.showPost = false;
    }
    ListComponent.prototype.showButtonsToggle = function (valueToSet, index) {
        this.showButtons = valueToSet;
        this.buttonsIndex = index;
    };
    ListComponent.prototype.toggleForm = function (list) {
        this.formVisibility = !this.formVisibility;
        this.currList = list;
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref().child(user.uid).on('value', function (snap) {
                    if (snap.val()) {
                        _this.todos = snap.val();
                        _this.outArr = [];
                        for (var key in _this.todos) {
                            _this.outArr.push({
                                key: key,
                                listKeys: _this.todos[key].list ? Object.keys(_this.todos[key].list) : [],
                                list: _this.todos[key]
                            });
                        }
                    }
                    else {
                        _this.todos = [];
                        _this.outArr = [];
                    }
                });
            }
            else {
                _this.router.navigate(['login/']);
            }
        });
    };
    ListComponent.prototype.addOne = function (list, text) {
        this.userSVC.addOne(list, text);
        this.textToAdd = '';
        this.formVisibility = !this.formVisibility;
    };
    ListComponent.prototype.deleteCard = function (list, index) {
        this.userSVC.deleteOne(list, index);
    };
    ListComponent.prototype.saveCard = function (list, index, text) {
        this.userSVC.saveOne(list, index, text);
    };
    ListComponent.prototype.showDetailed = function (list, key, cardToShow) {
        this.detailedPost = {
            list: list,
            key: key,
            data: cardToShow
        };
        this.showPost = !this.showPost;
        this.detailedIndex = cardToShow;
    };
    ListComponent.prototype.closeCard = function (close) {
        this.showPost = close;
    };
    ListComponent.prototype.newList = function (name) {
        this.userSVC.newList(name);
        this.newListName = '';
    };
    ListComponent.prototype.deleteList = function (list) {
        if (confirm('Are you sure? You can not revert changes after that.')) {
            this.userSVC.deleteList(list);
        }
        ;
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__(233),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ListComponent);

var _a, _b;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(userSVC, router) {
        this.userSVC = userSVC;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        this.userSVC.login(this.email, this.password1);
    };
    LoginComponent.prototype.loginFb = function () {
        this.userSVC.setProvider('Facebook');
    };
    LoginComponent.prototype.loginGo = function () {
        this.userSVC.setProvider('Google');
    };
    LoginComponent.prototype.check = function () {
        alert('Welcome ' + this.userSVC.getCurr().email);
    };
    LoginComponent.prototype.cancel = function () {
        this.router.navigate(['']);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(234),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = (function () {
    function RegistrationComponent(userSVC, router) {
        this.userSVC = userSVC;
        this.router = router;
        this.passwordFail = false;
    }
    RegistrationComponent.prototype.signUp = function () {
        if (this.password1 != this.password2) {
            this.passwordFail = true;
        }
        else {
            this.passwordFail = false;
            this.userSVC.register(this.email, this.password1);
        }
    };
    RegistrationComponent.prototype.cancel = function () {
        this.router.navigate(['/login']);
    };
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__(235),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegistrationComponent);

var _a, _b;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999; }\n\n.wrapper {\n  background-color: #EDEFF0;\n  width: 640px;\n  padding: 15px;\n  border-radius: 5px;\n  margin: 100px auto;\n  position: relative; }\n\ntextarea {\n  resize: none;\n  font-size: 20px;\n  border-radius: 5px; }\n\n.btn-cancel {\n  color: #ffffff;\n  background-image: linear-gradient(to bottom, #d9534f 0, #c12e2a 100%); }\n\n.btn-sign {\n  color: #ffffff;\n  background-image: linear-gradient(to bottom, #5cb85c 0, #419641 100%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".userPhoto {\n  float: left;\n  border-radius: 25px;\n  margin: 5px;\n  width: 50px;\n  height: 50px; }\n\n.btn-cancel {\n  color: #ffffff;\n  background-image: linear-gradient(to bottom, #d9534f 0, #c12e2a 100%); }\n\n.btn-sign {\n  color: #ffffff;\n  background-image: linear-gradient(to bottom, #5cb85c 0, #419641 100%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".flex-container {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n.wrapper {\n  display: inline-block;\n  width: 270px;\n  background: #E2E4E6;\n  border-radius: 3px;\n  box-sizing: border-box;\n  padding: 5px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  vertical-align: top; }\n  .wrapper h4 div {\n    display: block;\n    float: right;\n    cursor: pointer; }\n\n.single-container {\n  background-color: #fcfcfc;\n  width: 100%;\n  display: block;\n  margin-bottom: 5px;\n  padding: 10px;\n  position: relative;\n  z-index: 999; }\n\np {\n  padding: 5px;\n  margin-bottom: 0;\n  font-size: 20px; }\n\n.addPost {\n  width: 100%; }\n\n.close {\n  float: none;\n  display: inline-block; }\n\ntextarea {\n  border: none;\n  width: 100%;\n  outline: none;\n  font-size: 16px;\n  min-height: 40px;\n  resize: vertical;\n  overflow: hidden; }\n\n.icons {\n  font-size: 16px;\n  display: inline-block;\n  cursor: pointer; }\n\n.icons:hover {\n  color: #666666; }\n\n.buttons {\n  position: absolute;\n  right: 10px; }\n\n.newList {\n  display: inline-block;\n  vertical-align: top; }\n  .newList input {\n    border: 0;\n    padding: 5px;\n    border-radius: 5px;\n    background: rgba(255, 255, 255, 0.4); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".container {\n  text-align: center; }\n\nform {\n  padding-bottom: 30px; }\n\n.social-container {\n  width: 250px;\n  padding: 0 auto;\n  margin: 15px auto;\n  border-top: 2px dotted #fff; }\n\n.btn {\n  background-color: #8E8E8E;\n  border: 0;\n  border-radius: 3px;\n  color: #FFF;\n  cursor: pointer;\n  box-shadow: 2px 2px 2px #111;\n  width: 200px;\n  height: 40px;\n  text-align: left;\n  position: relative;\n  padding: 0;\n  margin: 10px 0; }\n\n.btn span {\n  font-size: 16px;\n  line-height: 40px; }\n\n.btn:active {\n  top: 1px;\n  box-shadow: 1px 1px 2px #000; }\n\n.btn i {\n  margin-right: 10px; }\n\n.facebook {\n  background-color: #3B5998; }\n\n.facebook i {\n  float: left;\n  width: 44px;\n  height: 40px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAN1JREFUeNpi/P//P8NQAoyjDh518KiDRx086uBh62AtIOZE4r8A4qcUmwpyMJWxKxA//I8J2qlhPguVQ9UMiLcAMRutoo2Jyub10tKxtEjDb4FYCIn/C4jXA/FHIN4BZQ8qB38AYn4k/kQgLhjMSQIdfB/saXhIlMMGQDwHic2MJHcBiE8h8ZsoLYup4WAbID5MhLq/QMxLaTKhZ5K4SY00TU8HX6CKKVSulh/SojpGxkOulBh18KiDRx086uDRxg9eoIvW46BOx3O0mz/q4FEHjzp41MGjDiYXAAQYAJmVcB6iaE2HAAAAAElFTkSuQmCC\") no-repeat center center; }\n\n.twitter {\n  background-color: #1CB5E8; }\n\n.twitter i {\n  float: left;\n  width: 44px;\n  height: 40px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAi5JREFUeNrs2M1LVFEYx3GvDoWvEKSMhhqBSrhQjCwXRuDKjbVoIYgQbVy0CXduWgT+BS5cSgUJvdmmVb4giIHRSpTEUjcGLnwtDUy7fQ88wnVQ5zlzzyyE88AHFY7n/uaZc+85M0EYhjnnqXJzzln5wD6wD+wD+8DWdRV9+IxFfMRDFETGFKFBNZvZ6ZTuotFivHELX/EvPF4HeIU6tGEEzzRzai9chHG5eJXyf2qwEJ5dO/JzCmWaebVLogQVaMJ7NKcZn4cnqE0zrhjbWECvyzUcSAhTN/ABj3HhlPGluK+c26zlLqy5XMMlGE15O826nEYnLiOIjK89Yd2eVht4oL0vEsou7OAN2lK63iLm8Akz+IFL+HvGOxCtbxjXPnISFuNe4yYeSdho1QtTm/gdWUKaynP9HE5iQH5fTzPWdLfSIsRP7Lru8B6uy1Pi0PHG8l3md9rhDby0ffs09zzms7U1v8A7x91dli07K4FNl3vQj1XpTtyalCWRtcOPWWtLcqG9mGHNo/K57QtPWF5kH/fQ4aC7I/LCLVe93enLqMaXMF4tWRyiMjqtnRR6EKv4Yxl2C+0ZXjfjwEeuYdgi7C664lxTOzA35e+kHLzfYl8Zdg3dMRukvunuoBX5svU2y66nrTE8xXTcO1Ub2Oz3F+WzWLnF/BMYkvPzLxc7TWD57WVSDvCm47dxBYXyPD+QUCvSSRN2Flsut8bAf93qA/vAPrAP7APb1H8BBgDZp0G+vm9PBgAAAABJRU5ErkJggg==\") no-repeat center center; }\n\n.plus {\n  padding-left: 54px;\n  background-color: #393838; }\n\n.plus .i {\n  border-radius: 3px;\n  position: absolute;\n  border-top: 8px solid #D64335;\n  width: 44px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  margin-left: 0;\n  border-right: 1px solid #343434;\n  line-height: 26px; }\n\n.plus i:before {\n  content: \"g\";\n  font: 26px \"Palatino Linotype\", Georgia, serif;\n  text-shadow: 1px 1px 1px #444;\n  line-height: 0px;\n  margin-left: 10px; }\n\n.plus i:after {\n  content: \"+\";\n  border-left: 11px solid #426AAD;\n  background-color: #32A45E;\n  border-right: 11px solid #F8CA32;\n  width: 11px;\n  font: 18px \"Palatino Linotype\", Georgia, serif;\n  line-height: 38px;\n  position: absolute;\n  top: -8px;\n  left: 12px;\n  height: 8px; }\n\n.btn-cancel {\n  color: #ffffff;\n  background-image: linear-gradient(to bottom, #d9534f 0, #c12e2a 100%); }\n\n.btn-sign {\n  color: #ffffff;\n  background-image: linear-gradient(to bottom, #5cb85c 0, #419641 100%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".container {\n  text-align: center; }\n\n.btn-sign {\n  color: #ffffff;\n  background-image: linear-gradient(to bottom, #5cb85c 0, #419641 100%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<app-header [loggedInUser]=\"loggedInUser\"></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(router) {
        this.router = router;
        this.userLoggedIn = false;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["initializeApp"]({
            apiKey: "AIzaSyBgLXnjFDNECD87UIBFsWX7El9ukGXVTBI",
            authDomain: "myngapp-d75d5.firebaseapp.com",
            databaseURL: "https://myngapp-d75d5.firebaseio.com",
            projectId: "myngapp-d75d5",
            storageBucket: "myngapp-d75d5.appspot.com",
            messagingSenderId: "664339736457"
        });
    }
    UserService.prototype.register = function (email, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (response) {
            console.dir(response.email);
            alert('Welcome ' + response.email);
            _this.initializeList(response.uid);
            _this.router.navigate(['/list']);
        })
            .catch(function (error) {
            alert(error.message + " Please try Again!");
        });
    };
    UserService.prototype.getCurr = function () {
        return __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
    };
    UserService.prototype.login = function (loginEmail, loginPaswword) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(loginEmail, loginPaswword)
            .then(function () {
            alert('Welcome');
            _this.router.navigate(['list']);
        })
            .catch(function (error) {
            alert(error.message + " Unable to login. Try again!");
        });
    };
    UserService.prototype.setProvider = function (provider) {
        this.socProvider = provider == 'Facebook' ? new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].FacebookAuthProvider() : new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GoogleAuthProvider();
        this.loginPopUp(this.socProvider);
    };
    UserService.prototype.loginPopUp = function (social) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithPopup(social)
            .then(function (result) {
            alert('Welcome ' + result.user.displayName);
            _this.router.navigate(['list']);
        })
            .catch(function (error) {
            alert(error.message + " Unable to login. Try again!");
        });
    };
    UserService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function () {
            alert("Logged out");
        }, function (error) {
            alert(error.message + " Unable to logout. Try again!");
        });
    };
    UserService.prototype.initializeList = function (userId) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(userId + '/default/').set({
            title: 'Default',
            list: {}
        });
    };
    UserService.prototype.addOne = function (list, text) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + '/' + list + '/list/').push().set({
            todo: text
        });
    };
    UserService.prototype.deleteOne = function (list, index) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + '/' + list + '/list/' + index).remove();
    };
    UserService.prototype.saveOne = function (list, index, text) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + '/' + list + '/list/' + index).set({
            todo: text
        });
    };
    UserService.prototype.newList = function (name) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + '/' + name + '/').set({
            title: name,
            list: {}
        });
    };
    UserService.prototype.deleteList = function (list) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + '/' + list + '/').remove();
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"form-group\">\n    <textarea class=\"form-control\" name=\"\" id=\"\" rows=\"15\" [(ngModel)]=\"cardToShow\"></textarea>\n  </div>\n  <button class=\"btn-sign\" md-raised-button (click)=\"saveCard(cardToShow)\">Save</button>\n  <button class=\"btn-cancel\" md-raised-button (click)=\"closeCard()\">Cancel</button>\n\n</div>\n\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<p>\n  error works!\n</p>\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <img class=\"userPhoto\" *ngIf=\"loggedInUser\" src=\"{{loggedInUser.photoURL}}\" alt=\"\">\n      <p class=\"navbar-brand\" >Welcome to your dashboard <span *ngIf=\"loggedInUser\">{{loggedInUser.email}}</span> </p>\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <form class=\"navbar-form navbar-right\" role=\"form\">\n        <button *ngIf=\"!loggedInUser\" md-raised-button routerLink=\"/login\">Log in</button>\n        <button *ngIf=\"!loggedInUser\" class=\"btn-sign\" md-raised-button routerLink=\"/registration\">Sign up</button>\n        <button *ngIf=\"loggedInUser\"  class=\"btn-cancel\" md-raised-button (click)=\"logout()\">Log out</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<app-edit *ngIf=\"showPost\" [cardToShow]=\"detailedPost.data\" (onClose)=\"closeCard($event)\" (onSave)=\"saveCard(detailedPost.list , detailedPost.key, $event)\"></app-edit>\n\n<br/>\n\n<div class=\"flex-container\">\n  <div class=\"wrapper\" *ngFor=\"let singleList of outArr.slice().reverse(); let i = index\">\n    <h4>{{singleList.list.title}} <div (click)=\"deleteList(singleList.key)\"><md-icon>delete</md-icon></div> </h4>\n\n    <div class=\"single-container\" *ngFor=\"let key of singleList.listKeys\" (mouseover)=\"showButtonsToggle(true, key)\" (mouseleave)=\"showButtonsToggle(false, null)\">\n      <div class=\"buttons\" *ngIf=\"showButtons && (buttonsIndex==key)\">\n        <div class=\"icons\" (click)=\"showDetailed(singleList.key, key, singleList.list.list[key].todo)\"><span class=\"glyphicon glyphicon-pencil\"></span></div>\n        <div class=\"icons\" (click)=\"deleteCard(singleList.key, key)\"><span class=\"glyphicon glyphicon-trash\"></span></div>\n      </div>\n      {{singleList.list.list[key].todo}}\n    </div>\n\n    <p (click)=\"toggleForm(singleList)\" *ngIf=\"!formVisibility\">Add card...</p>\n    <div class=\"addPost\" *ngIf=\"formVisibility && (currList==singleList)\">\n      <div class=\"form-group\">\n        <textarea class=\"form-control\" name=\"\" id=\"\" cols=\"20\" rows=\"4\" [(ngModel)]=\"textToAdd\"></textarea>\n      </div>\n      <div class=\"btn btn-success\" (click)=\"addOne(singleList.key, textToAdd)\">Add</div>\n      <div class=\"close glyphicon glyphicon-remove\" (click)=\"toggleForm()\"><span></span></div>\n    </div>\n\n  </div>\n\n  <div class=\"newList\">\n    <input type=\"text\" placeholder=\"Create new list\" [(ngModel)]=\"newListName\" (keyup.enter)=\"newList(newListName)\">\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <h1>Log in with:</h1>\n\n    <form>\n      <md-input-container>\n        <input mdInput placeholder=\"Username\" id=\"email\"\n               [(ngModel)]=\"email\" name=\"email\" required #em=\"ngModel\">\n        <div [hidden]=\"em.valid || em.pristine\" class=\"alert callout\">\n          Email is required\n        </div>\n      </md-input-container>\n      <br/>\n      <md-input-container>\n        <input type=\"password\" mdInput placeholder=\"Password\" id=\"password1\"\n               [(ngModel)]=\"password1\" name=\"password1\" required #pwd1=\"ngModel\">\n        <div [hidden]=\"pwd1.valid || pwd1.pristine\" class=\"alert callout\">\n          Password required\n        </div>\n      </md-input-container>\n      <br/>\n\n      <br/>\n      <button class=\"btn-sign\" md-raised-button (click)=\"login()\">Sign Up</button>\n      <button class=\"btn-cancel\" md-raised-button (click)=\"cancel()\">Cancel</button>\n\n      <div class=\"social-container\">\n        <button (click)=\"loginFb()\" class=\"btn facebook\" data-provider=\"facebook\"><i></i><span>Facebook</span></button>\n        <button (click)=\"loginGo()\" class=\"btn plus\" data-provider=\"facebook\"><i></i><span>Google</span></button>\n        <button (click)=\"loginFb()\" class=\"btn twitter\" data-provider=\"facebook\"><i></i><span>Twitter</span></button>\n      </div>\n\n    </form>\n\n\n\n</div>\n"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register an Account</h1>\n\n  <form>\n\n    <md-input-container>\n      <input mdInput placeholder=\"Username\" id=\"email\"\n             [(ngModel)]=\"email\" name=\"email\" required #em=\"ngModel\">\n      <div [hidden]=\"em.valid || em.pristine\" class=\"alert callout\">\n        Email is required\n      </div>\n    </md-input-container>\n    <br/>\n    <md-input-container>\n      <input type=\"password\" mdInput placeholder=\"Password\" id=\"password1\"\n             [(ngModel)]=\"password1\" name=\"password1\" required #pwd1=\"ngModel\">\n      <div [hidden]=\"pwd1.valid || pwd1.pristine\" class=\"alert callout\">\n        Password required\n      </div>\n    </md-input-container>\n    <br/>\n    <md-input-container>\n      <input type=\"password\" mdInput placeholder=\"Password confirm\" id=\"password2\"\n             [(ngModel)]=\"password2\" name=\"password2\" required #pwd2=\"ngModel\">\n      <div [hidden]=\"pwd2.valid || pwd2.pristine\" class=\"alert callout\">\n        Confirm required\n      </div>\n    </md-input-container>\n    <div *ngIf=\"passwordFail\" class=\"alert callout\">\n      Passwords Do Not Match\n    </div>\n    <br/>\n    <button class=\"btn-sign\" md-raised-button (click)=\"signUp()\">Sign Up</button>\n    <br/>\n    <br/>\n    <h4>Already exist?</h4>\n    <button md-raised-button (click)=\"cancel()\">Log in</button>\n\n  </form>\n</div>\n\n"

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(124);


/***/ })

},[291]);
//# sourceMappingURL=main.bundle.js.map