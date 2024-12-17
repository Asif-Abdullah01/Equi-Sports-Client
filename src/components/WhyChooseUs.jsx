import React from 'react';
import p1 from '../assets/person1.jpg'
import p2 from '../assets/person2.png'
import p3 from '../assets/person3.png'
import p4 from '../assets/person4.png'
import p5 from '../assets/person5.jpg'
import p6 from '../assets/person6.jpg'
import { FaShippingFast, FaStar, FaTags, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <div className="py-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Fast Delivery */}
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <FaShippingFast size={40} className="text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                    <p className="text-center text-gray-600">
                        We ensure super-fast delivery so you can get your products quickly.
                    </p>
                </div>

                {/* Best Quality */}
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <FaStar size={40} className="text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
                    <p className="text-center text-gray-600">
                        High-quality sports equipment for all levels of players.
                    </p>
                </div>

                {/* Affordable Prices */}
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <FaTags size={40} className="text-red-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
                    <p className="text-center text-gray-600">
                        Competitive prices without compromising on quality.
                    </p>
                </div>

                {/* 24/7 Support */}
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <FaHeadset size={40} className="text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                    <p className="text-center text-gray-600">
                        Our team is available round-the-clock for your assistance.
                    </p>
                </div>
            </div>


            <h2 className="text-3xl font-bold text-center text-green-600 mt-12">Our Client's Feedback</h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>


                <div className='bg-green-200 border-2 border-green-800 p-4 rounded-lg flex flex-col justify-center items-center' data-aos="zoom-out-right">

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={p1} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Srayo Shikdar</h3>
                            <h4 className='text-base'>Software Engineer</h4>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 pt-2'>
                        <div className='flex text-yellow-400 text-3xl'>
                            <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        </div>
                        <p className='text-center'>"I had no idea where to begin when looking for the right sports equipment, but after visiting EquiSports, I felt confident and well-informed. The staff provided practical advice, and their wide range of quality products helped me find exactly what I needed to get started. Highly recommended!"</p>
                    </div>

                </div>



                <div className='bg-green-200 border-2 border-green-800 p-4 rounded-lg flex flex-col justify-center items-center' data-aos="zoom-in">

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={p2} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Mohammad Ali</h3>
                            <h4 className='text-base'>Marketing Specialist</h4>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 pt-2'>
                        <div className='flex text-yellow-400 text-3xl'>
                            <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        </div>
                        <p className='text-center'>"The service I received at EquiSports was a game-changer. They took the time to understand my needs and preferences, then guided me to the perfect sports gear. I’m already seeing an improvement in my performance!"</p>
                    </div>

                </div>




                <div className='bg-green-200 border-2 border-green-800 p-4 rounded-lg flex flex-col justify-center items-center' data-aos="zoom-out-left">

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={p3} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Zibran Alam</h3>
                            <h4 className='text-base'>Business Administration</h4>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 pt-2'>
                        <div className='flex text-yellow-400 text-3xl'>
                            <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        </div>
                        <p className='text-center'>"I was struggling to figure out which sports gear would suit me best. The team at EquiSports not only helped me identify the right equipment for my needs but also provided tips on maintenance and usage. I’m feeling more confident about my game now!"</p>
                    </div>

                </div>

                <div className='bg-green-200 border-2 border-green-800 p-4 rounded-lg flex flex-col justify-center items-center' data-aos="zoom-out-right">

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={p4} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Asif Abdullah</h3>
                            <h4 className='text-base'>Project Manager</h4>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 pt-2'>
                        <div className='flex text-yellow-400 text-3xl'>
                            <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        </div>
                        <p className='text-center'>"The team at EquiSports is amazing. They don’t just offer generic recommendations, but tailor everything to your specific needs. I’ve already recommended this store to several friends!"</p>
                    </div>

                </div>


                <div className='bg-green-200 border-2 border-green-800 p-4 rounded-lg flex flex-col justify-center items-center' data-aos="zoom-in">

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={p5} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Arman Kohli</h3>
                            <h4 className='text-base'>Sports Representative</h4>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 pt-2'>
                        <div className='flex text-yellow-400 text-3xl'>
                            <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        </div>
                        <p className='text-center'>
                        "I’ve visited a few sports shops, but none were as thorough and understanding as EquiSports. They provided me with clear, actionable advice on the best equipment for my needs, and it’s already made a difference in my performance."</p>
                    </div>

                </div>



                <div className='bg-green-200 border-2 border-green-800 p-4 rounded-lg flex flex-col justify-center items-center' data-aos="zoom-out-left">

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={p6} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Rakib Uddin</h3>
                            <h4 className='text-base'>Sales Executive</h4>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 pt-2'>
                        <div className='flex text-yellow-400 text-3xl'>
                            <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        </div>
                        <p className='text-center'>"I had no idea where to begin with my sports gear, but after visiting EquiSports, I felt like I had a clear direction. The advice was practical, and the products they recommended helped me get started. Highly recommended!"</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WhyChooseUs;
