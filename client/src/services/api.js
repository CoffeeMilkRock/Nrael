import { mockCourses } from "../constants/data";

// Lấy ngẫu nhiên một vài khóa học để làm gợi ý
const suggestedCourses = [mockCourses[1], mockCourses[3], mockCourses[4]];

export const getAISuggestions = (userId = '123') => {
    console.log(`Đang lấy gợi ý cho user: ${userId}...`);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                console.log("Lấy gợi ý thành công!");
                resolve(suggestedCourses);
            } else {
                console.error("Lỗi API: Không thể lấy gợi ý.");
                reject(new Error("Hệ thống không thể lấy gợi ý lúc này. Vui lòng thử lại sau."));
            }
        }, 1500); // Giả lập độ trễ mạng 1.5 giây
    });
};
