import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '../components/Footer';
import Header from '../components/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Art Mastery Hub",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/> 
      </body>
    </html>
  );
}
