import { NavLink } from "react-router-dom"
import { navbarData } from "../../utils/navbardata";
import logo from "/Logo.webp"
import Button from "../Button"
export default function Header() {
  return (
    <header className="flex items-center justify-between text-primary p-3 bg-white/30 border-b">
    {/* logo */}
    
    <div className=" font-heading font-bold text-xl flex gap-1 items-center">
    <div>
    <img src={logo} className="h-10"></img>
    </div><span>Esumakeover</span></div>

    {/* nav items */}
    <nav className="hidden md:flex gap-10 text-[1.2rem]">
        {
            navbarData.map((Item,ind)=><NavLink to={Item.path} key={ind}>{Item.element}</NavLink>)
        }
    </nav>
  <Button/>
    </header>
  )
}
