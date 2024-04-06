import React from "react";
import Link from "next/link";
import Image from "next/image"; // If you plan to include images

export default function Cancel() {
  // Placeholder for any logic or data fetching

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Payment Cancelled</h1>
        <p className="text-xl mt-4">
          It looks like the payment process was not completed. If this was a mistake, you can attempt to checkout again.
        </p>
      </div>

      {/* Optional: Display an image or graphic */}
      <div className="flex justify-center my-6">
        <Image src="/cancel-image.png" alt="Cancelled" width={200} height={200} />
        {/* Ensure you have a cancel-image.png in your public folder or adjust the src accordingly */}
      </div>

      {/* Additional Information or Actions */}
      <div className="text-center mt-6">
        <p>If you encountered any issues during payment, feel free to contact our support team.</p>
        
        {/* Navigation Links */}
        <div className="mt-8">
          <Link legacyBehavior href="/">
            <a className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-600 transition-colors">
              Return to Homepage
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
