import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {samples} from "../../assets/data/SampleData";
import {AlphaScrollInit} from "../../assets/models/AlphaScrollInit";
import {AlphaScrollItem} from "../../assets/models/AlphaScrollItem";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list = samples;
  init:AlphaScrollInit;
  constructor(public navCtrl: NavController) {
    this.init = new AlphaScrollInit(this.list);
    console.log("creating init", this.init);
  }

  sampleClick(event: AlphaScrollItem){
    console.log("you clicked me", event);
  }
}
