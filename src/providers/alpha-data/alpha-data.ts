import {Injectable} from '@angular/core';
import {AlphaScrollItem} from "../../assets/models/AlphaScrollItem";
import {AlphaScrollGroups} from "../../assets/models/AlphaScrollGroups";

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
   * @param {boolean} sortByFirstName
   * @returns {AlphaScrollGroups}
   */
  createAlphaScrollGroups(dataList: AlphaScrollItem [], sortByFirstName: boolean = true): AlphaScrollGroups {
    this.sortList(dataList, sortByFirstName);
    let scrollGroups = new AlphaScrollGroups();

    for (let alphaItem of dataList) {
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

}
