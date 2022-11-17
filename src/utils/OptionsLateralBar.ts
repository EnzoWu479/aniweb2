import { AiFillEye, AiFillLike, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import {
  BsFillHouseFill,
} from "react-icons/bs";
import { FaTiktok, FaUserPlus } from "react-icons/fa";

export default [
  {
    icon: BsFillHouseFill,
    name: "Página inicial",
    href: "/home",
  },
  {
    icon: AiOutlineInstagram,
    name: "Instagram",
    href: "/entretenimento",
    child: [
      {
        icon: FaUserPlus,
        name: "Seguidores",
        href: ""
      },
      {
        icon: AiFillLike,
        name: "Likes",
        href: ""
      },
      {
        icon: AiFillEye,
        name: "Vizualizações",
        href: ""
      },
    ]
  },
  {
    icon: FaTiktok,
    name: "Tiktok",
    href: "/entretenimento",
    child: [
      {
        icon: FaUserPlus,
        name: "Seguidores",
        href: ""
      },
      {
        icon: AiFillLike,
        name: "Likes",
        href: ""
      },
      {
        icon: AiFillEye,
        name: "Vizualizações",
        href: ""
      },
    ]
  },
  {
    icon: AiFillYoutube,
    name: "Youtube",
    href: "/entretenimento",
    child: [
      {
        icon: FaUserPlus,
        name: "Seguidores",
        href: ""
      },
      {
        icon: AiFillLike,
        name: "Likes",
        href: ""
      },
      {
        icon: AiFillEye,
        name: "Vizualizações",
        href: ""
      },
    ]
  },
  
];
