import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import Btn from "@/components/Btn";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio with Next.js 14 and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const button_css: string =
    " hidden lg:block hover:bg-[#FFFFFF] hover:text-black rounded ml-1 ";
  return (
    <html lang="en">
      <body className="m-0 p-0 bg-[#0C0C0D] text-white font-mono">
        <header className="backdrop-blur backdrop-contrast-125 sticky top-0 h-14 ">
          <nav className="h-full">
            <ul className="flex flex-wrap content-center items-center h-full px-4">
              <Link href="/" className="group">
                <img
                  src="/white.png"
                  alt="logo"
                  height={"56"}
                  width={"72"}
                  className="group-hover:hidden rounded p-1"
                />
                <img
                  src="/black.png"
                  alt="logo"
                  height={"56"}
                  width={"72"}
                  className="hidden group-hover:block group-hover:bg-white transition-all ease-in rounded p-1"
                />
              </Link>

              <li className="text-2xl mr-auto md:mx-auto">Rahad.</li>
              <Btn
                pathURL="/contact"
                button_text="Projects"
                className={button_css}
              />
              <Btn
                pathURL="/projects"
                button_text="Guides"
                className={button_css}
              />
              <Btn
                pathURL="/about"
                button_text="About"
                className={button_css}
              />
              <Menu />
            </ul>
          </nav>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
