import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAdd, cartRemove } from "../features/cartSlice";
import { favouritesAdd, favouritesRemove } from "../features/favouritesSlice";
import axios from "../axios";

const AviaItem = (props) => {
    const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart.array);
  let favourites = useSelector((state) => state.favourites.array);

  // есть ли товар в корзине
  const [isCart, setIsCart] = useState(false);
  useEffect(() => {
    const cartIsIn = cart.find((el) => el.rays === props.aviaItem.rays);
    if (cartIsIn) {
      setIsCart(true);
    } else setIsCart(false);
  });
  // есть ли товар в избранном
  const [isfavourites, setIsfavourites] = useState(false);
  useEffect(() => {
    const favouritesIsIn = favourites.find(
      (el) => el.rays === props.aviaItem.rays
    );
    if (favouritesIsIn) {
      setIsfavourites(true);
    } else setIsfavourites(false);
  });

  const favouritesHundler = () => {
    if (isfavourites) {
      dispatch(favouritesRemove(props.aviaItem));
    } else {
      dispatch(favouritesAdd(props.aviaItem));
    }
  };

  const SubmitCart= async()=>{

    dispatch(cartAdd(props.aviaItem));
  }

  return (
    <div className="avia__data" key={props.aviaItem.idSlug}>
      <time className="avia__data_el">{props.aviaItem.date1}</time>
      <time className="avia__data_el">{props.aviaItem.date2}</time>
      <div className="label_rice avia__data_el">
        <div>{props.aviaItem.rays}</div>
      </div>
      <time className="avia__data_el">{props.aviaItem.timeAll}</time>
      <span className="avia__data_el">{props.aviaItem.price} руб</span>
      <svg
        onClick={favouritesHundler}
        width="23"
        height="20"
        viewBox="0 0 23 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4867 1.65429C14.0706 -0.627558 18.0635 -0.551821 20.5528 1.90098C23.0409 4.35486 23.1267 8.2629 20.8124 10.812L11.4845 20L2.15892 10.812C-0.155442 8.2629 -0.0685429 4.34837 2.41851 1.90098C4.90996 -0.548575 8.89519 -0.630804 11.4867 1.65429ZM18.9952 3.42979C17.3452 1.80469 14.6833 1.73869 12.9563 3.26425L11.4878 4.56044L10.0183 3.26533C8.2858 1.73761 5.62935 1.80469 3.97498 3.43195C2.33601 5.04407 2.25351 7.62455 3.76379 9.32971L11.4856 16.937L19.2075 9.3308C20.7189 7.62455 20.6364 5.04732 18.9952 3.42979Z"
          fill={isfavourites ? "red" : "currentColor"}
        />
      </svg>

      {props.inCart ? (
        <button
          className={isCart ? "btn-active_cart" : ""}
          onClick={() => {
            dispatch(cartRemove(props.aviaItem));
          }}
        >
          {isCart ? "Удалить" : "Добавить рейс"}
        </button>
      ) : (
        <button
          className={isCart ? "btn-active" : ""}
          onClick={SubmitCart}
          disabled={isCart}
        >
          {isCart ? "Рейс добавлен" : "Добавить рейс"}
        </button>
      )}
    </div>
  );
};

export default AviaItem;
