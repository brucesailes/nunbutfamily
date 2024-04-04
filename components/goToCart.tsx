// Inside your page or component
import Link from 'next/link';
import Image from 'next/image';

export default function ToCart() {
  return (
    <Link legacyBehavior href="/cart">
    <a className="hover:opacity-75 transition-opacity transition-transform transform hover:scale-105 fixed bottom-4 right-4">
          <Image
            src="/shopping-cart.png"
            alt="Merchandise"
            width={75}
            height={75}
            layout="intrinsic"
          />
      </a>
    </Link>
  );
}

