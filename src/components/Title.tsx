import styled from 'styled-components';
import thema from '../style/thema';

const Container = styled.header`
  width: 100%;
  height: fit-content;
  text-align: center;
  padding: 15px 0;

  & h1 {
    font: ${thema.font.h3};
  }
`;

function Title() {
  return (
    <Container>
      <h1>Moviecom</h1>
    </Container>
  );
}

export default Title;
