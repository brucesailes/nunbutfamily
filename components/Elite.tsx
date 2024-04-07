import React from "react"




export default function Elite() {
    // Function to handle the redirection
    const handleBookSession = () => {
      // Redirect the user to the Stripe payment link
      window.location.href = 'https://calendly.com/nbfamilyinc/30min';
    };
  
    return (
      <div className="max-w-md mx-auto p-4 mt-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-5">
            <h1 className="text-2xl text-black font-bold mb-3">Elite Package</h1>
            <p className="mb-2 text-black ">Price: $70.99 for 3 hour</p>
            <ul className="list-disc pl-5 mb-4 text-black ">
              <li>Coaching</li>
              <li>2 social media posts</li>
              <li>2 free beats</li>
              <li>2 cover art recommendations</li>
            </ul>
          </div>
          <div className="px-5 pb-5">
            <button type="button" onClick={handleBookSession} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105">
              Book Session
            </button>
          </div>
        </div>
      </div>
    );
  }