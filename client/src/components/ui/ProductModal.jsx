import React from 'react';
import { StarIcon, CloseIcon } from '../common/Icon'; // Assuming you have these icons in a common directory
import {useFavorites} from '../../hooks/useFavorites';
import { useToast } from '../../hooks/useToast';
const ProductModal = ({ course, onClose }) => {
    const { isFavorite, toggleFavorite } = useFavorites();
    const { showToast } = useToast();
    if (!course) return null;
    const isFav = isFavorite(course.id);
    const handleFavoriteClick = (e) => {
        toggleFavorite(course.id);
        showToast(isFav ? 'Đã bỏ yêu thích khóa học' : 'Đã thêm khóa học vào yêu thích');
        e.stopPropagation(); // Ngăn sự kiện click lan ra thẻ cha
    };
        const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(<StarIcon key={i} filled={i <= rating} />);
        }
        return stars;
    };

    return (
        <div 
            className="fixed inset-0 bg-gray-400/60 z-50 flex justify-center items-center p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row animate-fade-in-up"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex bg-gray-200 items-center w-full h-auto">
                 <img src={course.imageUrl} alt={course.name} className=" object-cover md:rounded-b-none " />
                </div>
                <div className="p-8 flex flex-col">
                    <div className="flex-grow">
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{course.level}</span>
                        <h2 className="text-3xl font-bold text-gray-900 my-3">{course.name}</h2>
                        <p className="text-md text-gray-600 mb-4">Bởi <span className="font-semibold text-indigo-600">{course.author}</span></p>
                        <div className="flex items-center mb-4">
                            {renderStars(course.rating)}
                            <span className="text-sm text-gray-500 ml-2">{course.rating} sao</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6">{course.longDescription}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between mt-auto">
                        <p className="text-3xl font-extrabold text-indigo-600 mb-4 sm:mb-0">
                            {new Intl.NumberFormat('vi-VN').format(course.price)}₫
                        </p>
                         <button 
                                onClick={handleFavoriteClick}
                                className="p-3 rounded-full bg-gray-100 hover:bg-red-100 transition-colors"
                            >
                                <HeartIcon filled={isFav} className={isFav ? 'text-red-500' : 'text-gray-500'}/>
                        </button>
                        <button className="w-full sm:w-auto bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
            <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300 transition">
                <CloseIcon />
            </button>
        </div>
    );
};

export default ProductModal;
