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
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
  }
`;
