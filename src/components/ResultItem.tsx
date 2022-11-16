import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import thema from '../style/thema';
import useMovieStore from '../store/movieStore';
import type { MovieDetail } from '../interfaces/movie';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 5px 10px;
`;
const PosterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;

  & img,
  div {
    width: 63px;
    height: 90px;
  }
`;
const InfoBox = styled.div`
  width: 75%;
  height: 100%;

  & div:nth-child(1) {
    font: ${thema.font.pb1};
  }
  & div {
    font: ${thema.font.p3};
  }
`;

function ResultItem({ item }: { item: MovieDetail }) {
  const navigate = useNavigate();
  const { setMovie } = useMovieStore();

  const selectMovie = () => {
    setMovie(item);
    navigate('/detail');
  };

  return (
    <Container onClick={selectMovie}>
      <PosterBox>
        {item.posters.split('|')[0] ? (
          <img src={item.posters.split('|')[0]} alt="영화 포스터" />
        ) : (
          <div>없음</div>
        )}
      </PosterBox>
      <InfoBox>
        <div>{item.title}</div>
        <div>장르: {item.genre.split(',').slice(0, 3).join(', ')}</div>
        <div>
          <span>{item.repRlsDate !== '' ? '개봉일: ' + item.repRlsDate : '개봉예정'}</span>
          <span> | </span>
          <span>{item.runtime}분</span>
        </div>
      </InfoBox>
    </Container>
  );
}

export default ResultItem;
