import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Walk",
  description: "WireApps Modern Walk next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="flex flex-col  w-full">
          <div className="w-full">
            <TopNavbar />
          </div>
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}
