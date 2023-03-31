import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { PodcastPage } from './pages/PodcastPage';
import { MoviesPage } from './pages/MoviesPage';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="/podcast" element={<PodcastPage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
