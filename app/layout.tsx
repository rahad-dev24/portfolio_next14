import type { Metadata } from "next";
import "./globals.css";
import Nav from "./_lib/nav";
import Sidebar from "./_lib/sidebar";
export const metadata: Metadata = {
  title: "Portfolio - Faisal Ahamed Rahad",
  description: "Portfolio with Next.js 14 and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="m-0 p-0 bg-[#0C0C0D] text-white font-mono ">
        <header className="backdrop-blur backdrop-contrast-125 sticky top-0 h-14 border-b z-10 ">
          <Nav />
        </header>{" "}
        <Sidebar />
        {children}
        <footer className="backdrop-blur backdrop-contrast-125 sticky top-0 h-14 border-t ">
          footer
        </footer>
      </body>
    </html>
  );
}
