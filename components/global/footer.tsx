"use client";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-white px-4 md:px-12 pt-20 sm:pt-28">
      <div className="border-t border-[rgba(110,121,122,.3)] pt-14 sm:pt-16 mb-20 md:mb-52 flex flex-col md:flex-row justify-between gap-12">
        {/* Column 1 - Logo */}
        <div className="flex flex-col justify-between text-2xl sm:text-3xl">
          <Image src="/TBH_Logo.jpg" alt="Logo" width={50} height={50} />
        </div>

        {/* Column 2 - Contact + Social */}
        <div className="flex flex-col items-start justify-center space-y-6">
          <div className="space-y-2 text-sm sm:text-base leading-relaxed">
            <a
              href="tel:+41223187910"
              className="hover:underline block text-base sm:text-lg"
            >
              +03-7480 2492
            </a>
            <a
              href="mailto:info@blackfountaincapital.com"
              className="hover:underline block text-base sm:text-lg"
            >
              info@blackfountaincapital.com
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/company/blackfountaincapital/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 hover:text-gray-300 text-base sm:text-lg"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Column 3 - Links + Credits */}
        <div className="flex flex-col justify-between">
          <ul className="space-y-2 text-sm sm:text-base mb-6">
            <li>
              <Link
                href="/terms-conditions"
                className="hover:underline text-base sm:text-lg"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:underline text-base sm:text-lg"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
          <p className="text-sm sm:text-lg text-[#6e797a]">
            Branding &amp; Website by{" "}
            <a
              href="https://fableco.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Fable&amp;Co.
            </a>
          </p>
        </div>
      </div>

      {/* Torn paper bg */}
      <img
        src="https://www.blackfountaincapital.com/wp-content/themes/bf/images/footer-bg.png"
        alt=""
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
      />
    </footer>
  );
}
