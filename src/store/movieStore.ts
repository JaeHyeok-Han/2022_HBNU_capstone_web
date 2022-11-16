import create from 'zustand';
import type { Movie } from '../interfaces/movie';

interface MovieStore {
  ranking: Movie[];
  initRanking: (value: Movie[]) => void;
}

const useMovieStore = create<MovieStore>((set) => ({
  ranking: [],
  initRanking: (value: Movie[]) =>
    set(() => ({
      ranking: value,
    })),
}));

export default useMovieStore;
