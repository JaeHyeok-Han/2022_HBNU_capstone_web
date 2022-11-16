import styled from 'styled-components';

interface custom {
  value: number;
}

const Container = styled.div<custom>`
  width: 100%;
  height: ${(prop) => prop.value + 'px'};
`;

function EmptyBar({ value }: { value: number }) {
  return <Container value={value} />;
}

export default EmptyBar;
