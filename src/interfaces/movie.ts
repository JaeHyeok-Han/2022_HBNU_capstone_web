interface Actor {
  actorEnNm: string;
  actorId: string;
  actorNm: string;
}

interface Director {
  directorEnNm: string;
  directorId: string;
  directorNm: string;
}

interface Plot {
  plotLang: string;
  plotText: string;
}

interface Movie {
  movieCd: string;
  movieNm: string;
  openDt: string;
  rank: string;
  rankOldAndNew: string;
}

interface MovieDetail {
  DOCID: string;
  actors: {
    actor: Actor[];
  };
  company: string;
  directors: {
    director: Director[];
  };
  genre: string;
  keywords: string;
  kmdbUrl: string;
  movieId: string;
  movieSeq: string;
  nation: string;
  plots: {
    plot: Plot[];
  };
  posters: string;
  rating: string;
  repRlsDate: string;
  runtime: string;
  title: string;
}

interface Emotion {
  start: number;
  end: number;
  category: number;
  flag: number;
}

interface Review {
  text: string;
  auth: string;
  rate: string;
  emotion: Emotion[];
}

export type { Movie, MovieDetail, Review };
