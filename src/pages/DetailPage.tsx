import { useState } from 'react';
import styled from 'styled-components';
import thema from '../style/thema';
import useMovieStore from '../store/movieStore';
import Title from '../components/Title';
import DetailBox from '../components/DetailBox';
import EmptyBar from '../components/EmptyBar';
import ReviewBox from '../components/ReviewBox';
import EmotionBox from '../components/EmotionBox';
import type { MovieDetail } from '../interfaces/movie';

interface custom {
  value: boolean;
  position: boolean;
}

const BtnBox = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
`;
const Btn = styled.div<custom>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: ${(prop) => (prop.position ? '0 2px 0 4px' : '0 4px 0 2px')};
  border-radius: 6px;
  font: ${thema.font.pb2};
  color: ${(prop) => (prop.value ? 'white' : 'black')};
  background: #2257c0;
`;

function DetailPage() {
  const [tab, setTab] = useState(true);
  const { movie } = useMovieStore();

  return (
    <div>
      <Title />
      <DetailBox item={movie as MovieDetail} />
      <EmptyBar value={10} />
      <BtnBox>
        <Btn
          value={tab}
          position={true}
          onClick={() => {
            setTab(true);
          }}>
          리뷰 필터링
        </Btn>
        <Btn
          value={!tab}
          position={false}
          onClick={() => {
            setTab(false);
          }}>
          감상포인트 분석
        </Btn>
      </BtnBox>
      <EmptyBar value={13} />
      {tab ? <ReviewBox /> : <EmotionBox />}
    </div>
  );
}

export default DetailPage;
