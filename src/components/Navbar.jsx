import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Contact", path: "/contact" },
  ];

  const handleItemClick = () => {
    setIsMenuOpen(false);
  };

  // Hamburger icon SVG
  const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  // Close icon SVG
  const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div>
      <nav className="flex justify-between h-20 items-center border-b-1 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Ayursutra Panchakarma Logo" className="h-10 w-10 rounded-full" />
          <Link to="/" className="ml-4 text-xl font-semibold text-gray-800 hover:text-gray-600">
            Ayursutra Panchakarma
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg border-2
                ${
                location.pathname === item.path
                  ? "bg-green-500 text-white border-green-600"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 border-transparent"
              }`}
              onClick={() => handleItemClick()}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/login" 
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition duration-300"
          >
            LogIn
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition duration-300"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden border-t z-50">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-3 text-base font-medium transition-all duration-300 text-center rounded-lg border-2
                    ${
                    location.pathname === item.path
                      ? "bg-green-500 text-white border-green-600"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 border-transparent"
                  }`}
                  onClick={() => handleItemClick()}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-2 border-t">
                <Link 
                  to="/login" 
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition duration-300 text-center"
                  onClick={() => handleItemClick()}
                >
                  LogIn
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
