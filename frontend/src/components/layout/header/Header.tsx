"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HeaderProps } from "@/src/types/layout";

const navItems = [
  { href: "/sobre", label: "Sobre" },
  { href: "/cacadas", label: "Caçadas" },
  { href: "/parcerias", label: "Parcerias" },
  { href: "/contactos", label: "Contactos" },
];

function Header({ isFixedHeader = false }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const isPinned = isFixedHeader || isScrolled;

  const desktopLinkClass = (href: string) => {
    const isActive = pathname === href;

    return [
      "relative px-0 py-1",
      isPinned ? "text-[#897160]" : "text-white",
      isActive
        ? "font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:border-b-[3px] after:border-[#DF4921] after:content-['']"
        : "",
    ].join(" ");
  };

  return (
    <header
      className={[
        "left-0 right-0 z-[1030]",
        isPinned ? "fixed top-0 bg-white" : "absolute top-0",
      ].join(" ")}
    >
      <nav className="p-0">
        <div className="relative mx-auto max-w-7xl px-4 py-[15px] sm:px-6 lg:px-8">
          <Link
            href="/"
            className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-6 lg:left-8"
          >
            <span
              className={[
                "text-lg font-bold tracking-[0.2em]",
                isPinned ? "text-[#897160]" : "text-white",
              ].join(" ")}
            >
              NORTECACA
            </span>
          </Link>

          <button
            onClick={toggleNav}
            className="ml-auto block p-2 md:hidden"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            {isNavOpen ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1L1 13"
                  stroke="#4F4F4F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L13 13"
                  stroke="#4F4F4F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 9C24 9.26522 23.8946 9.51957 23.7071 9.70711C23.5196 9.89464 23.2652 10 23 10H1C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9C0 8.73478 0.105357 8.48043 0.292893 8.29289C0.48043 8.10536 0.734784 8 1 8H23C23.2652 8 23.5196 8.10536 23.7071 8.29289C23.8946 8.48043 24 8.73478 24 9ZM1 2H23C23.2652 2 23.5196 1.89464 23.7071 1.70711C23.8946 1.51957 24 1.26522 24 1C24 0.734784 23.8946 0.48043 23.7071 0.292893C23.5196 0.105357 23.2652 0 23 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM23 16H1C0.734784 16 0.48043 16.1054 0.292893 16.2929C0.105357 16.4804 0 16.7348 0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H23C23.2652 18 23.5196 17.8946 23.7071 17.7071C23.8946 17.5196 24 17.2652 24 17C24 16.7348 23.8946 16.4804 23.7071 16.2929C23.5196 16.1054 23.2652 16 23 16Z"
                  fill={isPinned ? "#897160" : "white"}
                />
              </svg>
            )}
          </button>

          <div id="navbarNav" className="hidden justify-center md:flex">
            <ul className="m-0 flex list-none items-center p-0">
              {navItems.map((item) => (
                <li key={item.href} className="mx-[15px]">
                  <Link
                    className={desktopLinkClass(item.href)}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {isNavOpen ? (
            <div className="mt-4 border-t border-black/10 pt-4 md:hidden">
              <ul className="m-0 list-none space-y-2 p-0">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      onClick={closeNav}
                      className={[
                        "block rounded px-2 py-2",
                        pathname === item.href
                          ? "bg-[#DF4921]/10 font-semibold text-[#897160]"
                          : "text-[#897160]",
                      ].join(" ")}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-[15px]">
                <img src="/assets/images/insta-dark.png" alt="Instagram" />
                <img src="/assets/images/youtube-dark.png" alt="YouTube" />
                <img src="/assets/images/twitter-dark.png" alt="Twitter" />
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

export default Header;
