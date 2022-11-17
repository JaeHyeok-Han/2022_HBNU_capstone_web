import create from 'zustand';
import type { MovieDetail, Review, EmotionAnalyze } from '../interfaces/movie';

interface MovieStore {
  movie: MovieDetail | null;
  setMovie: (value: MovieDetail) => void;
  review: Review[];
  addReview: (value: Review[]) => void;
  emotion: EmotionAnalyze[];
  setEmotion: (value: EmotionAnalyze[]) => void;
}

const useMovieStore = create<MovieStore>((set) => ({
  movie: null,
  setMovie: (value: MovieDetail) =>
    set(() => ({
      movie: value,
    })),
  review: [
    {
      text: '반전의 반전의 반전 완전 흥미로웠어요',
      auth: 'HJ(hyun****)',
      rate: '9',
      emotion: [{ start: 0, end: 2, category: 0, flag: 1 }],
    },
    {
      text: '엔드게임에서 엔드 됬어야했다..',
      auth: 'gammablue(flyg****)',
      rate: '1',
      emotion: [{ start: 0, end: 4, category: 0, flag: 1 }],
    },
    {
      text: '마블은 이제 난 졸업해야겠다',
      auth: 'DAKSOON(daks****)',
      rate: '2',
      emotion: [{ start: 0, end: 2, category: 0, flag: 0 }],
    },
    {
      text: '추모의 진중함은 느껴지지만, 영화적 재미는 포기한 듯한.',
      auth: '지승훈(jsho****)',
      rate: '5',
      emotion: [{ start: 0, end: 2, category: 0, flag: 0 }],
    },
    {
      text: '보스만의 부재가 너무 크다.',
      auth: 'Multinine(grjs****)',
      rate: '6',
      emotion: [{ start: 0, end: 3, category: 0, flag: 0 }],
    },
    {
      text: '높은 점수 중 관람객이 없는건 기분탓인가',
      auth: '크롱크롱(qkkr****)',
      rate: '7',
      emotion: [{ start: 8, end: 11, category: 0, flag: 0 }],
    },
  ],
  addReview: (value: Review[]) =>
    set((state) => ({
      review: [...state.review, ...value],
    })),
  emotion: [
    {
      emotion: '영상미',
      positive: 80,
      negative: 20,
    },
    {
      emotion: '연출',
      positive: 65,
      negative: 35,
    },
    {
      emotion: '연기',
      positive: 35,
      negative: 65,
    },
    {
      emotion: '스토리',
      positive: 40,
      negative: 60,
    },
    {
      emotion: 'OST',
      positive: 90,
      negative: 10,
    },
  ],
  setEmotion: (value: EmotionAnalyze[]) =>
    set(() => ({
      emotion: value,
    })),
}));

export default useMovieStore;
