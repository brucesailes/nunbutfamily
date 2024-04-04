import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <header className="text-center p-4 w-full z-50">
      {/* Logo or Brand Name */}
      <Link legacyBehavior href="/" passHref>
        <a className="text-4xl md:text-5xl lg:text-6xl">
          <h1 className='transition-transform hover:scale-105'>NUN BUT FAMILY</h1>
        </a>
      </Link>

      {/* Navigation Icons */}
      <nav className="flex justify-center items-center space-x-4 mt-4">
        <Link legacyBehavior href="/" passHref>
          <a className="hover:opacity-75 transition-opacity mb-4 md:mb-0 md:mr-4 transition-transform transform hover:scale-105">
            <Image
              src="/home.png"
              alt="Home"
              width={75}
              height={75}
              layout="intrinsic"
            />
          </a>
        </Link>
        <Link legacyBehavior href="/merchandise/Index" passHref>
        <a className="hover:opacity-75 transition-opacity mb-4 md:mb-0 md:mr-4 transition-transform transform hover:scale-105">
            <Image
              src="/tshirt.png"
              alt="Merchandise"
              width={75}
              height={75}
              layout="intrinsic"
            />
          </a>
        </Link>
      </nav>
    </header>
  );
}





