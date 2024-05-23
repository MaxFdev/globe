import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Globe Project",
  description: "A Next.js project with a spinning globe",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <nav className="flex justify-center align-middle items-center bg-black p-1 text-white gap-2">
          <p>Something break?</p>
          <a href="" className="border-2 rounded p-1 border-cyan-300">Reload ↺</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
