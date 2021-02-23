import styled from 'styled-components';

interface BarProps {
  currentPosition: number;
}

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
  }
`;

export const Bar = styled.div<BarProps>`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;

  > div {
    height: 4px;
    border-radius: 4px;
    background: var(--green);
    width: ${props => props.currentPosition}%;
  }

  > span {
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
    left: ${props => props.currentPosition}%;
  }
`;
