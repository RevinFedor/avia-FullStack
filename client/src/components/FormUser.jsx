import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartRemoveAll } from "../features/cartSlice.jsx";
import { flightAdd, personalAdd } from "../features/flightSlice.jsx";
import axios from "../axios.js";

const FormUser = (props) => {
  const [name, setname] = useState('');
  const [email, setemail] = useState("");
  const [data, setdate] = useState('');
  const [number, setnumber] = useState('');
  const [checkbox, setchecbox] = useState();

  const [classFalid, setclassFalid] = useState("");
  const [emailClassFalid, setemailClassFalid] = useState();
  const [numberClassFalid, setnumberClassFalid] = useState();
  const [nameClassFalid, setnameClassFalid] = useState();
  const [dataClassFalid, setdataClassFalid] = useState();


  const cart = useSelector((state) => state.cart.array);
  const dispatch = useDispatch();
  const formHundler = async () => {
    if (!checkbox) {
      setclassFalid("active");
    } else setclassFalid("");

    if (!data) {
      setdataClassFalid("active");
    } else setdataClassFalid("");

    if (name.length < 8) {
      setnameClassFalid("active");
    } else setnameClassFalid("");

    if (number.length < 10) {
      setnumberClassFalid("active");
    } else setnumberClassFalid("");

    if (!email.includes("@")) {
      setemailClassFalid("active");
    } else setemailClassFalid("");

    if (
      checkbox &&
      email.includes("@") &&
      number.length >= 10 &&
      name.length >= 8
    ) {
      await axios.post("avia/cart", { avia: cart });
      dispatch(personalAdd({ name, data, number }));
      dispatch(flightAdd(cart));
      dispatch(cartRemoveAll());
      props.clickShow();
    }
  };
  return (
    <>
      <div className="user">
        <div className="user__inner">
          <h3>Пассажиры</h3>
          <div className="user__div user__div_personal">
            <span className="user__span_el">
              <p> Пол</p>
              <select className="user_label">
                <option>Мужской</option>
                <option>Женский</option>
              </select>
            </span>
            <span className="user__span_el">
              <p className={nameClassFalid}>ФИО</p>
              <input
                className="user_label"
                onChange={(e) => setname(e.target.value)}
                type="text"
              />
            </span>
            <span className="user__span_el">
              <p className={dataClassFalid}>Дата рождения</p>
              <input
                onChange={(e) => setdate(e.target.value)}
                className="user_label"
                type="date"
              />
            </span>
          </div>
          <h3>Контактные данные</h3>
          <div className="user__div user__div_contacts">
            <span className="user__span_el user__span_el_email">
              <p className={emailClassFalid}>Почта</p>
              <input
                onChange={(e) => setemail(e.target.value)}
                className="user_label "
                type="text"
                placeholder="Введите почту"
              />
            </span>
            <span className="user__span_el">
              <p className={numberClassFalid}>Номер</p>
              <input
                className="user_label"
                onChange={(e) => setnumber(e.target.value)}
                type="text"
              />
            </span>
          </div>
          <div className="user__div_inpput">
            <input
              type="checkbox"
              onChange={(e) => setchecbox(e.target.checked)}
            />
            <p className={classFalid}>
              Я ознакомился и согласился со всеми правилами и условиями, включая
              политику отмены/возврата
            </p>
          </div>
        </div>
        <button onClick={formHundler} className="button__last">
          Закончить бронирование
        </button>
      </div>
    </>
  );
};

export default FormUser;
