"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var alpha_scroll_1 = require("./alpha-scroll/alpha-scroll");
var alpha_data_1 = require("../providers/alpha-data/alpha-data");
var ionic_angular_1 = require("ionic-angular");
var AlphaScrollModule = (function () {
    function AlphaScrollModule() {
    }
    AlphaScrollModule = __decorate([
        core_1.NgModule({
            declarations: [alpha_scroll_1.AlphaScrollComponent],
            imports: [ionic_angular_1.IonicPageModule.forChild(alpha_scroll_1.AlphaScrollComponent)],
            exports: [alpha_scroll_1.AlphaScrollComponent],
            providers: [alpha_data_1.AlphaDataProvider]
        })
    ], AlphaScrollModule);
    return AlphaScrollModule;
}());
exports.AlphaScrollModule = AlphaScrollModule;
//# sourceMappingURL=alpha-scroll.module.js.map