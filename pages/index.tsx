import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '../components/Contact';



const HomePage: React.FC = () => {
  return (

    
    <div className="container mx-auto mt-10">
      <div className="text-center pl-4 pr-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:max-w-md text-lg md:pr-8 flex-shrink">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Meet Big Jacc</h2>
            <p className='text-base md:text-lg'>
              I&apos;m Big Jacc, an artist, and producer from Birmingham, Alabama. I create my own music as well as helping others by producing.
            </p>
          </div>
          <div className="md:w-1/2 mb-4 md:mb-0 overflow-hidden">
            <div className="relative overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <Image
                src="/artist.png"
                alt="Artist"
                width={500}
                height={500}
                layout="responsive"
                className="icon-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-4 md:mb-0 overflow-hidden">
            <div className="relative overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <Image
                src="/studiotime.png"
                alt="Studio"
                width={500}
                height={500}
                layout="responsive"
                className="icon-image"
              />
            </div>
          </div>
          <div className="pl-4 pr-4 md:w-1/2 md:max-w-md text-lg flex-shrink">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Schedule Studio Time</h2>
            <p className='text-base md:text-lg'>
              Book a session with Big Jacc and get the full experience of recording in a professional studio.
            </p>
            <Link href="/Booking-page" passHref>
              <button 
                type='button'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
              <p className="text-xl">Book Sessions</p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Three-column section with links */}
      <h2 className='text-center text-4xl mt-10 transition-transform transform hover:scale-105'>LISTEN ANYTIME, ANYWHERE, ANY PLATFORM</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <a href="https://music.apple.com/us/artist/big-jacc/1511886331" target="_blank" rel="noopener noreferrer">
            <button type="button" className=" text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-transform transform hover:scale-105">
              <Image
                src="/apple-music-icon.png" 
                alt="Apple Music"
                width={500}
                height={500}
                layout='responsive'
                 className="icon-image"
              />
              <p className="text-base md:text-lg font-bold mt-2">Apple Music</p>
            </button>
          </a>
        </div>
        <div className="text-center">
          <a href="https://open.spotify.com/artist/2G7HIjVezNF3OdKgrKmLzv?si=t_YyPsAJTFirZQMGccJq6w&nd=1&dlsi=530eb39fa8924480" target="_blank" rel="noopener noreferrer">
            <button type="button" className="text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-green-300 transition-transform transform hover:scale-105">
              <Image
                src="/spotify.png"  
                alt="Spotify"
                width={500}
                height={500}
                layout='responsive'
              />
              <p className="text-base md:text-lg font-bold mt-2">Spotify</p>
            </button>
          </a>
        </div>
        <div className="text-center">
          <a href="https://www.youtube.com/channel/UCh-wiqQ9GQ-mioQlgHlW09A" target="_blank" rel="noopener noreferrer">
            <button type="button" className="text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-red-300 transition-transform transform hover:scale-105">
              <Image
                src="/youtube.png" 
                alt="YouTube"
                width={500}
                height={500}
                layout='responsive'
              />
              <p className="text-base md:text-lg font-bold mt-2">YouTube</p>
            </button>
          </a>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default HomePage;





