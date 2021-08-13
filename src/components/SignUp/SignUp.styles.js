import styled from "styled-components";

export const SignUpWrapper = styled.section`
  width: 380px;
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 375px) {
    padding: 0 10px;
    border-top: 1px solid rgba(128, 128, 128, 0.4);
  }
`;
