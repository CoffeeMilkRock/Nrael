import React from 'react';
import ProductCard from './ProductCard';
import SkeletonCard from '../course/SkeletonCard';
const ProductList = ({ courses, onViewDetail, onToggleFavorite, isLoading = false, loadingSkeleton = 3}) => {
  if(isLoading){
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: loadingSkeleton }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }
  if (courses.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-700">Không tìm thấy khóa học phù hợp</h2>
        <p className="text-gray-500 mt-2">Vui lòng thử lại với từ khóa hoặc bộ lọc khác.</p>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map(course => (
        <ProductCard key={course.id} course={course} onViewDetail={onViewDetail}/>
      ))}
    </div>
  );
};

export default ProductList;
