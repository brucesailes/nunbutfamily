import Link from 'next/link';


export default function Navigations () {
  return (
    <nav className="text-white py-4 sticky top-0 z-50 bg-black shadow">
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
            <Link href="https://www.youtube.com/@bigjaccinc" legacyBehavior>
              <a className='hover:text-gray-500 transition-colors duration-300' target='_blank' rel='noopener'>Beats</a>
            </Link>
          </li>
          <li>
            <Link href="/Donation" legacyBehavior>
              <a className='hover:text-gray-500 transition-colors duration-300'>Donations</a>
            </Link>
          </li>
          <li>
            <Link href="/Bio" legacyBehavior>
              <a className="hover:text-gray-500 transition-colors duration-300">Bio</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


