import { useState } from "react";
import { Button } from "./ui/button";
import logo from "/src/assets/logo.png";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const navigationDetails = [
    { section: "Home", id: "#home" },
    { section: "About", id: "#about" },
    { section: "Projects", id: "#projects" },
    {section: "Education",id:"#education"},
    {section: "Achievements",id:"#achievements"},
    { section: "Contact", id: "#contact" },
  ];

  return (
    <>
      <section>
        <nav class="bg-[linear-gradient(90deg,var(--gold-rich),var(--gold-rich),var(--gold-rich))] fixed z-30 w-full flex h-15">
          <div className="ml-5 mt-2">
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
              className={`absolute top-4 left-18 transition-all duration-300 ${
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
          <div className="grow-2 mt-4">
            <ul className="flex justify-center gap-12 font-poppins text-lg font-semibold text-gray-200">
              {navigationDetails.map((item) => (
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
              ))}
            </ul>
          </div>
          <div className="relative mr-7 mt-3 flex flex-col items-center">
            <Button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-10 h-10 rounded-full animate-bounce bg-black text-white font-bold shadow-[0_0_15px_rgba(255,215,0,0.6)] cursor-pointer"
            >
              AI
            </Button>

            <div
              className={`absolute top-1 right-15 transition-all duration-300 ${
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
        </nav>
      </section>
    </>
  );
}

export default Navbar;
