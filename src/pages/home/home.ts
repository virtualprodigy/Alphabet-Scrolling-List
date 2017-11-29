import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {samples} from "../../assets/data/SampleData";
import {AlphaScrollInit} from "../../assets/models/AlphaScrollInit";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list = samples;
  init:AlphaScrollInit;
  constructor(public navCtrl: NavController) {
    this.init = new AlphaScrollInit(this.list);
  }

  sample(event){
    console.log("you clicked me", event);
  }
}
