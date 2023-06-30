import { IconType } from "react-icons";

export interface HighlightsProps {
  label: string;
  link?: string;
  naviTo?: string;
}

export interface ContactProps {
  network: string;
  link: string;
  icon: IconType;
}
