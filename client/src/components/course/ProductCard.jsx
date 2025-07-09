import React from 'react';
import { StarIcon, HeartIcon } from '../common/Icon'; // Assuming you have these icons in a common directory

const ProductCard = ({ course, onViewDetail }) => {
  const renderStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
          stars.push(<StarIcon key={i} filled={i <= rating} />);
      }
      return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out group">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={course.imageUrl} alt={course.name} />
        <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
          <HeartIcon className="text-gray-400 hover:text-red-500" />
        </div>
        <span className="absolute top-3 left-3 bg-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded-full">{course.level}</span>
      </div>
      <div className="p-5 flex flex-col">
        <p className="text-sm text-gray-500 mb-1">{course.author}</p>
        <h3 className="text-lg font-bold text-gray-800 truncate mb-2">{course.name}</h3>
        <p className="text-gray-600 text-sm mb-4 h-10 flex-grow">{course.shortDescription}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
              {renderStars(course.rating)}
              <span className="text-xs text-gray-500 ml-2">({course.rating})</span>
          </div>
          <p className="text-xl font-extrabold text-indigo-600">
            {new Intl.NumberFormat('vi-VN').format(course.price)}₫
          </p>
        </div>
        <button 
          onClick={() => onViewDetail(course)}
          className="w-full mt-auto bg-indigo-100 text-indigo-700 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-200 transition-colors">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default ProductCard;