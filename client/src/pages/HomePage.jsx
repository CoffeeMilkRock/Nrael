import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';  
import Footer from '../components/layout/Footer';
import { getAISuggestions } from '../services/api';
import ProductList from '../components/course/ProductList';
import ProductModal from '../components/ui/ProductModal';
import { mockCourses, priceFilters } from '../constants/data'; // Giả lập dữ liệu từ file data.js

const HomePage = () => {
    // States cho bộ lọc và modal
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [displayedCourses, setDisplayedCourses] = useState(mockCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // States cho tính năng gợi ý AI
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    // Logic lọc sản phẩm... (giữ nguyên)
  }, [searchTerm, priceFilter]);

  const handleGetSuggestions = async () => {
    setIsLoading(true);
    setError(null);
    setSuggestions([]);
    try {
      const data = await getAISuggestions();
      setSuggestions(data);
    } catch (err) {
      setError(err.message);
      showToast(err.message); // Dùng toast từ context
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewDetail = (course) => setSelectedCourse(course);
  const handleCloseModal = () => setSelectedCourse(null);
  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section gợi ý AI */}
        <div className="mb-12 text-center">
            <button 
              onClick={handleGetSuggestions}
              disabled={isLoading}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? 'Đang tìm kiếm...' : '✨ Gợi ý khóa học cho tôi'}
            </button>
        </div>
        
        {/* Hiển thị kết quả gợi ý hoặc lỗi */}
        {(isLoading || error || suggestions.length > 0) && (
            <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Dành riêng cho bạn</h2>
                <ProductList 
                    courses={suggestions} 
                    isLoading={isLoading}
                    loadingSkeletons={3}
                    onViewDetail={handleViewDetail} 
                />
                {error && <p className="text-center text-red-500 mt-4">{error}</p>}
            </div>
        )}

        {/* Section khám phá tất cả khóa học */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Khám phá tất cả khóa học</h1>
          <div className="flex items-center space-x-2">
            {/* ...bộ lọc giá */}
          </div>
        </div>
        <ProductList 
            courses={displayedCourses} 
            onViewDetail={handleViewDetail}
        />
      </main>

      <Footer />
      <ProductModal course={selectedCourse} onClose={handleCloseModal} />
    </div>
  );
}
export default HomePage;    