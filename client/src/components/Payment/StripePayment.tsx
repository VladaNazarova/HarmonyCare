import { useState } from "react";

const StripePayment = () => {
  const [url, setUrl] = useState(null);

  const handleClick = () => {
    fetch("http://localhost:9000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 1 },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        setUrl(url);
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  if (url) {
    window.location = url;
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
      >
        Pay
      </button>
    </div>
  );
};

export default StripePayment;
