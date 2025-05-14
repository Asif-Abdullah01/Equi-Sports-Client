import React from 'react';
import { FaStar } from 'react-icons/fa';

const OurServices = () => {
  return (
    <div className="py-8 bg-gray-50 dark:bg-gray-900">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-6">Our Services</h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <FaStar size={50} className="text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-center mb-2 text-gray-800 dark:text-gray-200">Equipment Customization</h3>
          <p className="text-gray-600 text-center dark:text-gray-300">
            Personalize your sports gear to suit your style and needs.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <FaStar size={50} className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-center mb-2 text-gray-800 dark:text-gray-200">Group Discounts</h3>
          <p className="text-gray-600 text-center dark:text-gray-300">
            Special prices for teams, schools, and clubs on bulk purchases.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <FaStar size={50} className="text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-center mb-2 text-gray-800 dark:text-gray-200">Rental Services</h3>
          <p className="text-gray-600 text-center dark:text-gray-300">
            Rent top-quality equipment for a short-term period.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default OurServices;
