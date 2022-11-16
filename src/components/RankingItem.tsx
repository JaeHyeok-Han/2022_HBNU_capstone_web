import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { getMovieInfo } from '../apis/movieAPI';
import type { Movie, MovieDetail } from '../interfaces/movie';

const Container = styled.div`
  width: 210px;
  height: 300px;

  & img {
    height: 100%;
  }
`;
const EmptyPoster = styled.div`
  width: 210px;
  height: 300px;
`;

function RankingItem({ item }: { item: Movie }) {
  const [info, setInfo] = useState<MovieDetail | null>(null);

  const fetchMovieInfo = useCallback(async () => {
    const response = await getMovieInfo(item.movieNm);
    if (!('error' in response)) {
      setInfo(response);
    } else {
      console.log(response.message);
    }
  }, [item.movieNm]);

  useEffect(() => {
    fetchMovieInfo();
  }, [fetchMovieInfo]);

  return (
    <Container>
      {info ? (
        info.posters.split('|')[0] ? (
          <img src={info.posters.split('|')[0]} alt="영화 포스터" />
        ) : (
          <EmptyPoster>포스터없음</EmptyPoster>
        )
      ) : null}
    </Container>
  );
}

export default RankingItem;
