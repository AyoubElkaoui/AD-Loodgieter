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
    <head>
      {/* Google Tag Manager */}
      <Script id="gtm-head" strategy="afterInteractive">
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-57S9L8VS');
          `}
      </Script>
      {/* End Google Tag Manager */}
    </head>
    <body className="bg-gray-50 text-gray-800">
    {/* Google Tag Manager (noscript) */}
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-57S9L8VS"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
    {/* End Google Tag Manager */}
    <Navbar/>
    <main className="container max-w-full mx-auto max-sm:w-full max-sm:max-w-screen-sm">{children}</main>
    <Footer/>
    </body>
    </html>
  );
}
