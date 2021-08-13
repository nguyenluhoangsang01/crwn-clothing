import styled from "styled-components";

export const SignInAndSignUpPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 60px auto;

  @media screen and (min-width: 1280px) {
    width: 850px;
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;

    section:first-child {
      padding-bottom: 50px;
    }

    section:last-child {
      padding-top: 50px;
      border-top: 1px solid rgba(128, 128, 128, 0.4);
    }
  }
`;
