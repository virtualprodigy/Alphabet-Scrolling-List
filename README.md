# Alphabet-Scrolling-List
This is an open-source project to provide an easy to use Alphabet Scrolling List. A great use-case for this is a contact list.
This library is in it's early stages, so please bare with me. If you see any issues please leave them on the Github Repo's list list. Feel free to create Pull-Request if you know of a useful improve. 
https://github.com/virtualprodigy/Alphabet-Scrolling-List

#Intro
Thank you for using this small library I created. It's purpose is to provide an easy and resusble alphabetical scrolling list.

#Setup

####Module Setup
In your moudle import the following
import {AlphaScrollModule, AlphaScrollComponent} from 'vp-alphabetical-scroller/vp-alphabetical-scroller';

Add to the imports
AlphaScrollModule

Add to entryComponents
AlphaScrollComponent

####Component Setup
In your component add
import {AlphaScrollInit, AlphaScrollItem} from 'vp-alphabetical-scroller/vp-alphabetical-scroller';

Create an AlphaScrollInit object. Pass the cnstructor a list of AlphaScrollItem [];
this.init = new AlphaScrollInit(this.list);

In your Html 
Pass the directive your init object and optional register to the onClick event emitter.  The onClick event returns a AlphaScrollItem
<vp-alpha-scroll [init]="init" (onClick)="sampleClick($event)" ></vp-alpha-scroll>

#Usage
AlphaScrollInit: use this to configure how to you want the scroll list to behavoir. Below are the constructor params
  scrollList: AlphaScrollItem [];
  casing: CasingEnums; (optional)
       CasingEnums = upper, lower,capFirst
  sortByFirstName: boolean; (optional)
  delimiter: string; (optional)
  displayContactPhoto: boolean; (optional)
  
AlphaScrollItem: Used to define list of objects sent to the directive
  title?: string; (i.e. Mr. or Mrs.)
  firstName: string;
  lastName: string;
  object?: any;  (Optional param if you want the item to hold onto some data to passed back onClick)
  photoUri?: string; (optional string url for list photo)
  hide?:boolean; (private property to handle the items display)

#Issues
Feel free to ost issues on the GitHub Page

#Pull Request
For a pull request, fork the latest code and create your change. Then submit a pull request to the GitHub account. Upon review, your change maybe pulled in.

#License 
  Apache License Version 2.0, Copyright [2017] [VirtualProdigy]
