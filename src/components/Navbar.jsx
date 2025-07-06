import React from 'react';
import githubIcon from '../assets/github.svg';

const Navbar = () => {
  return (
    <div className="text-gray-200 flex flex-row justify-between items-center w-full px-4 sm:px-8 py-4 sm:h-16 z-10">
      
      {/* Logo */}
      <div className="logo text-slate-200 text-xl sm:text-[26px] font-bold cursor-pointer hover:text-white flex flex-row items-center">
        <span className="text-green-400">&lt;</span>
        <span>Pass</span>
        <span className="text-green-400">Hub/&gt;</span>
      </div>

      {/* Button */}
      <div className="mt-0 sm:mt-0">
        <a href="https://github.com/Tejas-00/PassHub-full-stack" target="_blank" rel="noopener noreferrer">
          <button className="bg-slate-100 text-black text-[16px] font-bold flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer hover:bg-white transition duration-200">
            <img className="w-6" src={githubIcon} alt="GitHub" />
            <h2 className="leading-none pb-1 sm:pb-1">Contribute</h2>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
