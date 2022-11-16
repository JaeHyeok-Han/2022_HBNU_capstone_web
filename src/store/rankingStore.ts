import create from 'zustand';
import type { Movie } from '../interfaces/movie';

interface RankingStore {
  ranking: Movie[];
  initRanking: (value: Movie[]) => void;
}

const useRankingStore = create<RankingStore>((set) => ({
  ranking: [],
  initRanking: (value: Movie[]) =>
    set(() => ({
      ranking: value,
    })),
}));

export default useRankingStore;
