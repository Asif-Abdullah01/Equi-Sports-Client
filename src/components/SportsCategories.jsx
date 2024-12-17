
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
          <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white">
            <div className="p-4 rounded-full bg-green-500">
              <IoMdFootball size={30} />
            </div> 
            <h3 className="mt-4 text-xl font-semibold">Football</h3>
          </div>
  
          {/* Basketball */}
          <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white">
            <div className="p-4 rounded-full bg-orange-500">
              <FaBasketballBall size={30} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Basketball</h3>
          </div>
  
          {/* Baseball */}
          <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white">
            <div className="p-4 rounded-full bg-blue-500">
              <FaBaseballBall size={30} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Baseball</h3>
          </div>
  
          {/* Golf */}
          <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white">
            <div className="p-4 rounded-full bg-yellow-500">
              <FaGolfBall size={30} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Golf</h3>
          </div>
  
          {/* Cricket */}
          <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white">
            <div className="p-4 rounded-full bg-red-500">
              <TbCricket size={30} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Cricket</h3>
          </div>
  
          {/* Badminton */}
          <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white">
            <div className="p-4 rounded-full bg-purple-500">
              <GiTennisRacket size={30} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Badminton</h3>
          </div>
  
          {/* Rugby */}
          <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white">
            <div className="p-4 rounded-full bg-purple-500">
              <MdSportsRugby size={30} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Rugby</h3>
          </div>
  
          {/* Archery */}
          <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white">
            <div className="p-4 rounded-full bg-purple-500">
            <GiArcheryTarget size={30} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Archery</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default SportsCategories;
  