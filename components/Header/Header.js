"use client";

import Link from "next/link";
import Image from "next/image";
import { MainMenu } from "components/MainMenu";
import { useState } from "react";

export const Header = ({ mainMenuItems, callToActionButton, logo }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const mobileMenuClasses = ``;

  return (
    <div className="bg-white text-gray-800 px-4 sticky top-0 z-20 shadow-[0_4px_70px_0_rgba(30,40,52,0.08)]">
      <div className="flex items-center max-w-[1346px] mx-auto h-[60px] md:h-[84px]">
        <Link href="/" className="py-4">
          <Image
            alt="Logo"
            src={logo.sourceUrl}
            width={logo.mediaDetails.width}
            height={logo.mediaDetails.height}
          />
        </Link>

        <div
          className={`flex-1 justify-end absolute top-full left-0 w-full bg-white ${
            isMobileMenuVisible ? "" : "hidden"
          } md:flex md:static md:w-auto xl:mr-[100px]`}
        >
          <MainMenu items={mainMenuItems} />
        </div>

        <div className="ml-3 my-auto hidden lg:block">
          <Link href={callToActionButton.url} className="btn">
            {callToActionButton.title}
          </Link>
        </div>

        <div
          className="flex justify-end cursor-pointer md:hidden ml-auto"
          onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
        >
          {isMobileMenuVisible && (
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative left-1.5"
            >
              <path
                d="M9.26367 8.23682L26.2342 25.2074L24.6786 26.763L7.70804 9.79245L9.26367 8.23682Z"
                fill="#1D2939"
              />
              <path
                d="M26.2334 9.79248L9.26283 26.763L7.7072 25.2074L24.6778 8.23685L26.2334 9.79248Z"
                fill="#1D2939"
              />
            </svg>
          )}

          {!isMobileMenuVisible && (
            <svg
              width="24"
              height="15"
              viewBox="0 0 24 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H24V2.2H0V0Z" fill="#1D2939" />
              <path d="M0 6.4H24V8.6H0V6.4Z" fill="#1D2939" />
              <path d="M24 12.8H8V15H24V12.8Z" fill="#1D2939" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};
