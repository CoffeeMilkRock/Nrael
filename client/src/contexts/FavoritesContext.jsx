import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    // const [favoriteIds, setFavoriteIds] = useState(() => {
    //     try {
    //         const localData = localStorage.getItem('favoriteCourses');
    //         return localData ? JSON.parse(localData) : [];
    //     } catch (error) {
    //         console.error("Failed to parse favorites from localStorage", error);
    //         return [];
    //     }
    // });

    const [favoriteIds, setFavoriteIds] = useState(() => {
        try {
            const localData = localStorage.getItem('favoriteCourses');
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error("Failed to parse favorites from localStorage", error);
            return [];
        }   
    });
    useEffect(() => {
        localStorage.setItem('favoriteCourses', JSON.stringify(favoriteIds));
    }, [favoriteIds]);

    const toggleFavorite = (courseId) => {
        setFavoriteIds(prevIds => {
            if (prevIds.includes(courseId)) {
                return prevIds.filter(id => id !== courseId);
            } else {
                return [...prevIds, courseId];
            }
        });
    };

    const isFavorite = (courseId) => favoriteIds.includes(courseId);

    return (
        <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};