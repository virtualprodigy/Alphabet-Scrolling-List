import { Injectable } from '@angular/core';
import {AlphaScrollItem} from "../../assets/models/AlphaScrollItem";

/*
  Generated class for the AlphaDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlphaDataProvider {

  constructor() {
  }

  createAlphaScrollGroups(list: AlphaScrollItem []){

  }

  /**
   * Sorts the list by either first or last name
   * @param {AlphaScrollItem[]} list
   * @param {boolean} sortByFirstName: true sort by first name false sort by last name
   */
  private sortList(list : AlphaScrollItem[], sortByFirstName:boolean = true){
    list.sort((a, b)=>{
      if(sortByFirstName){
        if (a.firstName < b.firstName) { return -1; }
        else if(a.firstName > b.firstName) { return 1; }
        else { return 0; }
      }else{
        if(a.lastName < b.lastName) { return -1; }
        if(a.lastName > b.lastName) { return 1; }
        else { return 0; }
      }

    })
  }

}
