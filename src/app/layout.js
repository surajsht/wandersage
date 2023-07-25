import "./globals.css";
import { Open_Sans, Playfair_Display } from "next/font/google";
import Context from "./context/Context";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const PlayFair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "WanderSage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${PlayFair.variable}`}>
      <body className="font-primary">
        <Context>{children}</Context>
      </body>
    </html>
  );
}
