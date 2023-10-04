import { v4 as uuid } from "uuid";
import { relativeToAbsoluteUrls } from "./relativeToAbsoluteUrls";

export const mapMainMenuItems = (menuItems) => {
  return menuItems.map((menuItem) => ({
    id: uuid(),
    url: relativeToAbsoluteUrls(menuItem.item.url),
    title: menuItem.item.title,
  }));
};
