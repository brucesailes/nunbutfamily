import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      {/* Hero / About Section with Placeholder */}
      <div className="text-center mb-8 transition-all duration-300 transform hover:scale-105">
        <div className="inline-block relative w-full h-64 mb-4 shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 rounded overflow-hidden">
          <Image
            src="/artist.png" // Placeholder image source
            alt="Picture of Big Jacc"
            priority
            fill={true} // This will cover the div size, you might need to adjust objectFit based on your needs
            style={{objectFit: "cover"}}
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Big Jacc</h2>
        <p className="text-base md:text-lg mb-6">
          I&apos;m Big Jacc, an artist and producer from Calera, Alabama. I create my own music as well as helping others by producing.
        </p>
        <Link href="/Bio" passHref legacyBehavior>
          <button type='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out duration-150">
            Learn More
          </button>
        </Link>
      </div>

      {/* Booking Section with Placeholder */}
      <div className="text-center mb-8 transition-all duration-300 transform hover:scale-105">
        <div className="inline-block relative w-full h-64 mb-4 shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 rounded overflow-hidden">
          <Image
            src="/studiotime.png" // Placeholder image source
            alt="Studio Time"
            fill={true} // This will cover the div size, you might need to adjust objectFit based on your needs
            style={{objectFit: "cover"}}
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Studio Time</h2>
        <p className="text-base md:text-lg mb-6">
          Book a session with Big Jacc and get the full experience of recording in a professional studio.
        </p>
        <Link href="/Booking-page" passHref legacyBehavior>
          <button type='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out duration-150">
            Book Sessions
          </button>
        </Link>
      </div>

      {/* Shop Section with Placeholder */}
      <div className="text-center mb-8 transition-all duration-300 transform hover:scale-105">
        <div className="inline-block relative w-full h-64 mb-4 shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 rounded overflow-hidden">
          <Image
            src="/blacktshirt.png" 
            alt="NBF Tshirt"
            fill={true} // This will cover the div size, you might need to adjust objectFit based on your needs
            style={{objectFit: "cover"}}
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop</h2>
        <p className="text-base md:text-lg mb-6">
          Check out the latest merch and music.
        </p>
        <Link href="/E-Commerce" passHref legacyBehavior>
          <button type='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out duration-150">
            Visit Shop
          </button>
        </Link>
      </div>

      {/* Contact and Hours (Assuming Contact component handles this) */}
      <Contact />
    </div>
  );
};

export default HomePage;





