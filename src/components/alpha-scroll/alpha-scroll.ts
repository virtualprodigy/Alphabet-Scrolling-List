import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {AlphaScrollItem} from "../../assets/models/AlphaScrollItem";
import {AlphaDataProvider} from "../../providers/alpha-data/alpha-data";
import {AlphaScrollGroups} from "../../assets/models/AlphaScrollGroups";
import {AlphaScrollInit} from "../../assets/models/AlphaScrollInit";
import {Content} from "ionic-angular";

/**
 * Generated class for the AlphaScrollComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'vp-alpha-scroll',
  // templateUrl: 'alpha-scroll.html'
  template: '<ion-header>\n' +
  '  <ion-toolbar color="light">\n' +
  '    <ion-searchbar (ionInput)="searchList()"\n' +
  '                   [(ngModel)]="searchTerm"\n' +
  '                   [showCancelButton]="false"\n' +
  '                   placeholder="Search"\n' +
  '                   autocomplete="on"\n' +
  '                   autocorrect="on"\n' +
  '                   spellcheck="true"\n' +
  '                   debounce="350">\n' +
  '    </ion-searchbar>\n' +
  '  </ion-toolbar>\n' +
  '</ion-header>\n' +
  '<ion-content padding="false">\n' +
  '\n' +
  '  <ion-list id="vp-alpha-scroll-list">\n' +
  '    <div *ngFor="let scrollGroup of scrollGroups?.alphaScrollGroups">\n' +
  '      <ion-item-divider id="{{\'vp-alpha-scroll-\'}}{{scrollGroup.categoryChar.toLowerCase()}}"\n' +
  '                        *ngIf="scrollGroup.categoryList.length > 0"\n' +
  '                        [hidden]="scrollGroup.hide"' +
  '                         class="vp-alpha-scroll-item-divider">' +
  '                         <!--adds padding to the list so the header isn\'t covering it-->{{addListPadding()}}\n' +
  '        <span>{{scrollGroup.categoryChar}}</span>\n' +
  '      </ion-item-divider>\n' +
  '      <ion-item-sliding *ngFor="let item of scrollGroup.categoryList"\n' +
  '                        [hidden]="item.hide">\n' +
  '        <ion-item (click)="onItemClick(item)">\n' +
  '          <ion-avatar item-start *ngIf="!displayContactPhoto && item.photoUri "><img [src]="item.photoUri"></ion-avatar>\n' +
  '          <div id="vp-alpha-scroll-firstName" *ngIf="sortByFirstName">\n' +
  '            <span [innerHTML]="item.title"></span><span [innerHTML]="item.firstName"></span><span\n' +
  '            [innerHTML]="delimiter"></span>&nbsp;<span [innerHTML]="item.lastName"></span>\n' +
  '          </div>\n' +
  '          <div id="vp-alpha-scroll-lastName" *ngIf="!sortByFirstName">\n' +
  '            <span [innerHTML]="item.lastName"></span><span [innerHTML]="delimiter"></span>&nbsp;<span\n' +
  '            [innerHTML]="item.title"></span><span [innerHTML]="item.firstName"></span>\n' +
  '          </div>\n' +
  '        </ion-item>\n' +
  '        <ion-item-options side="left">\n' +
  '          <!--<button ion-button (click)="button1Event"><ion-icon [name]="button1Icon"></ion-icon>{{button1Title}}</button>-->\n' +
  '          <!--<button ion-button (click)="button2Event"><ion-icon [name]="button2Icon"></ion-icon>{{button2Title}}</button>-->\n' +
  '          <!--<button ion-button (click)="button3Event"><ion-icon [name]="button3Icon"></ion-icon>{{button3Title}}</button>-->\n' +
  '        </ion-item-options>\n' +
  '      </ion-item-sliding>\n' +
  '    </div>\n' +
  '  </ion-list>\n' +
  '\n' +
  '  <ul id="alpha-scroll-bar">\n' +
  '    <li><span (click)="scrollToElement(\'a\')">A</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'b\')">B</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'c\')">C</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'d\')">D</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'e\')">E</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'f\')">F</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'g\')">G</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'h\')">H</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'i\')">I</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'j\')">J</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'k\')">K</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'l\')">L</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'m\')">M</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'n\')">N</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'o\')">O</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'p\')">P</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'q\')">Q</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'r\')">R</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'s\')">S</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'t\')">T</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'u\')">U</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'v\')">V</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'w\')">W</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'x\')">X</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'y\')">Y</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'z\')">Z</span></li>\n' +
  '    <li><span (click)="scrollToElement(\'#\')">#</span></li>\n' +
  '  </ul>\n' +
  '</ion-content>\n',

  styles: ['vp-alpha-scroll > ion-content > div.scroll-content {\n' +
  '  margin-top: 0px !important;\n' +
  '  padding: 0px !important;\n' +
  '}\n' +
  '\n' +
  'vp-alpha-scroll > * {\n' +
  '  font-family: Arial, sans-serif;\n' +
  '\n' +
  '}\n' +
  '\n' +
  '//this class needs to be dynamically injected to the head\n' +
  '//.vp_content_placement{\n' +
  '//  margin-top: 0px !important;\n' +
  '//  padding: 0px !important;\n' +
  '//}\n' +
  '\n' +
  '#alpha-scroll-bar {\n' +
  '  transform: translate(0%, -50%);\n' +
  '  list-style-type: none;\n' +
  '  right: 0;\n' +
  '  top: 0;\n' +
  '  top: 50%;\n' +
  '  position: fixed;\n' +
  '  height: 70%;\n' +
  '  margin-right: 2vw;\n' +
  '  z-index: 1000;\n' +
  '}\n' +
  '\n' +
  '#alpha-scroll-bar > li:nth-child(1) {\n' +
  '  background: rgba(245, 245, 245, .75);\n' +
  '  border-top-left-radius: 50% !important;\n' +
  '  border-top-right-radius: 50% !important;\n' +
  '  padding-top: 2vw;\n' +
  '}\n' +
  '\n' +
  '#alpha-scroll-bar > li:last-of-type {\n' +
  '  border-bottom-left-radius: 50% !important;\n' +
  '  border-bottom-right-radius: 50% !important;\n' +
  '  padding-bottom: 8vw;\n' +
  '}\n' +
  '\n' +
  '#alpha-scroll-bar > li {\n' +
  '  padding: 1vw;\n' +
  '  height: 2.5vh;\n' +
  '  min-height: 2.5vh;\n' +
  '  display: block;\n' +
  '  color: black;\n' +
  '  background: rgba(245, 245, 245, .75);\n' +
  '}\n' +
  '\n' +
  '#alpha-scroll-bar > li > span,\n' +
  '#alpha-scroll-bar > li > span:hover,\n' +
  '#alpha-scroll-bar > li > span:active,\n' +
  '#alpha-scroll-bar > li > span:visited {\n' +
  '  padding-top: 50%;\n' +
  '  display: block;\n' +
  '  text-decoration: none;\n' +
  '  color: gray;\n' +
  '  text-align: center;\n' +
  '}\n' +
  '\n' +
  '.vp-alpha-scroll-item-divider {\n' +
  '  background: #EEEEEE;\n' +
  '  color: black !important;\n' +
  '  border: none;\n' +
  '  font-weight: 700;\n' +
  '}\n' +
  '\n' +
  '#vp-alpha-scroll-firstName { //highlight by the sorted word\n' +
  '  font-weight: 500;\n' +
  '}\n' +
  '\n' +
  '#vp-alpha-scroll-firstName > span:nth-child(2) {\n' +
  '  font-weight: 700;\n' +
  '}\n' +
  '\n' +
  '#vp-alpha-scroll-lastName { //highlight by the sorted word\n' +
  '  font-weight: 500;\n' +
  '}\n' +
  '\n' +
  '#vp-alpha-scroll-firstName > span:nth-child(1) {\n' +
  '  font-weight: 700;\n' +
  '}\n']
})
export class AlphaScrollComponent {

  private searchTerm: string;
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

  private isListPaddingSet = false;

  @Input()
  set init(initParams: AlphaScrollInit) {
    console.log(initParams);
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

    this.scrollGroups = this._alphaData.createAlphaScrollGroups(this.scrollList, initParams.casing, this.sortByFirstName);
    console.log(this.scrollGroups);
    this.setContentMargins();

  }

  @Output() onClick = new EventEmitter<AlphaScrollItem>();


  @Output() button1EventEmitter = new EventEmitter<any>();
  @Output() button2EventEmitter = new EventEmitter<any>();
  @Output() button3EventEmitter = new EventEmitter<any>();
  @ViewChild(Content) content: Content;

  private scrollGroups: AlphaScrollGroups;

  constructor(private _alphaData: AlphaDataProvider) {

  }

  /**
   * adjust the ion-content margins so the layout displays properly
   */
  private setContentMargins() {
    //dynamically add css for no margins or padding
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.vp_content_placement { margin-top: 0px !important; padding: 0px !important; }';
    document.getElementsByTagName('head')[0].appendChild(style);

    let vp_scroll = document.getElementsByTagName("vp-alpha-scroll");
    let scrollContent = vp_scroll[0].getElementsByClassName("scroll-content")[0];
    scrollContent.classList.add("vp_content_placement");
  }

  /**
   * Add paddign so the list view is visible
   */
  private addListPadding() {
    if (!this.isListPaddingSet) {//limit to one run
      this.isListPaddingSet = true;
      let dividers = document.getElementsByClassName('vp-alpha-scroll-item-divider');
      console.log("dividers", dividers);
      let dividerRect = dividers[0].getBoundingClientRect();

      let list = document.getElementById("vp-alpha-scroll-list");
      list.style.marginTop = dividerRect.height + "px";
    }

  }

  /**
   * Callback when item is clicked
   * @param {AlphaScrollItem} alphaItem
   */
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

  /**
   * Scrolls to the selected header
   * @param {string} id
   */
  scrollToElement(id: string) {
    try {
      let element = document.getElementById('vp-alpha-scroll-'+id);
      let anchorRect = element.getBoundingClientRect();
      let dividers = document.getElementsByTagName("ion-item-divider");
      let dividerHeight = dividers[0].getBoundingClientRect().top;
      console.log(dividers);
      this.content.scrollTo(0, anchorRect.top - dividerHeight, 350);
    } catch (e) {
      console.log('failed to scroll to id', id);
    }
  }

  searchList() {
    console.log("search by term", this.searchTerm);
    this._alphaData.searchList(this.scrollGroups, this.searchTerm);
  }
}
