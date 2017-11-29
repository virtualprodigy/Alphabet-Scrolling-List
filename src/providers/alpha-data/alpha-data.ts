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
   * @param {AlphaScrollItem[]} list
   * @param {boolean} sortByFirstName
   * @returns {AlphaScrollGroups}
   */
  createAlphaScrollGroups(list: AlphaScrollItem [], sortByFirstName: boolean = true): AlphaScrollGroups {
    this.sortList(list, sortByFirstName);
    let scrollGroups = new AlphaScrollGroups();

    for (let alphaItem of list) {
      let groupBy = sortByFirstName ? alphaItem.firstName : alphaItem.lastName;

      for (let group of scrollGroups.alphaScrollGroups) {

        try {
          if (groupBy === undefined || groupBy === null || groupBy.length < 1 || !groupBy.match('[A-Za-z]')) {
            //    add non letter, and empty strings to the # group
            scrollGroups.alphaScrollGroups[26].categoryList.push(alphaItem);
          } else if (group.categoryChar.toLowerCase() === groupBy.substr(0, 1).toLowerCase()) {
            //    add to the correct group
            group.categoryList.push(alphaItem);
          } else {
            scrollGroups.alphaScrollGroups[26].categoryList.push(alphaItem);
          }
        } catch (e) {
          console.log("Unable to determine the correct alphabetical group, defaulting this item to #");
          scrollGroups.alphaScrollGroups[26].categoryList.push(alphaItem);
        }

      }

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
