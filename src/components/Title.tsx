import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: fit-content;
  text-align: center;
  padding: 20px 0;

  & img {
    width: 200px;
  }
`;

function Title() {
  const navigate = useNavigate();

  return (
    <Container>
      <img
        src={require('../images/moviecom_logo.png')}
        alt="서비스 로고"
        onClick={() => {
          navigate('/main', { replace: true });
        }}
      />
    </Container>
  );
}

export default Title;
