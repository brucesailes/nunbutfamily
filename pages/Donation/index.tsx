import React from "react";
import Image from "next/image";

export default function Donations() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl text-black font-bold text-center mb-6">Donations</h1>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="relative bg-white rounded-lg overflow-hidden">
                        {/* Wrapping the Image component for applying Tailwind CSS classes */}
                        <Image src="/donations.svg" alt="Donation" width={500} height={500} />
                    </div>
                    <div>
                        <p className="text-black text-lg font-semibold">Cash App: BigJaccon10</p>
                        <p className="text-black text-lg font-semibold">Venmo: NBFJacc</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

