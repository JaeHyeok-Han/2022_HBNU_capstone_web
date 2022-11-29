import create from 'zustand';
import type { MovieDetail, Review, EmotionAnalyze } from '../interfaces/movie';

interface MovieStore {
  movie: MovieDetail | null;
  setMovie: (value: MovieDetail) => void;
  review: Review[];
  setReview: (value: Review[]) => void;
  emotion: EmotionAnalyze[];
  setEmotion: (value: EmotionAnalyze[]) => void;
  filteredReview: Review[];
  setFilteredReview: (value: Review[]) => void;
}

const useMovieStore = create<MovieStore>((set) => ({
  movie: null,
  setMovie: (value: MovieDetail) =>
    set(() => ({
      movie: value,
    })),
  review: [],
  setReview: (value: Review[]) =>
    set(() => ({
      review: value,
    })),
  emotion: [],
  setEmotion: (value: EmotionAnalyze[]) =>
    set(() => ({
      emotion: value,
    })),
  filteredReview: [],
  setFilteredReview: (value: Review[]) =>
    set(() => ({
      filteredReview: value,
    })),
}));

export default useMovieStore;
