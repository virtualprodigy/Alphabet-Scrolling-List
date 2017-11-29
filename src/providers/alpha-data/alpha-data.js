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
var AlphaScrollGroups_1 = require("../../assets/models/AlphaScrollGroups");
var casing_enums_1 = require("../../assets/enums/casing.enums");
/*
  Generated class for the AlphaDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlphaDataProvider = (function () {
    function AlphaDataProvider() {
    }
    /**
     * Creates a collection of the items sorted by first or list name and grouped by the first character
     * @param {AlphaScrollItem[]} dataList
     * @param {CasingEnums} casing
     * @param {boolean} sortByFirstName
     * @returns {AlphaScrollGroups}
     */
    AlphaDataProvider.prototype.createAlphaScrollGroups = function (dataList, casing, sortByFirstName) {
        if (sortByFirstName === void 0) { sortByFirstName = true; }
        this.sortList(dataList, sortByFirstName);
        var scrollGroups = new AlphaScrollGroups_1.AlphaScrollGroups();
        for (var _i = 0, dataList_1 = dataList; _i < dataList_1.length; _i++) {
            var alphaItem = dataList_1[_i];
            this.setCasing(alphaItem, casing); //using this for loop to set the casing standard as well
            var groupBy = sortByFirstName ? alphaItem.firstName : alphaItem.lastName;
            var isCategorized = false;
            var loopCount = 0;
            for (var _a = 0, _b = scrollGroups.alphaScrollGroups; _a < _b.length; _a++) {
                var group = _b[_a];
                try {
                    if (groupBy === undefined || groupBy === null
                        || groupBy.length <= 0 || !groupBy.substr(0, 1).match('[A-Za-z]')) {
                        //    add non letter, and empty strings to the # group
                        scrollGroups.alphaScrollGroups[26].categoryList.push(alphaItem);
                        // console.log("category case 1", alphaItem);
                        isCategorized = true;
                        break;
                    }
                    else if (group.categoryChar.toLowerCase() === groupBy.substr(0, 1).toLowerCase()) {
                        //    add to the correct group
                        // console.log("category case 2", alphaItem);
                        group.categoryList.push(alphaItem);
                        isCategorized = true;
                        break;
                    }
                    else if (!isCategorized && loopCount === scrollGroups.alphaScrollGroups.length) {
                        //default can't categories
                        // console.log("category case default", isCategorized, loopCount, scrollGroups.alphaScrollGroups.length);
                        scrollGroups.alphaScrollGroups[26].categoryList.push(alphaItem);
                        isCategorized = true;
                    }
                    loopCount = loopCount + 1;
                }
                catch (e) {
                    console.log("Unable to determine the correct alphabetical group, defaulting this item to #");
                    scrollGroups.alphaScrollGroups[26].categoryList.push(alphaItem);
                }
            } //end inner loop
        }
        return scrollGroups;
    };
    /**
     * Sorts the list by either first or last name
     * @param {AlphaScrollItem[]} list
     * @param {boolean} sortByFirstName: true sort by first name false sort by last name
     */
    AlphaDataProvider.prototype.sortList = function (list, sortByFirstName) {
        if (sortByFirstName === void 0) { sortByFirstName = true; }
        list.sort(function (a, b) {
            if (sortByFirstName) {
                if (a.firstName < b.firstName) {
                    return -1;
                }
                else if (a.firstName > b.firstName) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else {
                if (a.lastName < b.lastName) {
                    return -1;
                }
                if (a.lastName > b.lastName) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
        });
    };
    /**
     * Sets the casing for the display
     * @param {AlphaScrollItem} item
     * @param {CasingEnums} casing
     */
    AlphaDataProvider.prototype.setCasing = function (item, casing) {
        switch (casing) {
            case casing_enums_1.CasingEnums.upper:
                item.firstName = (item.firstName) ? item.firstName.toUpperCase() : "";
                item.lastName = (item.lastName) ? item.lastName.toUpperCase() : "";
                break;
            case casing_enums_1.CasingEnums.lower:
                item.firstName = (item.firstName) ? item.firstName.toLowerCase() : "";
                item.lastName = (item.lastName) ? item.lastName.toLowerCase() : "";
                break;
            case casing_enums_1.CasingEnums.capFirst:
                item.firstName = this.capitalizeFirstLetter(item.firstName);
                item.lastName = this.capitalizeFirstLetter(item.lastName);
                break;
        }
    };
    /**
     * Handles setting the first letter to a capital
     * @param {String} word
     * @returns {any}
     */
    AlphaDataProvider.prototype.capitalizeFirstLetter = function (word) {
        if (word !== undefined && word !== null && word.length > 0) {
            if (word.length === 1) {
                return word.toUpperCase();
            }
            else {
                word = word.toLowerCase();
                word = word.substr(0, 1).toUpperCase() + word.substr(1, word.length);
                return word;
            }
        }
        else {
            return "";
        }
    };
    /**
     * Sets the hide value on the group and children based on if they match a search term or not
     * @param {AlphaScrollGroups} scrollGroups
     * @param {string searchTerm}
     */
    AlphaDataProvider.prototype.searchList = function (scrollGroups, searchTerm) {
        var _this = this;
        if (searchTerm === void 0) { searchTerm = ''; }
        searchTerm = searchTerm.toLowerCase().replace(/,|\.|-/g, ' ');
        var searchTerms = searchTerm.split(' ').filter(function (w) { return !!w.trim().length; });
        scrollGroups.alphaScrollGroups.forEach(function (group) {
            group.hide = true;
            group.categoryList.forEach(function (alphaScrollItem) {
                // check if this session should show or not
                _this.filterAlphaScrollItem(alphaScrollItem, searchTerms);
                if (!alphaScrollItem.hide) {
                    // if this session is not hidden then this group should show
                    group.hide = false;
                }
            });
        });
    };
    /**
     * Checks if the passed in search items title, first or last name matches the
     * search terms
     * @param alphaScrollItem
     * @param {string[]} searchTerms
     */
    AlphaDataProvider.prototype.filterAlphaScrollItem = function (alphaScrollItem, searchTerms) {
        var matchesSearchTerms = false;
        if (searchTerms.length) {
            //check if it matches any of the words
            searchTerms.forEach(function (queryWord) {
                if (alphaScrollItem.title && alphaScrollItem.title.toLowerCase().indexOf(queryWord) > -1) {
                    matchesSearchTerms = true;
                }
                else if (alphaScrollItem.firstName && alphaScrollItem.firstName.toLowerCase().indexOf(queryWord) > -1) {
                    matchesSearchTerms = true;
                }
                else if (alphaScrollItem.lastName && alphaScrollItem.lastName.toLowerCase().indexOf(queryWord) > -1) {
                    matchesSearchTerms = true;
                }
            });
        }
        else {
            //empty search passes for all
            matchesSearchTerms = true;
        }
        alphaScrollItem.hide = !(matchesSearchTerms);
    };
    AlphaDataProvider = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AlphaDataProvider);
    return AlphaDataProvider;
}());
exports.AlphaDataProvider = AlphaDataProvider;
//# sourceMappingURL=alpha-data.js.map