import { CgFacebook } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

export const SOCIAL_MEDIA_LINKS = [
  { icon: <CgFacebook />, link: "" },
  { icon: <AiFillInstagram />, link: "" },
  { icon: <BiLogoLinkedin />, link: "" },
  { icon: <RiTwitterXFill />, link: "" },
];

export const FOOTER_MENU_LINKS = [
  {
    title: "QUICK LINKS",
    links: [
      { name: "Home", isUrl: true, url: "" },
      { name: "Profile", isUrl: true, url: "" },
      { name: "Products", isUrl: true, url: "" },
      { name: "Careers", isUrl: true, url: "" },
    ],
  },
  {
    title: "QUICK CONTACT",
    links: [
      { name: "Feel free to call", isUrl: false },
      { name: "040-23771229", isUrl: false },
      { name: "chat us", isUrl: false },
    ],
  },
  {
    title: "OUR ADDRESS",
    links: [
      { name: "Plot. no.: S-9, TIE, Phase ", isUrl: false },
      { name: "2Balanagar, Hyderabad, Telangana", isUrl: false },
      { name: "State - 500037.", isUrl: false },
    ],
  },
];
