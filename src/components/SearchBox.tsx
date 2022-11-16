import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import thema from '../style/thema';
import useSearchStore from '../store/searchStore';
import { getSearchResult } from '../apis/movieAPI';

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
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const { setSearchKeyword, setSearchResult } = useSearchStore();

  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const search = async () => {
    if (value.length > 1) {
      const response = await getSearchResult(value);
      if (!('error' in response)) {
        if (response.length !== 0) {
          const newRes = response.map((ele) => {
            ele.title = ele.title
              .replace(/( !HS )/g, '')
              .replace(/( !HE )/g, '')
              .trim();
            return ele;
          });
          setSearchKeyword(value);
          setSearchResult(newRes);
          navigate('/search');
        } else {
          // 검색결과가 없다는 팝업
        }
      } else {
        //  오류가 있다는 팝업
      }
    } else {
      // 검색어가 너무 짧다는 팝업
    }
  };

  return (
    <Container>
      <SearchBar>
        <input type="text" value={value} onChange={valueChange} />
        <button onClick={search}>
          <i className="fas fa-search"></i>
        </button>
      </SearchBar>
    </Container>
  );
}

export default SearchBox;
