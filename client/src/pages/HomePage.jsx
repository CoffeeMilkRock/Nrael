import React, { useState, useEffect } from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';
const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all'); // 'all', '<500', '500-1000', '>1000'
//   const [displayedCourses, setDisplayedCourses] = useState(mockCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);

//   useEffect(() => {
//     let filtered = mockCourses;

//     // Lọc theo từ khóa tìm kiếm
//     if (searchTerm) {
//       filtered = filtered.filter(course => 
//         course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         course.author.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Lọc theo giá
//     switch (priceFilter) {
//       case '<500':
//         filtered = filtered.filter(course => course.price < 500000);
//         break;
//       case '500-1000':
//         filtered = filtered.filter(course => course.price >= 500000 && course.price <= 1000000);
//         break;
//       case '>1000':
//         filtered = filtered.filter(course => course.price > 1000000);
//         break;
//       default: // 'all'
//         break;
//     }
    
//     setDisplayedCourses(filtered);
//   }, [searchTerm, priceFilter]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewDetail = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };
  
  const priceFilters = [
      { key: 'all', label: 'Tất cả' },
      { key: '<500', label: '< 500K' },
      { key: '500-1000', label: '500K - 1tr' },
      { key: '>1000', label: '> 1tr' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Khám phá các khóa học</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-600 hidden sm:inline">Lọc theo giá:</span>
            {priceFilters.map(filter => (
                <button 
                    key={filter.key}
                    onClick={() => setPriceFilter(filter.key)}
                    className={`px-3 py-1 text-sm border rounded-full transition-colors ${
                        priceFilter === filter.key 
                        ? 'bg-indigo-600 text-white border-indigo-600' 
                        : 'bg-white hover:bg-gray-100'
                    }`}
                >
                    {filter.label}
                </button>
            ))}
          </div>
        </div>

        <div className="mb-10 text-center">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                ✨ Gợi ý sản phẩm phù hợp cho tôi
            </button>
        </div>

        {/* <ProductList courses={displayedCourses} onViewDetail={handleViewDetail} /> */}
      </main>

      <Footer />

      {/* <ProductModal course={selectedCourse} onClose={handleCloseModal} /> */}
    </div>
  );
}