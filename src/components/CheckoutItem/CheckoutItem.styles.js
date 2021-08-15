import styled from "styled-components";

export const CheckoutItemWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.4);
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    padding-left: 20px;
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
`;

export const CheckoutItemImage = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
