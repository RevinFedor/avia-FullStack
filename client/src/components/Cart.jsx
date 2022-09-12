import React, { useState } from "react";
import { useSelector } from "react-redux";
import AviaItem from "./AviaItem.jsx";
import Modal from "./Modal";

const Cart = () => {
  let cart = useSelector((state) => state.cart.array);
  const [showModal, setShowModal] = useState(false);
  const clickShow = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="avialist">
        {cart.length ? (
          <div>
            <button className="button__users" onClick={clickShow}>
              Оформить бронирование
            </button>
            <div className="avia">
              <div className="avia__name">
                <label>Вылет</label>
                <label>Прилет</label>
                <label>Рейс</label>
                <label>В пути</label>
                <label>Лучшая цена</label>
              </div>
            </div>

            {cart.map((aviaItem) => {
              return (
                <AviaItem key={aviaItem.id} aviaItem={aviaItem} inCart={true} />
              );
            })}
          </div>
        ) : (
          <h1>Броней нет</h1>
        )}
      </div>
      {showModal ? <Modal clickShow={clickShow} /> : <></>}
    </>
  );
};

export default Cart;
