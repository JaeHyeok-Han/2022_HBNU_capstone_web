import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import useMovieStore from '../store/movieStore';
import { getRanking } from '../apis/movieAPI';
import RankingItem from './RankingItem';

const Container = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid black;
`;

function RankingBox() {
  const { ranking, initRanking } = useMovieStore();

  const fetchRanking = useCallback(async () => {
    const response = await getRanking();
    if (!('error' in response)) {
      initRanking(response);
    } else {
      console.log(response.message);
    }
  }, [initRanking]);

  useEffect(() => {
    fetchRanking();
  }, [fetchRanking]);
  return (
    <Container>
      {ranking.map((ele, index) => (
        <RankingItem key={index} item={ele} />
      ))}
    </Container>
  );
}

export default RankingBox;
