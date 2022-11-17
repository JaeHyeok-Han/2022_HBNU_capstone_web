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

  & span {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    margin: 0 10px 0 10px;
    border-radius: 20px;
    background: lightgray;
    font: ${thema.font.p2};
  }
`;

function ReviewBox() {
  const { review } = useMovieStore();

  return (
    <Container>
      <EmotionSelectionBox>
        <span>영상미</span>
        <span>연출</span>
        <span>연기</span>
        <span>스토리</span>
        <span>OST</span>
      </EmotionSelectionBox>
      <EmptyBar value={5} />
      {review.map((ele, index) => (
        <ReviewItem key={index} item={ele} />
      ))}
    </Container>
  );
}

export default ReviewBox;
