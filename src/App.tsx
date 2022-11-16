import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/main'} replace={true} />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
