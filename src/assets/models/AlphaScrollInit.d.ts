import { AlphaScrollItem } from "./AlphaScrollItem";
import { CasingEnums } from "../enums/casing.enums";
export declare class AlphaScrollInit {
    scrollList: AlphaScrollItem[];
    casing: CasingEnums;
    sortByFirstName: boolean;
    delimiter: string;
    displayContactPhoto: boolean;
    button1Title: string;
    button1Icon: string;
    button2Title: string;
    button2Icon: string;
    button3Title: string;
    button3Icon: string;
    constructor(scrollList: AlphaScrollItem[], sortByFirstName?: boolean, casing?: CasingEnums, delimiter?: string, displayContactPhoto?: boolean, button1Title?: string, button1Icon?: string, button2Title?: string, button2Icon?: string, button3Title?: string, button3Icon?: string);
}
