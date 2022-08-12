import React from 'react';
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
        <MovieList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
