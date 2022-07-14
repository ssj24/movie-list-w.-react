import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MovieList from './components/MovieList.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import './App.css';

function App() {
  return (
    <div className="App box-shadow">
      <header>
        Movie List
      </header>
      <ErrorBoundary>
        <Routes>
          <Route path="/list" element={
              <MovieList />
          }/>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
