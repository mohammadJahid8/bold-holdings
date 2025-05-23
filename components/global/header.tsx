"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // You can use Lucide icons or any icon library
import Logo from "./logo";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 w-full bg-[#252525] px-4 md:px-12 transition-all duration-600 py-4 md:py-[60px] z-[100]"
      animate={{ y: visible ? 0 : -152 }}
      transition={{ duration: visible ? 0.1 : 0.1, ease: "easeInOut" }}
    >
      <div className="flex justify-between items-center">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:block ml-auto">
          <ul className="flex gap-x-8 text-white">
            <li>
              <a
                href="#mission"
                className="hover:underline uppercase text-base font-thin tracking-[-.04em] text-secondary-foreground"
                style={{
                  wordSpacing: "0.4em",
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:underline uppercase text-base font-thin tracking-[-.04em] text-secondary-foreground"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:underline uppercase text-base font-thin tracking-[-.04em] text-secondary-foreground"
              >
                Team
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 md:hidden"
        >
          <ul className="flex flex-col gap-y-4 text-white">
            <li>
              <a
                href="#mission"
                className="hover:underline uppercase text-base font-thin tracking-[-.04em] text-secondary-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:underline uppercase text-base font-thin tracking-[-.04em] text-secondary-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:underline uppercase text-base font-thin tracking-[-.04em] text-secondary-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}
