import { Poppins, Aboreto } from "next/font/google";

import "../styles/globals.css";

import { getMenu } from "utils/getMenu";
import { MainMenu } from "components/MainMenu";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const aboretto = Aboreto({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-aboretto",
});

export default async function RootLayout({ children }) {
  const mainMenu = await getMenu();

  return (
    <html className={`${poppins.variable} ${aboretto.variable}`} lang="en">
      <body className="font-body">
        <MainMenu
          items={mainMenu.mainMenuItems}
          callToActionButton={mainMenu.callToActionButton}
        />

        {children}
      </body>
    </html>
  );
}
