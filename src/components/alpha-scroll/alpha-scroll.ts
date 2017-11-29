import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AlphaScrollItem} from "../../assets/models/AlphaScrollItem";
import {AlphaDataProvider} from "../../providers/alpha-data/alpha-data";
import {AlphaScrollGroups} from "../../assets/models/AlphaScrollGroups";
import {AlphaScrollInit} from "../../assets/models/AlphaScrollInit";

/**
 * Generated class for the AlphaScrollComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'vp-alpha-scroll',
  templateUrl: 'alpha-scroll.html'
})
export class AlphaScrollComponent {

  private scrollList: AlphaScrollItem [];
  private sortByFirstName: boolean = true;
  private delimiter: string = '';
  private displayContactPhoto: boolean = false;
  private button1Title?: string;//title of the button
  private button1Icon?: string;//name of the ion-icon to use
  private button2Title?: string;//title of the button
  private button2Icon?: string;//name of the ion-icon to use
  private button3Title?: string;//title of the button
  private button3Icon?: string;//name of the ion-icon to use

  @Input()
  set init(initParams: AlphaScrollInit) {
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

    this.scrollGroups = this._alphaData.createAlphaScrollGroups(this.scrollList, this.sortByFirstName, initParams.casing);
  }

  @Output() onClick = new EventEmitter<AlphaScrollItem>();


  @Output() button1EventEmitter = new EventEmitter<any>();
  @Output() button2EventEmitter = new EventEmitter<any>();
  @Output() button3EventEmitter = new EventEmitter<any>();

  private scrollGroups: AlphaScrollGroups;

  constructor(private _alphaData: AlphaDataProvider) {

  }

  private onItemClick(alphaItem: AlphaScrollItem) {
    console.log("alpha list item click, firing emitter", alphaItem);
    this.onClick.emit(alphaItem);
  }

  /**
   * Event callback for slide option button 1
   */
  private button1Event() {
    this.button1EventEmitter.emit();
  }


  /**
   * Event callback for slide option button 2
   */
  private button2Event() {
    this.button2EventEmitter.emit();
  }


  /**
   * Event callback for slide option button 3
   */
  private button3Event() {
    this.button3EventEmitter.emit();
  }
}
