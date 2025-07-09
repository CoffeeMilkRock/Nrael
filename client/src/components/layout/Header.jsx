import React from 'react';
import { SearchIcon, HeartIcon } from '../common/Icon';
const Header = ({ searchTerm, onSearchChange }) => {
    
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-800">N<span className="text-indigo-800">rael</span></a>
          </div>
          <div className="hidden md:block flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Tìm kiếm khóa học bạn quan tâm..."
                className="w-full pl-4 pr-10 py-2.5 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                value={searchTerm}
                onChange={onSearchChange}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 pointer-events-none">
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Khóa học</a>
            <a href="#" className="relative text-gray-600 hover:text-indigo-600 transition-colors">
              <HeartIcon />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
            </a>
            <button className="hidden sm:block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Đăng nhập
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;