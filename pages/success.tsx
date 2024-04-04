import React from "react";
import Link from "next/link";
import Image from "next/image"; // If you want to include images

export default function Success() {
  // Placeholder for any additional logic or data fetching you might want to add

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
        <p className="text-xl mt-4">
          Thank you for your purchase. Your payment has been successfully processed.
        </p>
      </div>

      {/* Optional: Display an image or graphic */}
      <div className="flex justify-center my-6">
        <Image src="/success-image.png" alt="Success" width={200} height={200} />
        {/* Ensure you have a success-image.png in your public folder or adjust the src accordingly */}
      </div>

      {/* Additional Information or Actions */}
      <div className="text-center mt-6">
        <p>Your order is being prepared and will be shipped out to you soon.</p>
        <p>
          You will receive an email confirmation with your order details and another email when your order has been shipped.
        </p>
        
        {/* Navigation Links */}
        <div className="mt-8">
          <Link legacyBehavior href="/merchandise/Index">
            <a className="text-center inline-block bg-blue-500 text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-600 transition-colors">
              Continue Shopping
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
