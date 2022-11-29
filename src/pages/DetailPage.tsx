import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import thema from '../style/thema';
import useMovieStore from '../store/movieStore';
import Title from '../components/Title';
import DetailBox from '../components/DetailBox';
import EmptyBar from '../components/EmptyBar';
import ReviewBox from '../components/ReviewBox';
import EmotionBox from '../components/EmotionBox';
import { getReviewData } from '../apis/reviewAPI';
import type { MovieDetail } from '../interfaces/movie';

interface custom {
  value: boolean;
  position: boolean;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;
const BackBtn = styled.div`
  position: absolute;
  top: 30px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 25px;
  color: #2257c0;
`;
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
  color: ${(prop) => (prop.value ? 'white' : '#282828')};
  background: #2257c0;
`;

function DetailPage() {
  const [tab, setTab] = useState(true);
  const navigate = useNavigate();
  const { movie, setReview, setEmotion } = useMovieStore();

  const fetchReviewData = useCallback(async () => {
    const response = await getReviewData(
      (movie as MovieDetail).DOCID,
      (movie as MovieDetail).title,
    );
    if (!('error' in response)) {
      setReview(response.review);
      setEmotion(response.emotion);
    } else {
      // 리뷰데이터가 없을때의 처리
    }
  }, [movie, setReview, setEmotion]);

  useEffect(() => {
    fetchReviewData();
  }, [fetchReviewData]);

  return (
    <Container>
      <BackBtn
        onClick={() => {
          navigate(-1);
        }}>
        <i className="far fa-chevron-left"></i>
      </BackBtn>
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
      <EmptyBar value={20} />
      {tab ? <ReviewBox /> : <EmotionBox />}
    </Container>
  );
}

export default DetailPage;
