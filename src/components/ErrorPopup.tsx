import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 140px;

  & div:nth-child(1) {
    width: 100%;
    height: 20px;
    border-radius: 8px 8px 0 0;
    background-color: #ff5555;
  }
  & div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

function ErrorPopup({ message }: { message: string }) {
  return (
    <Container>
      <div />
      <div>{message}</div>
    </Container>
  );
}

export default ErrorPopup;
