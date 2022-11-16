import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import InfoPopup from './InfoPopup';
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
  const MySwal = withReactContent(Swal);

  const showInfo = () => {
    MySwal.fire({
      html: <InfoPopup item={info as MovieDetail} />,
      showConfirmButton: false,
      width: '330px',
      padding: 0,
      customClass: {
        popup: 'popup-border-radius',
      },
    });
  };

  const fetchMovieInfo = useCallback(async () => {
    const response = await getMovieInfo(item.movieNm);
    if (!('error' in response)) {
      response.title = response.title
        .replace(/( !HS )/g, '')
        .replace(/( !HE )/g, '')
        .trim();
      setInfo(response);
    } else {
      console.log(response.message);
    }
  }, [item.movieNm]);

  useEffect(() => {
    fetchMovieInfo();
  }, [fetchMovieInfo]);

  return (
    <Container onClick={showInfo}>
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
