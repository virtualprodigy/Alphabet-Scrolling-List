import { NavController } from 'ionic-angular';
import { AlphaScrollInit } from "../../assets/models/AlphaScrollInit";
import { AlphaScrollItem } from "../../assets/models/AlphaScrollItem";
export declare class HomePage {
    navCtrl: NavController;
    list: AlphaScrollItem[];
    init: AlphaScrollInit;
    constructor(navCtrl: NavController);
    sampleClick(event: AlphaScrollItem): void;
}
