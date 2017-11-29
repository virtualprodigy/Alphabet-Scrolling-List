"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casing_enums_1 = require("../enums/casing.enums");
var AlphaScrollInit = (function () {
    function AlphaScrollInit(scrollList, sortByFirstName, casing, delimiter, displayContactPhoto, button1Title, button1Icon, button2Title, button2Icon, button3Title, button3Icon) {
        if (sortByFirstName === void 0) { sortByFirstName = true; }
        if (casing === void 0) { casing = casing_enums_1.CasingEnums.upper; }
        if (delimiter === void 0) { delimiter = ','; }
        if (displayContactPhoto === void 0) { displayContactPhoto = false; }
        this.scrollList = scrollList;
        this.casing = casing;
        this.sortByFirstName = sortByFirstName;
        this.delimiter = delimiter;
        this.displayContactPhoto = displayContactPhoto;
        this.button1Title = button1Title;
        this.button1Icon = button1Icon;
        this.button2Title = button2Title;
        this.button2Icon = button2Icon;
        this.button3Title = button3Title;
        this.button3Icon = button3Icon;
    }
    return AlphaScrollInit;
}());
exports.AlphaScrollInit = AlphaScrollInit;
//# sourceMappingURL=AlphaScrollInit.js.map