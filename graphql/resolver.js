import { getMovies, getById, addMovie, deleteMovie, updateMovie } from "./DB";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  // 데이터 조작
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
    updateMovie: (_, { id, name, score }) => updateMovie(id, name, score),
  },
};

export default resolvers;
