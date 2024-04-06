import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Navigations () {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`p-4 ${isSticky ? 'fixed top-0 left-0 w-full bg-black shadow-md z-50' : 'bg-black'} text-white`}>
      <div className="container mx-auto flex justify-center items-center flex-wrap">
        {/* Navigation Links */}
        <ul className="flex space-x-2 sm:space-x-4 md:text-lg lg:text-2xl">
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:text-gray-500 transition-colors duration-300">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/Booking-page" legacyBehavior>
              <a className="hover:text-gray-500 transition-colors duration-300">Booking</a>
            </Link>
          </li>
          <li>
            <Link href="/E-Commerce" legacyBehavior>
              <a className="hover:text-gray-500 transition-colors duration-300">Shop</a>
            </Link>
          </li>
          <li>
            <Link href="/Contact" legacyBehavior>
              <a className="hover:text-gray-500 transition-colors duration-300">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/About" legacyBehavior>
              <a className="hover:text-gray-500 transition-colors duration-300">Bio</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


