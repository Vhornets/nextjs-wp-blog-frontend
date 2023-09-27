import { FaHouseUser } from "react-icons/fa";
import Link from "next/link";
import { ButtonLink } from "components/ButtonLink";

export const MainMenu = ({ items, callToActionButton }) => {
  return (
    <div className="bg-slate-900 text-white px-5 h-[64px] sticky top-0 z-20 flex items-center">
      <div className="py-4 pl-5 flex text-pink-600">
        <FaHouseUser size={30} />
      </div>

      <div className="flex flex-1 justify-end">
        {(items || []).map((item) => (
          <div
            key={item.id}
            className="hover:bg-slate-700 cursor-pointer relative group"
          >
            <div>
              <Link className="p-5 block" href={item.destination}>
                {item.label}
              </Link>
            </div>

            {!!item.subMenuItems?.length && (
              <div className="hidden group-hover:block bg-slate-800 text-right absolute right-0 top-full -mt-3">
                {item.subMenuItems.map((subItem) => (
                  <Link
                    className="block p-5 whitespace-nowrap hover:bg-slate-700"
                    key={subItem.id}
                    href={subItem.destination}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="ml-3 my-auto">
        <ButtonLink {...callToActionButton} />
      </div>
    </div>
  );
};
