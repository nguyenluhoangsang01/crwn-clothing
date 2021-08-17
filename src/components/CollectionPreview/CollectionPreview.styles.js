import styled from "styled-components";

export const CollectionPreviewWrapper = styled.div`
  margin-bottom: 30px;

  h2 {
    font-size: 28px;
    margin-bottom: 25px;
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2rem;
`;
