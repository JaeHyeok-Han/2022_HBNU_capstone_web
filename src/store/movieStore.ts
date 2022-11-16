import create from 'zustand';
import type { MovieDetail, Review } from '../interfaces/movie';

interface MovieStore {
  movie: MovieDetail | null;
  setMovie: (value: MovieDetail) => void;
  review: Review[];
  addReview: (value: Review[]) => void;
}

const useMovieStore = create<MovieStore>((set) => ({
  movie: null,
  setMovie: (value: MovieDetail) =>
    set(() => ({
      movie: value,
    })),
  review: [],
  addReview: (value: Review[]) =>
    set((state) => ({
      review: [...state.review, ...value],
    })),
}));

export default useMovieStore;
