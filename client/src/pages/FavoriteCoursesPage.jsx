import {React,useState }from "react";
import { useFavorites } from "../hooks/useFavorites";
import { mockCourses } from "../constants/data";
import ProductList from './../components/course/ProductList';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductModal from './../components/ui/ProductModal';
const FavoriteCoursesPage = () => {
    const { favoriteIds } = useFavorites();
    const favoriteCourses = mockCourses.filter(course => favoriteIds.includes(course.id));
    const [searchTerm, setSearchTerm] = useState('');
    const [priceFilter, setPriceFilter] = useState('all');
    const [selectedCourse, setSelectedCourse] = useState(null);
        
    const handleViewDetail = (course) => setSelectedCourse(course);
    const handleCloseModal = () => setSelectedCourse(null);
    const handleSearchChange = (event) => setSearchTerm(event.target.value);
    return (
    <div className="bg-gray-50 min-h-screen font-sans">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <h1 className="text-3xl font-bold mb-6">Khóa học yêu thích</h1>
            <p className="text-gray-600">Danh sách các khóa học bạn đã đánh dấu yêu thích.</p>
            <div className="pt-10">
            {favoriteCourses.length > 0 ? (
                <ProductList 
                    courses={favoriteCourses} 
                    isLoading={false} 
                    onViewDetail={handleViewDetail}
                />
                ) : (
                <div className="text-center col-span-3">
                    <p className="text-gray-500">Bạn chưa có khóa học yêu thích nào.</p>
                </div>
            )}
            </div>
        </div>
        <Footer/>

        {/* Modal cho chi tiết khóa học */}
        <ProductModal course={selectedCourse} onClose={handleCloseModal} />

    </div>
  );
}
export default FavoriteCoursesPage;