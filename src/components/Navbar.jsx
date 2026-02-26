import { useState } from "react";
import { Button } from "./ui/button";
import logo from "/src/assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  
  const [isHovered, setIsHovered] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationDetails = [
    { section: "Home", id: "#home" },
    { section: "About", id: "#about" },
    { section: "Projects", id: "#projects" },
    { section: "Education", id: "#education" },
    { section: "Achievements", id: "#achievements" },
    { section: "Contact", id: "#contact" },
  ];

  return (
    <nav className="bg-[linear-gradient(90deg,var(--gold-rich),var(--gold-rich),var(--gold-rich))] fixed z-30 w-full">
      <div className="flex items-center justify-between h-14 px-4 md:px-6">
        <div className="relative flex items-center">
          <a href="#">
            <img
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
              src={logo}
              alt="logo"
              className="h-10 w-10 rounded-full"
            />
          </a>
          <span
            className={`absolute top-2 left-11 xl:top-2 xl:left-12 transition-all duration-300 whitespace-nowrap ${
              isLogoHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <p className="text-xs bg-black/80 text-yellow-400 px-3 py-1 rounded-md backdrop-blur-md border border-yellow-400/30 shadow-md">
              Hi 😉
            </p>
          </span>
        </div>

        <ul className="hidden md:flex justify-center gap-10 font-poppins text-lg font-semibold text-gray-200">
          {navigationDetails.map((item) => (
            <li key={item.id}>
              <a
                href={item.id}
                className="relative cursor-pointer group transition-all duration-300"
              >
                <span className="group-hover:text-white transition-colors duration-300">
                  {item.section}
                </span>
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 
                    bg-gradient-to-r from-white via-gray-300 to-gray-500
                    transition-all duration-300 group-hover:w-full"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="relative flex flex-col items-center">
            <Button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-5 h-8 xl:w-10 xl:h-10 rounded-full xl:animate-bounce bg-black text-white font-bold shadow-[0_0_15px_rgba(255,215,0,0.6)] cursor-pointer"
            >
              AI
            </Button>
            <div
              className={`absolute top-1 right-9  md:top-2 md:right-12 transition-all duration-300 ${
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <p className="w-28 text-xs bg-black/80 text-yellow-400 px-3 py-1 rounded-md backdrop-blur-md border border-yellow-400/30 shadow-md">
                Coming Soon...
              </p>
            </div>
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-0 font-poppins font-semibold text-gray-200 bg-black/30 backdrop-blur-md pb-4">
          {navigationDetails.map((item) => (
            <li key={item.id} className="w-full text-center">
              <a
                href={item.id}
                onClick={() => setMenuOpen(false)}
                className="block w-full py-3 text-base hover:text-white hover:bg-white/10 transition-colors duration-200"
              >
                {item.section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
