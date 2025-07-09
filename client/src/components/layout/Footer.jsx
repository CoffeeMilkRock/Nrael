import React from 'react';
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-white">EduAI</h3>
            <p className="text-gray-400 mt-2">Nền tảng giáo dục tích hợp AI hàng đầu.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Khám phá</h3>
            <ul>
              <li className="mt-1"><a href="#" className="text-gray-400 hover:text-white">Khóa học</a></li>
              <li className="mt-1"><a href="#" className="text-gray-400 hover:text-white">Giảng viên</a></li>
              <li className="mt-1"><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Liên hệ</h3>
            <p className="text-gray-400">Email: support@eduai.com</p>
            <p className="text-gray-400">Hotline: 1900 1234</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          <p>&copy; 2025 EduAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
}
export default Footer;