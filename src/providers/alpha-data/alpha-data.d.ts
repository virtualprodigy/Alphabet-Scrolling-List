import { AlphaScrollItem } from "../../assets/models/AlphaScrollItem";
import { AlphaScrollGroups } from "../../assets/models/AlphaScrollGroups";
import { CasingEnums } from "../../assets/enums/casing.enums";
export declare class AlphaDataProvider {
    constructor();
    /**
     * Creates a collection of the items sorted by first or list name and grouped by the first character
     * @param {AlphaScrollItem[]} dataList
     * @param {CasingEnums} casing
     * @param {boolean} sortByFirstName
     * @returns {AlphaScrollGroups}
     */
    createAlphaScrollGroups(dataList: AlphaScrollItem[], casing: CasingEnums, sortByFirstName?: boolean): AlphaScrollGroups;
    /**
     * Sorts the list by either first or last name
     * @param {AlphaScrollItem[]} list
     * @param {boolean} sortByFirstName: true sort by first name false sort by last name
     */
    private sortList(list, sortByFirstName?);
    /**
     * Sets the casing for the display
     * @param {AlphaScrollItem} item
     * @param {CasingEnums} casing
     */
    private setCasing(item, casing);
    /**
     * Handles setting the first letter to a capital
     * @param {String} word
     * @returns {any}
     */
    private capitalizeFirstLetter(word);
    /**
     * Sets the hide value on the group and children based on if they match a search term or not
     * @param {AlphaScrollGroups} scrollGroups
     * @param {string searchTerm}
     */
    searchList(scrollGroups: AlphaScrollGroups, searchTerm?: string): void;
    /**
     * Checks if the passed in search items title, first or last name matches the
     * search terms
     * @param alphaScrollItem
     * @param {string[]} searchTerms
     */
    private filterAlphaScrollItem(alphaScrollItem, searchTerms);
}
