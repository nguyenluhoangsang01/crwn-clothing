import styled from "styled-components";

export const SignInWrapper = styled.section`
  width: 380px;
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    margin: 10px 0;
  }

  form div {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 375px) {
    padding: 0 10px;
  }
`;
