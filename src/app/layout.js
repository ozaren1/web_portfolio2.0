import localFont from "next/font/local";
import "./globals.scss";
import Header from "./component/Header";
import Footer from "./component/Footer";

const NarzissProCyrillic = localFont({
  src: "@/../fonts/NarzissProCyrillicDrops-ExtraBo.woff",
  variable: "--NarzissProCyrillic",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Фотограф Merkulova Daria – Профессиональная съемка в Туле и Москве",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${NarzissProCyrillic.variable} ${geistMono.variable}`}>
        <Header/>
        <main className="main">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
