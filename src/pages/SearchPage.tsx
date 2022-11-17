import styled from 'styled-components';
import thema from '../style/thema';
import useSearchStore from '../store/searchStore';
import Title from '../components/Title';
import SearchBox from '../components/SearchBox';
import EmptyBar from '../components/EmptyBar';
import ResultItem from '../components/ResultItem';

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const Text = styled.p`
  text-align: center;
  font: ${thema.font.p2};
`;
const ResultBox = styled.div`
  width: 100%;
  height: fit-content;
`;

function SearchPage() {
  const { searchKeyword, searchResult } = useSearchStore();

  return (
    <Container>
      <Title />
      <SearchBox />
      <EmptyBar value={20} />
      <Text>
        "{searchKeyword}" 검색결과 {searchResult.length}건
      </Text>
      <EmptyBar value={20} />
      <ResultBox>
        {searchResult.map((ele, index) => (
          <ResultItem key={index} item={ele} />
        ))}
      </ResultBox>
    </Container>
  );
}

export default SearchPage;
