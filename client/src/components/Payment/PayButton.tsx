import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import StripePayment from "./StripePayment";

export default function PayButton() {
  const [product, setProduct] = useState({
    name: "service",
    price: 100,
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:9000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      credentials: "include",
    })
      .then((response) => {
        console.log("🚀 ~ makePayment ~ response:", response);
        const status = { response };
        console.log("🚀 ~ makePayment ~ status:", status);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <StripeCheckout
        stripeKey={import.meta.env.VITE_KEY}
        token={makePayment}
        name="Service"
        amount={product.price * 100}
      >
        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Pay
        </button>
      </StripeCheckout>
      <StripePayment />
    </div>
  );
}
