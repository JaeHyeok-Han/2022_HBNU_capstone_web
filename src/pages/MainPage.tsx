import styled from 'styled-components';
import Title from '../components/Title';
import SearchBox from '../components/SearchBox';
import EmptyBar from '../components/EmptyBar';
import RankingBox from '../components/RankingBox';

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

function MainPage() {
  return (
    <Container>
      <Title />
      <SearchBox />
      <EmptyBar value={50} />
      <RankingBox />
    </Container>
  );
}

export default MainPage;
