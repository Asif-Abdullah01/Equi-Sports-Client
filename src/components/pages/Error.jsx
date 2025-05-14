import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Error = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-center px-4">
      <Helmet>
        <title>404 Not Found | EquiSports</title>
      </Helmet>

      <h1 className="text-9xl font-extrabold text-green-500">404</h1>
      <p className="text-2xl md:text-3xl font-semibold text-green-700 mt-4">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <p className="mt-2 text-green-600">It might have been removed or the URL is incorrect.</p>

      <Link to="/" className="mt-6 inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition duration-300">
        Return to Home
      </Link>
    </div>
  );
};

export default Error;
