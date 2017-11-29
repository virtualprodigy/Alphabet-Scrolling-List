import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {samples} from "../../assets/data/SampleData";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list = samples;
  constructor(public navCtrl: NavController) {
    console.log("list", this.list);
  }

  sample(event){
    console.log("you clicked me", event);
  }
}
