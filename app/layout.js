import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title: 'Ad Loodgietersbedrijf',
  description: 'Professionele loodgietersdiensten in regio Utrecht.',

};


export default function RootLayout({ children }) {
  return (
    <html lang="nl">
    <GoogleTagManager gtmId="GTM-57S9L8VS" />
    <body className="bg-gray-50 text-gray-800">
    <Navbar/>
    <main className="container max-w-full mx-auto max-sm:w-full max-sm:max-w-screen-sm">{children}</main>
    <Footer/>
    </body>
    </html>
  );
}
