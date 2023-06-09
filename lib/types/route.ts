import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface route {
    path: string;
    icon: IconProp;
    name: string;
    isGroup: boolean;
    children?: route[];
    parent?: string;
}