import { useState } from "react";

import Logo from "../common/Logo";
import Search from "../common/Search";
import IconButton from "../ui/IconButton";
import { navigationLinks } from "../../constants/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-4 py-3 sm:px-6">
      <div
        className="
          container-site
          relative
          rounded-full
          border
          border-white/10
          bg-white/4
          px-4
          py-3
          shadow-glass
          backdrop-blur-xl
        "
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav
            aria-label="التنقل الرئيسي"
            className="hidden flex-1 justify-center lg:flex"
          >
            <ul className="flex items-center gap-5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      text-small
                      whitespace-nowrap
                      transition-colors
                      duration-300
                      hover:text-cyan-200
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Search */}
          <Search />

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <IconButton
              label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span
                className={`text-lg transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </IconButton>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <div
          className={`
            grid
            transition-all
            duration-300
            lg:hidden
            ${
              isMenuOpen
                ? "mt-4 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <nav
              aria-label="التنقل على الهاتف"
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/3
                p-4
                backdrop-blur-xl
              "
            >
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="
                        block
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        text-white/70
                        transition
                        duration-300
                        hover:bg-cyan-200/6
                        hover:text-cyan-100
                      "
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-4 lg:hidden">
                <Search />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
