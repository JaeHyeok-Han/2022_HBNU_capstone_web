import styled from 'styled-components';
import thema from '../style/thema';
import type { MovieDetail } from '../interfaces/movie';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  padding: 5px 10px;
`;
const PosterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;

  & img,
  div {
    width: 133px;
    height: 190px;
  }
`;
const InfoBox = styled.div`
  width: 60%;
  height: 100%;

  & div:nth-child(1) {
    font: ${thema.font.h5};
  }
  & div {
    font: ${thema.font.p2};
  }
`;

function DetailBox({ item }: { item: MovieDetail }) {
  console.log(item);

  return (
    <Container>
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
        <div>감독: {item.directors.director.map((ele) => ele.directorNm).join(', ')}</div>
        <div>
          출연:{' '}
          {item.actors.actor
            .map((ele) => ele.actorNm)
            .slice(0, 5)
            .join(', ')}
        </div>
      </InfoBox>
    </Container>
  );
}

export default DetailBox;