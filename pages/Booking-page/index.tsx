import React from "react";
import Basic from "../../components/Basic";
import Superstar from "../../components/Superstar";
import Elite from "../../components/Elite";

export default function BookingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-6 transition-transform transform hover:scale-105">Choose Your Package</h1>
      <h2 className="text-xl font-semibold text-center mb-12 transition-transform transform hover:scale-105">Free keychain on your first visit</h2>
      <div className="flex flex-wrap -mx-4 justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 transition-transform transform hover:scale-105">
          <Basic />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 transition-transform transform hover:scale-105">
          <Superstar />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 transition-transform transform hover:scale-105">
          <Elite />
        </div>
      </div>
    </div>
  );
}

