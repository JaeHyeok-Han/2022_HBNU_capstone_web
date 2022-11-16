import styled from 'styled-components';
import type { MovieDetail } from '../interfaces/movie';

const Container = styled.div`
  width: 100%;
  height: 500px;
`;

function InfoPopup({ item }: { item: MovieDetail }) {
  return <Container>{item.title}</Container>;
}

export default InfoPopup;
