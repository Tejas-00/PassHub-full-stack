import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black w-dvw font-bold text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} PassHub — Built by Tejas Sonawane
      </p>
    </footer>
  );
};

export default Footer;
