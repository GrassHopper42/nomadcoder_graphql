let movies = [
  {
    id: 0,
    name: "Lala Land",
    score: 78,
  },
  {
    id: 1,
    name: "About Time",
    score: 99,
  },
  {
    id: 2,
    name: "Iron Man",
    score: 71,
  },
  {
    id: 3,
    name: "Logan",
    score: 52,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => id === movie.id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length,
    name,
    score,
  };
  const _movies = movies.concat(newMovie);
  movies = _movies;
  return newMovie;
};

export const updateMovie = (id, name, score) => {
  const targetMovieIndex = movies.findIndex((movie) => movie.id === id);
  const updateMovie = {
    id,
    name,
    score,
  };
  movies.splice(targetMovieIndex, 1, updateMovie);
  return updateMovie;
};
