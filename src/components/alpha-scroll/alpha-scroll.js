"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var alpha_data_1 = require("../../providers/alpha-data/alpha-data");
var AlphaScrollInit_1 = require("../../assets/models/AlphaScrollInit");
var ionic_angular_1 = require("ionic-angular");
/**
 * Generated class for the AlphaScrollComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AlphaScrollComponent = (function () {
    function AlphaScrollComponent(_alphaData) {
        this._alphaData = _alphaData;
        this.sortByFirstName = true;
        this.delimiter = '';
        this.displayContactPhoto = false;
        this.onClick = new core_1.EventEmitter();
        this.button1EventEmitter = new core_1.EventEmitter();
        this.button2EventEmitter = new core_1.EventEmitter();
        this.button3EventEmitter = new core_1.EventEmitter();
    }
    Object.defineProperty(AlphaScrollComponent.prototype, "init", {
        set: function (initParams) {
            console.log(initParams);
            this.scrollList = initParams.scrollList;
            this.sortByFirstName = initParams.sortByFirstName;
            this.delimiter = initParams.delimiter;
            this.displayContactPhoto = initParams.displayContactPhoto;
            //TODO enable users to set their own swipe buttons
            this.button1Title = initParams.button1Title;
            this.button1Icon = initParams.button1Icon;
            this.button2Title = initParams.button2Title;
            this.button2Icon = initParams.button2Icon;
            this.button3Title = initParams.button3Title;
            this.button3Icon = initParams.button3Icon;
            this.scrollGroups = this._alphaData.createAlphaScrollGroups(this.scrollList, initParams.casing, this.sortByFirstName);
            console.log(this.scrollGroups);
        },
        enumerable: true,
        configurable: true
    });
    AlphaScrollComponent.prototype.onItemClick = function (alphaItem) {
        console.log("alpha list item click, firing emitter", alphaItem);
        this.onClick.emit(alphaItem);
    };
    /**
     * Event callback for slide option button 1
     */
    AlphaScrollComponent.prototype.button1Event = function () {
        this.button1EventEmitter.emit();
    };
    /**
     * Event callback for slide option button 2
     */
    AlphaScrollComponent.prototype.button2Event = function () {
        this.button2EventEmitter.emit();
    };
    /**
     * Event callback for slide option button 3
     */
    AlphaScrollComponent.prototype.button3Event = function () {
        this.button3EventEmitter.emit();
    };
    /**
     * Scrolls to the selected header
     * @param {string} id
     */
    AlphaScrollComponent.prototype.scrollToElement = function (id) {
        try {
            var element = document.getElementById(id);
            var anchorRect = element.getBoundingClientRect();
            var dividers = document.getElementsByTagName("ion-item-divider");
            var dividerHeight = dividers[0].getBoundingClientRect().top;
            console.log(dividers);
            this.content.scrollTo(0, anchorRect.top - dividerHeight, 350);
        }
        catch (e) {
            console.log('failed to scroll to id', id);
        }
    };
    AlphaScrollComponent.prototype.searchList = function () {
        console.log("search by term", this.searchTerm);
        this._alphaData.searchList(this.scrollGroups, this.searchTerm);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", AlphaScrollInit_1.AlphaScrollInit),
        __metadata("design:paramtypes", [AlphaScrollInit_1.AlphaScrollInit])
    ], AlphaScrollComponent.prototype, "init", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AlphaScrollComponent.prototype, "onClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AlphaScrollComponent.prototype, "button1EventEmitter", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AlphaScrollComponent.prototype, "button2EventEmitter", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AlphaScrollComponent.prototype, "button3EventEmitter", void 0);
    __decorate([
        core_1.ViewChild(ionic_angular_1.Content),
        __metadata("design:type", ionic_angular_1.Content)
    ], AlphaScrollComponent.prototype, "content", void 0);
    AlphaScrollComponent = __decorate([
        core_1.Component({
            selector: 'vp-alpha-scroll',
            templateUrl: 'alpha-scroll.html'
        }),
        __metadata("design:paramtypes", [alpha_data_1.AlphaDataProvider])
    ], AlphaScrollComponent);
    return AlphaScrollComponent;
}());
exports.AlphaScrollComponent = AlphaScrollComponent;
//# sourceMappingURL=alpha-scroll.js.map