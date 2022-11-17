import styled from 'styled-components';
import thema from '../style/thema';
import type { Review } from '../interfaces/movie';

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 5px 10px;
  font: ${thema.font.p2};
`;
const ProfileBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
`;
const TextBox = styled.div`
  width: 100%;
  height: fit-content;
  padding: 3px 10px;
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 40px;
  color: lightgray;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;
  margin-left: 5px;
`;
const RateBox = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  width: 50px;
  height: 100%;

  & i {
    font-size: 16px;
    color: #ffbb00;
    margin-right: 3px;
  }
`;

function ReviewItem({ item }: { item: Review }) {
  return (
    <Container>
      <ProfileBox>
        <ImgBox>
          <i className="fas fa-user-circle"></i>
        </ImgBox>
        <InfoBox>{item.auth}</InfoBox>
        <RateBox>
          <i className="fas fa-star"></i>
          {item.rate}
        </RateBox>
      </ProfileBox>
      <TextBox>{item.text}</TextBox>
    </Container>
  );
}

export default ReviewItem;
