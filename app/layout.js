import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from "next/script";

export const metadata = {
  title: 'Ad Loodgietersbedrijf',
  description: 'Professionele loodgietersdiensten in regio Utrecht.',

};


export default function RootLayout({ children }) {
  return (
      <html lang="nl">
        <body className="bg-gray-50 text-gray-800">
          <Navbar />
          <main className="container max-w-full mx-auto max-sm:w-full max-sm:max-w-screen-sm">{children}</main>
          <Footer />
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XNZF318PRR"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XNZF318PRR');
              `}
          </Script>
        </body>
      </html>
  );
}
