import { Poppins, Aboreto } from "next/font/google";

import "../styles/globals.css";

import { getMenu } from "utils/getMenu";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

import { PostCard } from "components/Posts/PostCard";

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
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

        {children}

        <Footer />
      </body>
    </html>
  );
}
