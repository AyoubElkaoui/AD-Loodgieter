import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import WhatsAppButton from "@/components/WhatsappButton";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import CookiebotWrapper from "@/components/CookiebotWrapper";

export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "Loodgieter Maarssen | 24/7 Spoedservice & Installaties",
  description:
    "Uw betrouwbare loodgieter voor Maarssen en omgeving. Wij lossen lekkages, verstoppingen en installaties snel en professioneel op. Bel nu!",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Loodgieter Maarssen | AD-Loodgietersbedrijf",
    description:
      "Uw loodgietersbedrijf in Maarssen en Utrecht. 24/7 hulp bij lekkages, verstoppingen en installaties.",
    url: "/",
    site_name: "AD Loodgietersbedrijf",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "AD Loodgietersbedrijf Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AD_Loodgieter",
    title: "Loodgieter Maarssen | 24/7 Spoedservice & Installaties",
    description:
      "Uw betrouwbare loodgieter voor Maarssen en omgeving. Wij lossen lekkages, verstoppingen en installaties snel en professioneel op. Bel nu!",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
    <CookiebotWrapper />
    <GoogleTagManager async gtmId="GTM-57S9L8VS" />
    <body className="bg-gray-50 text-gray-800">
    <Navbar />
    <main className="container max-w-full mx-auto">
      <ParallaxWrapper>{children}</ParallaxWrapper>
    </main>
    <WhatsAppButton />
    <Footer />
    </body>
    </html>
  );
}
