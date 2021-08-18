import styled from "styled-components";

import StripeCheckout from "react-stripe-checkout";

export const StyledStripeCheckout = styled(StripeCheckout)`
  margin-left: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
