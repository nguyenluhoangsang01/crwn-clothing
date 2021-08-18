import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/users/users.selectors";
import { StyledStripeCheckout } from "./StripeButton.styles";

const StripeButton = ({ price }) => {
  const currentUser = useSelector(selectCurrentUser);

  const priceForStripe = price * 100;
  const publicShableKey =
    "pk_test_51JPf1lEjHz2y6SOy9UD9QllH5U1Uz8q6gRYfCWL71xidK5rqUpEXQn8VS4u1dqNhOOFNBHeaHehmS0xL6E4NPlN200D5npptqJ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successfully!");
  };

  return (
    <StyledStripeCheckout
      name="CRWN Clothing Co." // the pop-in header title
      description={`Your total price is $${price}`} // the pop-in header subtitle
      image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
      label="Pay Now" // text inside the Stripe button
      panelLabel="Pay Now" // prepended to the amount in the bottom pay button
      amount={priceForStripe} // cents
      stripeKey={publicShableKey}
      email={currentUser?.email}
      // Note: Enabling either address option will give the user the ability to
      // fill out both. Addresses are sent as a second parameter in the token callback.
      shippingAddress
      billingAddress
      alipay // accept Alipay (default false)
      bitcoin // accept Bitcoins (default false)
      token={onToken} // submit callback
      // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
      // you are using multiple stripe keys
      reconfigureOnUpdate={false}
    />
  );
};

export default StripeButton;
