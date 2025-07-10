import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FavoriteCoursesPage from './pages/FavoriteCoursesPage.jsx'
import { FavoritesProvider } from './contexts/FavoritesContext';
import { ToastProvider } from './contexts/ToastContext';
import Toast from './components/common/Toast';
function App() {

  return (
    <>
    <FavoritesProvider>
      <ToastProvider>
        <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fav-courses" element={<FavoriteCoursesPage />} />
        </Routes>
      </Router>
      </ToastProvider>
    </FavoritesProvider>
      

    </>
  )
}

export default App
