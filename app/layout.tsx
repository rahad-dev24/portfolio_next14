import type { Metadata } from "next";
import "./globals.css";
import Nav from "./_lib/nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rahad | Full-Stack Developer",
  description: "Portfolio with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth no-scrollbar">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="m-0 p-0 bg-[#0C0C0D] text-white font-mono ">
        <header className="backdrop-blur backdrop-contrast-125 sticky top-0 h-14 border-b z-10 ">
          <Nav />
        </header>{" "}
        {children}
        <footer className="backdrop-blur backdrop-contrast-125 sticky top-0 h-14 border-t p-1.5 flex flex-row items-center justify-end pr-8">
          <p>
            © 2024{" "}
            <span className="animate-pulse text-green-500">
              Faisal Ahamed Rahad
            </span>
          </p>
        </footer>
      </body>
    </html>
  );
}
