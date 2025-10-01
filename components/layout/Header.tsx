import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Luxury Listings</h1>
      <nav className="space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Sign In</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
