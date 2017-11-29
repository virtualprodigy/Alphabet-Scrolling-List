import { EventEmitter } from '@angular/core';
import { AlphaScrollItem } from "../../assets/models/AlphaScrollItem";
import { AlphaDataProvider } from "../../providers/alpha-data/alpha-data";
import { AlphaScrollInit } from "../../assets/models/AlphaScrollInit";
import { Content } from "ionic-angular";
/**
 * Generated class for the AlphaScrollComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class AlphaScrollComponent {
    private _alphaData;
    private searchTerm;
    private scrollList;
    private sortByFirstName;
    private delimiter;
    private displayContactPhoto;
    private button1Title?;
    private button1Icon?;
    private button2Title?;
    private button2Icon?;
    private button3Title?;
    private button3Icon?;
    init: AlphaScrollInit;
    onClick: EventEmitter<AlphaScrollItem>;
    button1EventEmitter: EventEmitter<any>;
    button2EventEmitter: EventEmitter<any>;
    button3EventEmitter: EventEmitter<any>;
    content: Content;
    private scrollGroups;
    constructor(_alphaData: AlphaDataProvider);
    private onItemClick(alphaItem);
    /**
     * Event callback for slide option button 1
     */
    private button1Event();
    /**
     * Event callback for slide option button 2
     */
    private button2Event();
    /**
     * Event callback for slide option button 3
     */
    private button3Event();
    /**
     * Scrolls to the selected header
     * @param {string} id
     */
    scrollToElement(id: string): void;
    searchList(): void;
}
