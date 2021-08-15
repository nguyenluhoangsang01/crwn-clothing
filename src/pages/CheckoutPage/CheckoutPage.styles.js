import styled from "styled-components";

export const CheckoutPageWrapper = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutPageHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(128, 128, 128, 0.4);
`;

export const CheckoutPageHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 22.75%;

  &:last-child {
    width: 9%;
  }
`;

export const CheckoutPageTotalPrice = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 35px;
  text-transform: uppercase;
`;
