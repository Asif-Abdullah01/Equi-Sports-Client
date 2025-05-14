import React from 'react';
import { FaShippingFast, FaStar, FaTags, FaHeadset } from 'react-icons/fa';

import p1 from '../assets/person1.jpg';
import p2 from '../assets/person2.png';
import p3 from '../assets/person3.png';
import p4 from '../assets/person4.png';
import p5 from '../assets/person5.jpg';
import p6 from '../assets/person6.jpg';

const features = [
  {
    icon: <FaShippingFast size={40} className="text-green-500 mb-4" />,
    title: "Fast Delivery",
    desc: "We ensure super-fast delivery so you can get your products quickly."
  },
  {
    icon: <FaStar size={40} className="text-yellow-500 mb-4" />,
    title: "Best Quality",
    desc: "High-quality sports equipment for all levels of players."
  },
  {
    icon: <FaTags size={40} className="text-red-500 mb-4" />,
    title: "Affordable Prices",
    desc: "Competitive prices without compromising on quality."
  },
  {
    icon: <FaHeadset size={40} className="text-blue-500 mb-4" />,
    title: "24/7 Support",
    desc: "Our team is available round-the-clock for your assistance."
  }
];

const feedbacks = [
  {
    img: p1,
    name: "Srayo Shikdar",
    role: "Software Engineer",
    feedback: "I had no idea where to begin when looking for the right sports equipment, but after visiting EquiSports, I felt confident and well-informed. The staff provided practical advice, and their wide range of quality products helped me find exactly what I needed to get started. Highly recommended!",
    animation: "zoom-out-right"
  },
  {
    img: p2,
    name: "Mohammad Ali",
    role: "Marketing Specialist",
    feedback: "The service I received at EquiSports was a game-changer. They took the time to understand my needs and preferences, then guided me to the perfect sports gear. I’m already seeing an improvement in my performance!",
    animation: "zoom-in"
  },
  {
    img: p3,
    name: "Zibran Alam",
    role: "Business Administration",
    feedback: "I was struggling to figure out which sports gear would suit me best. The team at EquiSports not only helped me identify the right equipment for my needs but also provided tips on maintenance and usage. I’m feeling more confident about my game now!",
    animation: "zoom-out-left"
  },
  {
    img: p4,
    name: "Asif Abdullah",
    role: "Project Manager",
    feedback: "The team at EquiSports is amazing. They don’t just offer generic recommendations, but tailor everything to your specific needs. I’ve already recommended this store to several friends!",
    animation: "zoom-out-right"
  },
  {
    img: p5,
    name: "Arman Kohli",
    role: "Sports Representative",
    feedback: "I’ve visited a few sports shops, but none were as thorough and understanding as EquiSports. They provided me with clear, actionable advice on the best equipment for my needs, and it’s already made a difference in my performance.",
    animation: "zoom-in"
  },
  {
    img: p6,
    name: "Rakib Uddin",
    role: "Sales Executive",
    feedback: "I had no idea where to begin with my sports gear, but after visiting EquiSports, I felt like I had a clear direction. The advice was practical, and the products they recommended helped me get started. Highly recommended!",
    animation: "zoom-out-left"
  }
];

const WhyChooseUs = () => {
  return (
    <div className="py-12 bg-gray-100 dark:bg-gray-900">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-10">Why Choose Us</h2>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            {feature.icon}
            <h3 className="text-xl font-semibold text-center mb-2 text-gray-800 dark:text-gray-200">{feature.title}</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Feedback Section */}
      <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mt-16">Our Client's Feedback</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4">
        {feedbacks.map((client, index) => (
          <div key={index} className="bg-green-200 border-2 border-green-800 dark:bg-green-800 dark:border-green-600 p-6 rounded-xl flex flex-col items-center" data-aos={client.animation}>
            <div className="flex items-center gap-4">
              <img className="w-16 h-16 rounded-full object-cover" src={client.img} alt={client.name} />
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{client.name}</h3>
                <h4 className="text-sm text-gray-700 dark:text-gray-400">{client.role}</h4>
              </div>
            </div>
            <div className="flex flex-col items-center pt-4 space-y-3">
              <div className="flex text-yellow-400 text-2xl">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-center text-gray-800 dark:text-gray-200 italic">"{client.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
