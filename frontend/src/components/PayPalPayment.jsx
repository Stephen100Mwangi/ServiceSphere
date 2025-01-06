/* eslint-disable react/prop-types */
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalPayment = ({ product }) => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: product?.cost,
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          // Handle successful capture
          console.log("Payment successful!", details);
        });
      }}
      onError={(err) => {
        // Handle error
        console.error("Payment error:", err);
      }}
    />
  );
};

export default PayPalPayment;
