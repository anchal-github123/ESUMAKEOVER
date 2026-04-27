import { useEffect, useState } from "react";
import { navbarData } from "../../utils/navbardata";
import { NavLink } from "react-router-dom";

export default function MobileScreenNav() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`z-40 md:hidden bg-gray-200 rounded-tl-3xl rounded-tr-3xl fixed bottom-0 w-full transition-transform duration-300 ${
        showNav ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <nav className="flex items-center justify-center w-screen p-4 gap-12 text-[1rem]">
        {navbarData.map((Item, ind) => (
          <NavLink
            key={ind}
            to={Item.path}
            className="text-primary sm:text-[1.2rem] hover:text-tertiary"
          >
            <div>{Item.icon}</div>
            {Item.element}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}