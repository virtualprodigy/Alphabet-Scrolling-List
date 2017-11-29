import {AlphaScrollItem} from "./AlphaScrollItem";

export class AlphaScrollInit {
  scrollList: AlphaScrollItem [];
  sortByFirstName: boolean;
  delimiter?: string;
  displayContactPhoto: boolean;
  button1Title: string;
  button1Icon: string;
  button2Title: string;
  button2Icon: string;
  button3Title: string;
  button3Icon: string;

  constructor(scrollList: AlphaScrollItem[],
              sortByFirstName: boolean = true,
              delimiter: string = ',',
              displayContactPhoto: boolean = false,
              button1Title?: string,
              button1Icon?: string,
              button2Title?: string,
              button2Icon?: string,
              button3Title?: string,
              button3Icon?: string) {
    this.scrollList = scrollList;
    this.sortByFirstName = sortByFirstName;
    this.delimiter = delimiter;
    this.displayContactPhoto = displayContactPhoto;
    this.button1Title = button1Title;
    this.button1Icon = button1Icon;
    this.button2Title = button2Title;
    this.button2Icon = button2Icon;
    this.button3Title = button3Title;
    this.button3Icon = button3Icon;
  }
}
