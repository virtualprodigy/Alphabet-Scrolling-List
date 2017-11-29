import { NgModule } from '@angular/core';
import { AlphaScrollComponent } from './alpha-scroll/alpha-scroll';
import {AlphaDataProvider} from "../providers/alpha-data/alpha-data";
import {IonicPageModule} from "ionic-angular";
@NgModule({
	declarations: [AlphaScrollComponent],
	imports: [IonicPageModule.forChild(AlphaScrollComponent)],
	exports: [AlphaScrollComponent],
  providers:[AlphaDataProvider]
})
export class AlphaScrollModule {}
