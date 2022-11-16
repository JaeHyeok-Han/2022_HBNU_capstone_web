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
  actors: Actor[];
  company: string;
  directors: Director[];
  genre: string;
  keywords: string;
  kmdbUrl: string;
  movieId: string;
  movieSeq: string;
  nation: string;
  plots: Plot[];
  posters: string;
  rating: string;
  repRlsDate: '';
  runtime: '65';
  title: ' 잠자리 심문 : 불륜  !HS 자백 !HE ';
}

export type { Movie, MovieDetail };
