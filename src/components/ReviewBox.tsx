import React, { useState } from 'react';
import styled from 'styled-components';
import thema from '../style/thema';
import useMovieStore from '../store/movieStore';
import EmptyBar from './EmptyBar';
import ReviewItem from './ReviewItem';

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;
const EmotionSelectionBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
`;
const EmotionBtn = styled.span<{ value: string; selected: string }>`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin: 0 10px 0 10px;
  border-radius: 20px;
  background: ${(prop) => (prop.value === prop.selected ? 'black' : 'lightgray')};
  font: ${thema.font.p2};
  color: ${(prop) => (prop.value === prop.selected ? 'white' : 'black')};
`;

function ReviewBox() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('');
  const { review, filteredReview, setFilteredReview } = useMovieStore();
  const cate = ['영상미', '연출', '연기', '스토리', 'OST'];

  const filter = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (isFiltered && currentFilter === e.currentTarget.innerHTML) {
      setIsFiltered(false);
      setCurrentFilter('');
    } else {
      setIsFiltered(true);
      setCurrentFilter(e.currentTarget.innerHTML);
      setFilteredReview(
        review.filter((ele) => {
          let isIt = false;
          ele.emotion.forEach((el) => {
            if (cate[el.category] === e.currentTarget.innerHTML) {
              isIt = true;
            }
          });
          return isIt;
        }),
      );
    }
  };

  return (
    <Container>
      <EmotionSelectionBox>
        <EmotionBtn onClick={filter} value={'영상미'} selected={currentFilter}>
          영상미
        </EmotionBtn>
        <EmotionBtn onClick={filter} value={'연출'} selected={currentFilter}>
          연출
        </EmotionBtn>
        <EmotionBtn onClick={filter} value={'연기'} selected={currentFilter}>
          연기
        </EmotionBtn>
        <EmotionBtn onClick={filter} value={'스토리'} selected={currentFilter}>
          스토리
        </EmotionBtn>
        <EmotionBtn onClick={filter} value={'OST'} selected={currentFilter}>
          OST
        </EmotionBtn>
      </EmotionSelectionBox>
      <EmptyBar value={5} />
      {isFiltered
        ? filteredReview.map((ele, index) => <ReviewItem key={index} item={ele} />)
        : review.map((ele, index) => <ReviewItem key={index} item={ele} />)}
    </Container>
  );
}

export default ReviewBox;
