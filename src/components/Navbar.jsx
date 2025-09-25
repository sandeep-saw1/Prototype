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

  const MenuIcon = () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Ayursutra Panchakarma Logo"
            className="h-10 w-10 rounded-full"
          />
          <Link
            to="/"
            className="ml-3 text-lg sm:text-xl font-semibold text-gray-800 hover:text-green-600 transition"
          >
            Ayursutra Panchakarma
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleItemClick}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300
                ${
                  location.pathname === item.path
                    ? "bg-green-500 text-white shadow-md"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-100"
                }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={handleItemClick}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition duration-300"
          >
            LogIn
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden border-t z-40">
          <div className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleItemClick}
                className={`px-4 py-3 text-base font-medium rounded-md transition-all duration-300 text-center
                  ${
                    location.pathname === item.path
                      ? "bg-green-500 text-white shadow"
                      : "text-gray-700 hover:text-green-600 hover:bg-gray-100"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={handleItemClick}
              className="px-4 py-3 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition text-center"
            >
              LogIn
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
