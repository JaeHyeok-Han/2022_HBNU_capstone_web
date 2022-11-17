import styled from 'styled-components';
import thema from '../style/thema';
import useMovieStore from '../store/movieStore';
import EmotionItem from '../components/EmotionItem';

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

function EmotionBox() {
  const { emotion } = useMovieStore();

  return (
    <Container>
      {emotion.map((ele, index) => (
        <EmotionItem key={index} item={ele} />
      ))}
    </Container>
  );
}

export default EmotionBox;
