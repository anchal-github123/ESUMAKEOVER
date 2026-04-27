import { FiHome } from "react-icons/fi";
import { HiMiniScissors } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { MdAddCall } from "react-icons/md";

export const navbarData=[
    {path:"/",
    element:"Home",
    icon:<FiHome/>
    
    },
    {path:"/About",
    element:"About",
    icon:<BsStars/>
  
    },
    {path:"/Services",
    element:"Services",
   icon:<HiMiniScissors/>

    },
    {path:"/Contact",
    element:"Contact",
    icon:<MdAddCall/>
    }
]