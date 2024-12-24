// import React from 'react';

const Header = () => {
  return (
    <div className="justify-center hidden h-12 text-xl text-gray-100 bg-green-800 max-w-screen md:flex">
      <ul className="flex items-center w-2/3 h-full justify-evenly">
        <li className="cursor-pointer hover:text-gray-500">Call</li>
        <li className="cursor-pointer hover:text-gray-500">Get 50% off on your purchase | Shop Now</li>
        <li className="cursor-pointer hover:text-gray-500">Location | Language</li>
      </ul>
    </div>
  )
};

export default Header;
