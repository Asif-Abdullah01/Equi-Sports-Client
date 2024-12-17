import React from 'react';
import { FaStar } from 'react-icons/fa';

const OurServices = () => {
  return (
    <div className="py-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <FaStar size={50} className="text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Equipment Customization</h3>
          <p className="text-gray-600 text-center">
            Personalize your sports gear to suit your style and needs.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <FaStar size={50} className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Group Discounts</h3>
          <p className="text-gray-600 text-center">
            Special prices for teams, schools, and clubs on bulk purchases.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <FaStar size={50} className="text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Rental Services</h3>
          <p className="text-gray-600 text-center">
            Rent top-quality equipment for a short-term period.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default OurServices;
