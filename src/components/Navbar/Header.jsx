import { NavLink } from "react-router-dom"
import { navbarData } from "../../utils/navbardata";
import logo from "/Logo.webp"
import Button from "../Button"
export default function Header() {
  return (
    <header className="flex items-center justify-between text-primary px-3 py-2 bg-white/30 border-b">
    {/* logo */}
    
    <div className=" font-heading font-bold text-xl flex gap-1 items-center">
    <div>
    <img src={logo} className="h-10 " loading="lazy"></img>
    </div><span>Esumakeover</span></div>

    {/* nav items */}
    <nav className="hidden md:flex gap-10 text-[1.2rem]">
        {
            navbarData.map((Item,ind)=><NavLink to={Item.path} key={ind}>{Item.element}</NavLink>)
        }
    </nav>
  <a
  href="tel:+916372294113"
  className="inline-flex items-center justify-center gap-2 px-6 py-3 mt-3 mb-3 
  bg-gradient-to-r from-pink-500 to-rose-500 
  hover:from-rose-500 hover:to-tertiary 
  text-white font-semibold rounded-full 
  shadow-lg hover:shadow-xl 
  transition-all duration-300 
  md:text-lg"
>
  📞 Call Now
</a>
  
    </header>
  )
}
