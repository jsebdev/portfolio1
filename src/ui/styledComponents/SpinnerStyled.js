import styled, { keyframes } from "styled-components";

// const color = 'rgb(78, 133, 252)';
const maxWidth = '7px';

const spinnerOne = keyframes`
{
  0% {
    transform: rotate(0deg);
    border-width: ${maxWidth};
  }
  50% {
    transform: rotate(180deg);
    border-width: 1px;
  }
  100% {
    transform: rotate(360deg);
    border-width: ${maxWidth};
  }
}`;

const spinnerTwo = keyframes`
{
  0% {
    transform: rotate(0deg);
    border-width: 1px;
  }
  50% {
    transform: rotate(180deg);
    border-width: ${maxWidth};
  }
  100% {
    transform: rotate(360deg);
    border-width: 1px;
  }
}`;

export const SpinnerBackgroundS = styled.div`
  position: absolute;
  width: 105%;
  height: 105%;
  top: 0px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.spinnerBackground};
  border-radius: 1rem;
`

export const SpinnerS = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  margin-block-start: 20vh;
`;
export const SpinnerInside1S = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  border: ${maxWidth} solid transparent;
  border-top-color: red;
  border-top-color: ${({ theme }) => theme.spinner};
  border-radius: 50%;
  animation: ${spinnerOne} 0.8s linear infinite;
`;
export const SpinnerInside2S = styled(SpinnerInside1S)`
  border: $maxWidth solid transparent;
  border-bottom-color: ${({ theme }) => theme.spinner};
  animation: ${spinnerTwo} 1.3s linear infinite;
`;
