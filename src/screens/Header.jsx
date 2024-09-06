import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 w-full text-white p-4 flex justify-between items-center">
    
      <div className="flex items-center">
       
        <span className="ml-3 text-lg font-semibold"> My Account</span>
      </div>

      <button className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      <Link to={'/'}>Logout</Link>
      </button>
    </header>
  );
};

export default Header;
