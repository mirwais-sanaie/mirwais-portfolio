import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants/index";

function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function toggleMenuOpen() {
    setIsMobileOpen((isMobileOpen) => !isMobileOpen);
  }
  function handleLinkClick(e, href) {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileOpen(false);
  }

  return (
    <div>
      <nav className="fixed left-0 z-50 right-0 lg:top-4">
        {/* desktop menu  */}
        <div className="mx-auto hidden lg:flex rounded-full border border-white/30 py-2 backdrop-blur-lg max-w-2xl items-center justify-center">
          <div className="flex items-center justify-between gap-10">
            <div>
              <a href="">
                <span className="uppercase font-black">Mirwais sanaie</span>
              </a>
            </div>

            <div>
              <ul className="flex items-center gap-6">
                {NAVIGATION_LINKS.map((item, i) => {
                  return (
                    <li key={i}>
                      <a
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className="text-white hover:text-gray-300"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className="lg:hidden backdrop-blur-md py-2 px-4">
          <div className="flex items-center justify-between">
            <div>
              <a href="">
                <span className="uppercase pl-2">Mirwais Sanaie</span>
              </a>
            </div>

            <div className="flex items-center">
              <button
                className="outline-none lg:hidden"
                onClick={toggleMenuOpen}
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              >
                {isMobileOpen ? (
                  <RiCloseLine className="m-2 h-6 w-5" />
                ) : (
                  <RiMenu3Line className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            {isMobileOpen && (
              <ul className="flex flex-col my-4 ml-4 gap-6 backdrop-blur-md">
                {NAVIGATION_LINKS.map((item, i) => {
                  return (
                    <li key={i}>
                      <a
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className="block w-full text-lg"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
