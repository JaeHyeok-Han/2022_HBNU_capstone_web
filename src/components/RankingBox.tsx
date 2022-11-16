import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import thema from '../style/thema';
import useRankingStore from '../store/rankingStore';
import { getRanking } from '../apis/movieAPI';
import RankingItem from './RankingItem';

interface Custom {
  value: number;
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 300px;
`;
const Window = styled.div`
  position: relative;
  width: 210px;
  height: 300px;
  overflow: hidden;
`;
const Slider = styled.div<Custom>`
  position: absolute;
  left: ${(props) => props.value * -210 + 'px'};
  display: flex;
  width: fit-content;
  height: 300px;
  transition: 0.7s;
`;
const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  border-radius: 50%;
  font: ${thema.font.h3};
  color: black;
`;

function RankingBox() {
  const [current, setCurrent] = useState(0);
  const { ranking, initRanking } = useRankingStore();

  const clickBtn = (direction: number) => {
    direction === 1
      ? current < 4
        ? setCurrent(current + 1)
        : setCurrent(0)
      : current > 0
      ? setCurrent(current - 1)
      : setCurrent(4);
  };

  const fetchRanking = useCallback(async () => {
    const response = await getRanking();
    if (!('error' in response)) {
      initRanking(response);
    } else {
      console.log(response.message);
    }
  }, [initRanking]);

  useEffect(() => {
    if (ranking.length === 0) fetchRanking();
  }, [ranking, fetchRanking]);

  return (
    <Container>
      <Btn onClick={() => clickBtn(0)}>
        <i className="fas fa-arrow-circle-left" />
      </Btn>
      <Window>
        <Slider value={current}>
          {ranking.map((ele, index) => (
            <RankingItem key={index} item={ele} />
          ))}
        </Slider>
      </Window>
      <Btn onClick={() => clickBtn(1)}>
        <i className="fas fa-arrow-circle-right" />
      </Btn>
    </Container>
  );
}

export default RankingBox;
