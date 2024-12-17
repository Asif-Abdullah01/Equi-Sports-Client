import React from 'react';
import { CgAdidas } from 'react-icons/cg';
import { FaStar} from 'react-icons/fa';
import { SiNike, SiPuma, SiReebok } from 'react-icons/si';

const TopBrands = () => {
  return (
    <div className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Top Sports Brands</h2>
      <p className="text-center text-gray-700 mb-6">
        Trusted brands delivering quality sports equipment worldwide.
      </p>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Nike */}
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <SiNike size={60} className="text-emerald-600 mb-4" />
          <h3 className="text-xl font-semibold ">Nike</h3>
        </div>

        {/* Adidas */}
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <CgAdidas size={60} className="text-violet-700 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">Adidas</h3>
        </div>

        {/* Puma */}
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <SiPuma size={60} className="text-orange-700 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">Puma</h3>
        </div>

        {/* Umbro */}
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <SiReebok size={60} className="text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">Reebok</h3>
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
