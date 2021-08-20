import styled, { keyframes } from "styled-components";

const spin = keyframes`
	to {
		transform: rotate(360deg);
	}
`;

export const SpinnerWrapper = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinnerCircled = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: ${spin} 1s linear infinite;
`;
