
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 w-full text-white p-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center">
        <span className="ml-3 text-lg font-semibold">My Account</span>
      </div>

      <button className="mt-2 sm:mt-0 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/" className="w-full h-full">
          Logout
        </Link>
      </button>
    </header>
  );
};

export default Header;
