import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AlphaScrollItem} from "../../assets/models/AlphaScrollItem";
import {AlphaDataProvider} from "../../providers/alpha-data/alpha-data";
import {AlphaScrollGroups} from "../../assets/models/AlphaScrollGroups";

/**
 * Generated class for the AlphaScrollComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alpha-scroll',
  templateUrl: 'alpha-scroll.html'
})
export class AlphaScrollComponent {
  @Input() scrollList: AlphaScrollItem [];
  @Input() sortByFirstName: boolean = true;
  @Input() delimiter: string = '';
  @Input() displayContactPhoto: boolean = false;
  @Output() onClick = new EventEmitter<AlphaScrollItem>();

  @Input() button1Title: string;//title of the button
  @Input() button1Icon: string;//name of the ion-icon to use
  @Output() button1EventEmitter = new EventEmitter<any>();
  @Input() button2Title: string;//title of the button
  @Input() button2Icon: string;//name of the ion-icon to use
  @Output() button2EventEmitter = new EventEmitter<any>();
  @Input() button3Title: string;//title of the button
  @Input() button3Icon: string;//name of the ion-icon to use
  @Output() button3EventEmitter = new EventEmitter<any>();

  private scrollGroups: AlphaScrollGroups;

  constructor(private _alphaData: AlphaDataProvider) {
    this.scrollGroups = _alphaData.createAlphaScrollGroups(this.scrollList, this.sortByFirstName);

  }

  private onItemClick(alphaItem: AlphaScrollItem){
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
