'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {sendGTMEvent} from "@next/third-parties/google";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Spoed Bovenbalk */}
      <div className="bg-dGrey py-2 px-4 text-center text-white">
        <p className="font-bold text-sm sm:text-base">
          Spoed? Bel ons op of klik hier <FontAwesomeIcon
          icon={faArrowRight}
          style={{ color: '#ffffff', fontWeight: 900 }}
          className="mr-2"
        />
          {' '}
          <Link
            href="tel:+31640961848"
            className="hover:bg-white hover:text-black hover:p-1 hover:rounded transition"
            onClick={() =>
              sendGTMEvent({
                event: 'buttonClicked',
                category: 'Link',
                label: 'Contact knop - Navbar spoed',
              })
            }
          >
            +31 6 40 96 18 48
          </Link>
        </p>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          {/* Logo en Naam */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Ad Loodgietersbedrijf Logo"
              width={120}
              height={100}
              className="mr-2 w-16 h-16 md:w-20 md:h-20"
            />
            <span className="font-bold text-lg md:text-2xl">AD-Loodgietersbedrijf</span>
          </Link>

          {/* Navigatie Links */}
          <ul className="hidden md:flex space-x-6 text-sm md:text-base">
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
              <Link href="/blogs" className="hover:text-blue-400 transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
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

        {/* Mobiele Menu */}
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
                <Link href="/blogs" className="hover:text-blue-400 transition" onClick={toggleMenu}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Info Balk */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto flex flex-wrap justify-center gap-4 px-4">
          <p className="flex items-center text-sm sm:text-base font-bold">
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: '#64bb46', fontWeight: 900 }}
              className="mr-2"
            />
            24/7 beschikbaar
          </p>
          <p className="flex items-center text-sm sm:text-base font-bold">
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: '#64bb46', fontWeight: 900 }}
              className="mr-2"
            />
            Snelle spoedservice
          </p>
          <p className="flex items-center text-sm sm:text-base font-bold">
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: '#64bb46', fontWeight: 900 }}
              className="mr-2"
            />
            10+ jaar ervaring
          </p>
          <p className="flex items-center text-sm sm:text-base font-bold">
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: '#64bb46', fontWeight: 900 }}
              className="mr-2"
            />
            Alle soorten loodgieter diensten
          </p>
        </div>
      </div>
    </div>
  );
}
