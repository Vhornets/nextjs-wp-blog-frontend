import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "components/ButtonLink";
import { MainMenu } from "components/MainMenu";

export const Header = ({ mainMenuItems, callToActionButton, logo }) => {
  return (
    <div className="bg-white text-gray-800 px-5 sticky top-0 z-20 shadow-[0_4px_70px_0_rgba(30,40,52,0.08)]">
      <div className="max-w-7xl mx-auto h-[84px] flex items-center">
        <div className="py-4">
          <Link href="/">
            <Image
              alt="Logo"
              src={logo.sourceUrl}
              width={logo.mediaDetails.width}
              height={logo.mediaDetails.height}
            />
          </Link>
        </div>

        <div className="flex flex-1 justify-end xl:mr-[100px]">
          <MainMenu items={mainMenuItems} />
        </div>

        <div className="ml-3 my-auto hidden lg:block">
          <ButtonLink {...callToActionButton} />
        </div>
      </div>
    </div>
  );
};
