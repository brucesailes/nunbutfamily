import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter

export default function BackButton() {
  const router = useRouter(); // Initialize useRouter

  // Function to handle click event
  const handleBack = () => {
    router.push('/merchandise/Index'); // Use router.push to navigate
  };

  return (
    <button
      type="button"
      onClick={handleBack} // Attach the handleBack function to onClick event
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Continue Shopping
    </button>
  );
}
