import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearchChange }) => {
  return (
    <nav className="bg-gray-800 p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-2 md:mb-0">
        <h1 className="text-white text-xl font-bold">My App</h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          onChange={onSearchChange}
          className="border border-gray-300 rounded-md p-2 focus:outline-none mr-2 mb-2 md:mb-0"
        />
        <Link to={"/login"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
