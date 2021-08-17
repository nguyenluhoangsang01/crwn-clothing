import styled from "styled-components";

export const CollectionPageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 38px;
    text-align: center;
  }

  .items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px 6px;
  }
`;
