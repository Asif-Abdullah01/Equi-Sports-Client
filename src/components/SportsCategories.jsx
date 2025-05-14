import { FaBaseballBall, FaBasketballBall, FaFootballBall, FaGolfBall } from 'react-icons/fa';
import { GiArcheryTarget, GiTennisRacket } from 'react-icons/gi';
import { IoMdFootball } from 'react-icons/io';
import { MdSportsRugby } from 'react-icons/md';
import { TbCricket } from 'react-icons/tb';

const SportsCategories = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl text-green-600 font-bold text-center mb-6">Sports Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Football */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <div className="p-4 rounded-full bg-green-500">
            <IoMdFootball className='text-black' size={30} />
          </div> 
          <h3 className="mt-4 text-xl text-green-700 dark:text-green-400 font-semibold">Football</h3>
        </div>

        {/* Basketball */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <div className="p-4 rounded-full bg-orange-500">
            <FaBasketballBall className='text-black' size={30} />
          </div>
          <h3 className="mt-4 text-xl text-orange-700 dark:text-orange-400 font-semibold">Basketball</h3>
        </div>

        {/* Baseball */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <div className="p-4 rounded-full bg-blue-500">
            <FaBaseballBall className='text-black' size={30} />
          </div>
          <h3 className="mt-4 text-xl text-blue-700 dark:text-blue-400 font-semibold">Baseball</h3>
        </div>

        {/* Golf */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <div className="p-4 rounded-full bg-yellow-500">
            <FaGolfBall className='text-black' size={30} />
          </div>
          <h3 className="mt-4 text-xl text-yellow-700 dark:text-yellow-400 font-semibold">Golf</h3>
        </div>

        {/* Cricket */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <div className="p-4 rounded-full bg-red-500">
            <TbCricket className='text-black' size={30} />
          </div>
          <h3 className="mt-4 text-xl text-red-700 dark:text-red-400 font-semibold">Cricket</h3>
        </div>

        {/* Badminton */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <div className="p-4 rounded-full bg-purple-500">
            <GiTennisRacket className='text-black' size={30} />
          </div>
          <h3 className="mt-4 text-xl text-purple-700 dark:text-purple-400 font-semibold">Badminton</h3>
        </div>

        {/* Rugby */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <div className="p-4 rounded-full bg-purple-500">
            <MdSportsRugby className='text-black' size={30} />
          </div>
          <h3 className="mt-4 text-xl text-purple-700 dark:text-purple-400 font-semibold">Rugby</h3>
        </div>

        {/* Archery */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <div className="p-4 rounded-full bg-green-500">
            <GiArcheryTarget className='text-black' size={30} />
          </div>
          <h3 className="mt-4 text-xl text-green-700 dark:text-purple-400 font-semibold">Archery</h3>
        </div>
      </div>
    </div>
  );
};

export default SportsCategories;
