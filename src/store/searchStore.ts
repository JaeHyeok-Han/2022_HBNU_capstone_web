import create from 'zustand';
import type { MovieDetail } from '../interfaces/movie';

interface SearchStore {
  searchKeyword: string;
  setSearchKeyword: (value: string) => void;
  searchResult: MovieDetail[];
  setSearchResult: (value: MovieDetail[]) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
  searchKeyword: '',
  setSearchKeyword: (value: string) =>
    set(() => ({
      searchKeyword: value,
    })),
  searchResult: [],
  setSearchResult: (value: MovieDetail[]) =>
    set(() => ({
      searchResult: value,
    })),
}));

export default useSearchStore;
