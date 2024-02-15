
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

export default function StripePayment({ order }) {
  const [product, setProduct] = useState({
    name: "service",
    price: 100, // Установите цену заказа
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch("http://localhost:3000/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      credentials: "include",
    })
      .then((response) => {
        console.log("Оплата успешна, ответ сервера:", response);
        // Используйте ID заказа для обновления статуса в базе данных
        fetch(`http://localhost:3000/order/${order.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: true }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Статус заказа обновлён", data);
            // Добавить логику для оповещения пользователя об успешной оплате или обновления интерфейса
          })
          .catch((err) => console.log(err));
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
        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          Pay
        </button>
      </StripeCheckout>
    </div>
  );
}