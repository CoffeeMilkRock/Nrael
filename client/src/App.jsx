import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tiêu đề và bộ lọc */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Khám phá các khóa học</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-600">Lọc theo giá:</span>
            <button className="px-3 py-1 text-sm bg-white border rounded-full hover:bg-gray-100">{'< 500K'}</button>
            <button className="px-3 py-1 text-sm bg-white border rounded-full hover:bg-gray-100">500K - 1tr</button>
            <button className="px-3 py-1 text-sm bg-white border rounded-full hover:bg-gray-100">{'> 1tr'}</button>
          </div>
        </div>

        {/* Nút gợi ý AI */}
        <div className="mb-10 text-center">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                ✨ Gợi ý sản phẩm phù hợp cho tôi
            </button>
        </div>

        {/* Danh sách sản phẩm */}
        <ProductList courses={mockCourses} />

      </main>

      <Footer />
    </div>
    </>
  )
}

export default App
