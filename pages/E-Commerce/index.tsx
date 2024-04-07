import React from 'react';
import Hoodies from '../../components/hoodies';
import Tshirts from '../../components/tshirts';

export default function NBFamilyStore() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 relative overflow-hidden">
        <div className="bg-cover bg-center h-64 text-white py-24 px-10 object-fill">
          <p className="text-4xl text-center font-bold mb-5">New Arrivals Are Here</p>
          <p className="text-xl text-center">Discover the latest collection of hoodies & t-shirts</p>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <p className="text-lg">Explore our most popular selections</p>
      </div>

      {/* Product Sections */}
      <div className="flex flex-wrap justify-center">
        {/* T-shirts Column */}
        <div className="w-full lg:w-1/2 px-4">
          <section className="mb-12">
            <Tshirts />
          </section>
        </div>

        {/* Hoodies Column */}
        <div className="w-full lg:w-1/2 px-4">
          <section className="mb-12">
            <Hoodies />
          </section>
        </div>
      </div>
    </div>
  );
}




