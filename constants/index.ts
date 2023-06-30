import { ContactProps } from "../interface";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

export const SocialList: Array<ContactProps> = [
  {
    network: "@decimomrtn",
    link: "https://www.instagram.com/decimomrtn",
    icon: BsInstagram,
  },
  {
    network: "@decimozs",
    link: "https://github.com/decimozs",
    icon: BsGithub,
  },
  {
    network: "@decimomartin",
    link: "https://www.linkedin.com/in/decimomartin",
    icon: BsLinkedin,
  },
];
