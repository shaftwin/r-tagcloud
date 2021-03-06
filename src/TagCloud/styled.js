import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const FloatingText = styled.p`
  font-size: 1rem;
  color: #08fdd8;
  margin: 10px;
`;

export const FloatingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) scale(1);
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    opacity: 1 !important;
    z-index: 1 !important;
  }
`;
