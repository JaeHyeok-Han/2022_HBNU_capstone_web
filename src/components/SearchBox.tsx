import styled from 'styled-components';
import thema from '../style/thema';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 100%;
  border: 1px solid black;
  border-radius: 20px;

  & input {
    width: calc(100% - 40px);
    height: 70%;
    border: none;
    border-radius: 20px 0 0 20px;
    text-align: center;
    font: ${thema.font.p1};
    caret-color: black;

    &:focus {
      outline: none;
    }
  }
  & button {
    width: 40px;
    height: 100%;
    border: none;
    border-radius: 50%;
    font: ${thema.font.p2};
    color: black;
  }
`;

function SearchBox() {
  return (
    <Container>
      <SearchBar>
        <input type="text" />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </SearchBar>
    </Container>
  );
}

export default SearchBox;
