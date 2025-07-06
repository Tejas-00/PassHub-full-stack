import React from 'react';

import mongoIcon from '../assets/mongo.svg';
import reactIcon from '../assets/react.svg';
import expressIcon from '../assets/express.png';
import tailwindIcon from '../assets/tailwind.svg';

const Face = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-16 lg:px-32 text-center">
      
      {/* Title */}
      <div>
        <span className='text-green-400 text-5xl sm:text-6xl md:text-7xl font-bold'>&lt;</span>
        <span className='text-white text-5xl sm:text-6xl md:text-7xl font-bold'>Pass</span>
        <span className='text-green-400 text-5xl sm:text-6xl md:text-7xl font-bold'>Hub/&gt;</span>
      </div>

      {/* Description */}
      <div>
        <p className='text-gray-300 mt-8 text-base sm:text-lg md:text-xl max-w-4xl mx-auto'>
          A simple and secure password manager built with React, Express, MongoDB, and Tailwind CSS. It allows users to store and manage their credentials — including website name, username, and password — all in one place. Designed with a clean UI and basic backend authentication to keep your data organized and easily accessible.
        </p>
      </div>

      {/* Tech Stack Icons */}
      <div className='mt-10 flex flex-wrap justify-center gap-8'>
        <img className='w-16 sm:w-20' src={mongoIcon} alt="MongoDB" />
        <img className='w-10 sm:w-12' src={reactIcon} alt="React" />
        <img className='w-9 h-9 sm:w-10 sm:h-10' src={expressIcon} alt="Express" />
        <img className='w-10 sm:w-12' src={tailwindIcon} alt="Tailwind CSS" />
      </div>
    </div>
  );
};

export default Face;
