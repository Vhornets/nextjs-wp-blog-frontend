import { Poppins, Aboreto } from "next/font/google";

import "../styles/globals.css";

import { getMenu } from "utils/getMenu";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default async function RootLayout({ children }) {
  const mainMenu = await getMenu();

  return (
    <html className={`${poppins.variable}`} lang="en">
      <body className="font-body">
        <Header {...mainMenu} />

        <div className="p-10 mx-auto flex justify-center">
          <span className="bg-gray-100 text-gray-800 text-sm font-semibold py-2.5 px-4 rounded-full">
            👋 Meet Personally
          </span>
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}
