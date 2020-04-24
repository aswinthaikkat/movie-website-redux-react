import React from 'react';

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';



function App() {
  return (
    <div className="App">
      <div>
        <MovieList></MovieList>
        <MovieDetails></MovieDetails>

      </div>
    </div>
  );
}

export default App;
