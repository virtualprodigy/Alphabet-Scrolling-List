import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AlphaScrollItem} from "../../assets/models/AlphaScrollItem";

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
@Output() onClick : EventEmitter<AlphaScrollItem>;
  constructor() {

  }

}
