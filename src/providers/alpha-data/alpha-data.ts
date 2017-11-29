import {Injectable} from '@angular/core';
import {AlphaScrollItem} from "../../assets/models/AlphaScrollItem";
import {AlphaScrollGroups} from "../../assets/models/AlphaScrollGroups";
import {CasingEnums} from "../../assets/enums/casing.enums";
import {AlphaScrollGroup} from "../../assets/models/AlphaScrollGroup";

/*
  Generated class for the AlphaDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlphaDataProvider {

  constructor() {
  }

  /**
   * Creates a collection of the items sorted by first or list name and grouped by the first character
   * @param {AlphaScrollItem[]} dataList
   * @param {CasingEnums} casing
   * @param {boolean} sortByFirstName
   * @returns {AlphaScrollGroups}
   */
  createAlphaScrollGroups(dataList: AlphaScrollItem [], casing: CasingEnums, sortByFirstName: boolean = true): AlphaScrollGroups {
    this.sortList(dataList, sortByFirstName);
    let scrollGroups = new AlphaScrollGroups();

    for (let alphaItem of dataList) {
      this.setCasing(alphaItem, casing);//using this for loop to set the casing standard as well
      let groupBy = sortByFirstName ? alphaItem.firstName : alphaItem.lastName;
      let isCategorized = false;
      let loopCount = 0;
      for (let group of scrollGroups.alphaScrollGroups) {

        try {
          if (groupBy === undefined || groupBy === null
            || groupBy.length <= 0 || !groupBy.substr(0, 1).match('[A-Za-z]')) {
            //    add non letter, and empty strings to the # group
            scrollGroups.alphaScrollGroups[26].categoryList.push(alphaItem);
            // console.log("category case 1", alphaItem);
            isCategorized = true;
            break;
          } else if (group.categoryChar.toLowerCase() === groupBy.substr(0, 1).toLowerCase()) {
            //    add to the correct group
            // console.log("category case 2", alphaItem);
            group.categoryList.push(alphaItem);
            isCategorized = true;
            break;
          } else if(!isCategorized && loopCount === scrollGroups.alphaScrollGroups.length){
            //default can't categories
            // console.log("category case default", isCategorized, loopCount, scrollGroups.alphaScrollGroups.length);
            scrollGroups.alphaScrollGroups[26].categoryList.push(alphaItem);
            isCategorized = true;
          }
          loopCount = loopCount + 1;
        } catch (e) {
          console.log("Unable to determine the correct alphabetical group, defaulting this item to #");
          scrollGroups.alphaScrollGroups[26].categoryList.push(alphaItem);
        }

      }//end inner loop

    }

    return scrollGroups;
  }

  /**
   * Sorts the list by either first or last name
   * @param {AlphaScrollItem[]} list
   * @param {boolean} sortByFirstName: true sort by first name false sort by last name
   */
  private sortList(list: AlphaScrollItem[], sortByFirstName: boolean = true) {
    list.sort((a, b) => {
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
      } else {
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

    })
  }

  /**
   * Sets the casing for the display
   * @param {AlphaScrollItem} item
   * @param {CasingEnums} casing
   */
  private setCasing(item: AlphaScrollItem, casing: CasingEnums){
    switch (casing){
      case CasingEnums.upper:
        item.firstName = (item.firstName) ? item.firstName.toUpperCase() : "";
        item.lastName = (item.lastName) ? item.lastName.toUpperCase() : "";
        break;
      case CasingEnums.lower:
        item.firstName = (item.firstName) ? item.firstName.toLowerCase() : "";
        item.lastName = (item.lastName) ? item.lastName.toLowerCase() : "";
        break;
      case CasingEnums.capFirst:
        item.firstName = this.capitalizeFirstLetter(item.firstName);
        item.lastName = this.capitalizeFirstLetter(item.lastName);
        break;
    }
  }

  /**
   * Handles setting the first letter to a capital
   * @param {String} word
   * @returns {any}
   */
  private capitalizeFirstLetter(word: string){
    if(word !== undefined && word !== null && word.length > 0){
      if(word.length === 1){
        return word.toUpperCase();
      }else {
        word = word.toLowerCase();
        word = word.substr(0, 1).toUpperCase() + word.substr(1, word.length);
        return word;
      }
    }else{
      return "";
    }
  }

  /**
   * Sets the hide value on the group and children based on if they match a search term or not
   * @param {AlphaScrollGroups} scrollGroups
   * @param {string searchTerm}
   */
   searchList(scrollGroups : AlphaScrollGroups,searchTerm : string = ''){
    searchTerm = searchTerm.toLowerCase().replace(/,|\.|-/g, ' ');
    let searchTerms = searchTerm.split(' ').filter(w => !!w.trim().length);

    scrollGroups.alphaScrollGroups.forEach((group: AlphaScrollGroup) => {
      group.hide = true;

      group.categoryList.forEach((alphaScrollItem: any) => {
        // check if this session should show or not
        this.filterAlphaScrollItem(alphaScrollItem, searchTerms);

        if (!alphaScrollItem.hide) {
          // if this session is not hidden then this group should show
          group.hide = false;
        }
      });

    });


  }

  /**
   * Checks if the passed in search items title, first or last name matches the
   * search terms
   * @param alphaScrollItem
   * @param {string[]} searchTerms
   */
  private filterAlphaScrollItem(alphaScrollItem: AlphaScrollItem, searchTerms: string[]) {

    let matchesSearchTerms = false;
    if (searchTerms.length) {
      //check if it matches any of the words
      searchTerms.forEach((queryWord: string) => {
        if (alphaScrollItem.title && alphaScrollItem.title.toLowerCase().indexOf(queryWord) > -1) {
          matchesSearchTerms = true;
        }else if (alphaScrollItem.firstName && alphaScrollItem.firstName.toLowerCase().indexOf(queryWord) > -1) {
          matchesSearchTerms = true;
        } else if (alphaScrollItem.lastName && alphaScrollItem.lastName.toLowerCase().indexOf(queryWord) > -1) {
          matchesSearchTerms = true;
        }
      });
    } else {
      //empty search passes for all
      matchesSearchTerms = true;
    }

    alphaScrollItem.hide = !(matchesSearchTerms);
  }
}
