import styled from 'styled-components';
import thema from '../style/thema';
import type { EmotionAnalyze } from '../interfaces/movie';

interface Custom {
  value: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 0 0 10px;
  font: ${thema.font.p2};
  color: #282828;
`;
const BarBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  margin: 0 0 2px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7%;
  height: 100%;
  font: ${thema.font.p3};

  &:first-child,
  &:last-child {
    width: 5%;
    font: ${thema.font.p1};
  }
`;
const Bar = styled.div`
  position: relative;
  width: 36%;
  height: 100%;
`;
const PosiBar = styled.div<Custom>`
  position: absolute;
  right: 0;
  width: ${(prop) => prop.value + '%'};
  height: 80%;
  border-radius: 8px 0 0 8px;
  background: #4d5dfa;
`;
const NegaBar = styled.div<Custom>`
  position: absolute;
  left: 0;
  width: ${(prop) => prop.value + '%'};
  height: 80%;
  border-radius: 0 8px 8px 0;
  background: #fa4141;
`;

function EmotionItem({ item }: { item: EmotionAnalyze }) {
  return (
    <Container>
      <BarBox>
        <Box>
          <i className="fas fa-thumbs-up"></i>
        </Box>
        <Box>{item.positive}%</Box>
        <Bar>
          <PosiBar value={item.positive} />
        </Bar>
        <Bar>
          <NegaBar value={item.negative} />
        </Bar>
        <Box>{item.negative}%</Box>
        <Box>
          <i className="fas fa-thumbs-down"></i>
        </Box>
      </BarBox>
      <span>{item.emotion}</span>
    </Container>
  );
}

export default EmotionItem;
