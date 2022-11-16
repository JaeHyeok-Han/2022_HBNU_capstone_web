import create from 'zustand';
import type { MovieDetail } from '../interfaces/movie';

interface MovieStore {
  movie: MovieDetail | null;
  setMovie: (value: MovieDetail) => void;
}

const useMovieStore = create<MovieStore>((set) => ({
  movie: null,
  setMovie: (value: MovieDetail) =>
    set(() => ({
      movie: value,
    })),
}));

export default useMovieStore;
