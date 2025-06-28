// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center border border-b-black text-black px-6 py-3">
      <div className="text-xl font-bold">MyWebsite</div>
      <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
