import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      </body>
      </html>
  );
}
