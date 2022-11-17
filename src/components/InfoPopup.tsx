import styled from 'styled-components';
import thema from '../style/thema';
import type { MovieDetail } from '../interfaces/movie';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  padding: 20px;
  text-align: left;
`;
const PosterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;

  & img,
  div {
    width: 112px;
    height: 160px;
  }
`;
const InfoBox = styled.div`
  width: calc(60% - 15px);
  height: 100%;
  margin-left: 10px;

  & div:nth-child(1) {
    font: ${thema.font.h5};
  }
  & div {
    font: ${thema.font.p2};
  }
`;
const PlotBox = styled.div`
  width: 100%;
  height: fit-content;
  padding: 5px 10px;
  margin-top: 10px;
  font: ${thema.font.p2};
`;

function InfoPopup({ item }: { item: MovieDetail }) {
  return (
    <Container>
      <PosterBox>
        {item.posters.split('|')[0] ? (
          <img src={item.posters.split('|')[0]} alt="영화 포스터" />
        ) : (
          <img src={require('../images/default_poster.png')} alt="영화 포스터" />
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
      {item.plots ? <PlotBox>{item.plots.plot[0].plotText}</PlotBox> : null}
    </Container>
  );
}

export default InfoPopup;
