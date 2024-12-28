import type { Metadata } from "next";
import "./globals.css";

import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="flex flex-col">
      <div className="pb-24"> {/* Padding below NavBar */}
        <NavBar />
      </div>
      <main className="pb-4 px-4"> {/* Padding below children */}
        {children}
      </main>
      <div className="pt-4"> {/* Padding above Footer */}
        <Footer />
      </div>
    </body>
  </html>
  );
}
