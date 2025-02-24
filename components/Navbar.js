'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { sendGTMEvent } from '@next/third-parties/google';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      {/* Navbar zonder de bovenste spoedbalk */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          {/* Logo en Naam */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="AD Loodgietersbedrijf Logo"
              width={120}
              height={100}
              className="mr-2 w-16 h-16 md:w-20 md:h-20"
            />
            <span className="font-bold text-lg md:text-2xl">AD-Loodgietersbedrijf</span>
          </Link>

          {/* Navigatie Links voor Desktop */}
          <ul className="hidden md:flex space-x-6 text-sm md:text-base items-center">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/over-ons" className="hover:text-blue-400 transition">
                Over ons
              </Link>
            </li>
            <li>
              <Link href="/diensten" className="hover:text-blue-400 transition">
                Diensten
              </Link>
            </li>
            <li>
              <Link href="/publicaties" className="hover:text-blue-400 transition">
                Publicaties
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-blue-400 transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
            {/* SPOED-knop rechts van Contact */}
            <li>
              <Link
                href="tel:+31640961848"
                onClick={() =>
                  sendGTMEvent({
                    event: 'buttonClicked',
                    category: 'Link',
                    label: 'Navbar Spoedknop',
                  })
                }
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition font-semibold"
              >
                Spoed
              </Link>
            </li>
          </ul>

          {/* Mobiele Navigatie Menu */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-400 transition focus:outline-none"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobiel Menu */}
        {menuOpen && (
          <div className="bg-white shadow-md">
            <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-800">
              <li>
                <Link href="/" className="hover:text-blue-400 transition" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="hover:text-blue-400 transition" onClick={toggleMenu}>
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-blue-400 transition" onClick={toggleMenu}>
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/publicaties" className="hover:text-blue-400 transition" onClick={toggleMenu}>
                  Publicaties
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-blue-400 transition" onClick={toggleMenu}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
              {/* SPOED-knop in het mobiele menu */}
              <li>
                <Link
                  href="tel:+31640961848"
                  onClick={() => {
                    toggleMenu();
                    sendGTMEvent({
                      event: 'buttonClicked',
                      category: 'Link',
                      label: 'Navbar Spoedknop (Mobiel)',
                    });
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition font-semibold block text-center"
                >
                  Spoed
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Info Balk (optioneel) */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto flex flex-wrap justify-center gap-4 px-4">
          <p className="flex items-center text-sm sm:text-base font-bold">
            <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" />
            24/7 beschikbaar
          </p>
          <p className="flex items-center text-sm sm:text-base font-bold">
            <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" />
            Snelle spoedservice
          </p>
          <p className="flex items-center text-sm sm:text-base font-bold">
            <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" />
            10+ jaar ervaring
          </p>
          <p className="flex items-center text-sm sm:text-base font-bold">
            <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" />
            Alle soorten loodgietersdiensten
          </p>
        </div>
      </div>
    </header>
  );
}
