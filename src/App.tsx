import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate to={'/main'} replace={true} />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Container>
  );
}

export default App;
