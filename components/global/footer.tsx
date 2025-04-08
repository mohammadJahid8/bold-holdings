"use client";
import { Linkedin } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-white px-4 md:px-12 pt-[82px]">
      <div className="border-t border-[rgba(110,121,122,.3)] pt-14 sm:pt-12 mb-20 md:mb- flex flex-col md:flex-row justify-between gap-12">
        {/* Column 1 - Logo */}
        <div className="flex flex-col justify-between text-2xl sm:text-3xl">
          <Logo className="w-16 h-16" />
        </div>

        {/* Column 2 - Contact + Social */}
        <div className="flex md:flex-row flex-col items-start justify-between gap-6 md:gap-28">
          <div className="flex flex-col items-start justify-center space-y-6">
            <div className="space-y-2 text-sm sm:text-base leading-relaxed">
              <p className="text-gray-500 text-lg md:pb-3">Contact us</p>

              <a
                href="mailto:business@thebold.holdings"
                className="hover:underline block text-base"
              >
                business@thebold.holdings
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center space-y-6">
            <div className="space-y-2 text-sm sm:text-base leading-relaxed">
              <p className="text-gray-500 text-lg md:pb-3">Connect with us</p>

              <a
                href="https://my.linkedin.com/company/theboldholdings?trk=public_profile_topcard-current-company"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 hover:text-gray-300 text-base"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Column 3 - Links + Credits */}
          <div className="flex flex-col justify-between">
            <ul className="space-y-2 text-sm sm:text-base mb-6">
              <p className="text-gray-500 text-lg md:pb-3">Located at</p>
              <li>The Dune @ Light Grey</li>
              <li>
                No. 29-1, Pusat Komersial LGSB,
                <br /> Jalan LGSB 1/1, Off Jalan Hospital,
                <br /> 47000, Sungai Buloh, Selangor,
                <br /> Malaysia
              </li>
            </ul>
            <p className="text-[10px] text-[#6e797a]">
              THE BOLD HOLDINGS SDN BHD © ALL RIGHTS RESERVED
            </p>
          </div>
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
