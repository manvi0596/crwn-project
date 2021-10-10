import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JiyahSHOLoc0izUsDE0HjUYZN73fYa5ySWm69px1Twm3KtpTBtXxJSYrw3siAaePwwTL5JsrHE0mvpj57FxxunM00rCD21k4X";

  const onToken = (token) => {
    console.log(token);
    alert("Pament Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1280px-Zara_Logo.svg.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
