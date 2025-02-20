import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Camera } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-gray-900 dark:text-white" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Alalenses</span>
          </NavLink>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 ${
                  isActive ? 'font-bold' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                `text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 ${
                  isActive ? 'font-bold' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/gallery"
              className={({ isActive }) => 
                `text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 ${
                  isActive ? 'font-bold' : ''
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                `text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 ${
                  isActive ? 'font-bold' : ''
                }`
              }
            >
              Contact
            </NavLink>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;