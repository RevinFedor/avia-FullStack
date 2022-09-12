import { useState } from "react";
import { NavLink } from "react-router-dom";

const arrSlide = [
  {
    text: "Меняйте планы с легкостью",
    description:
      "Поменять рейс на другой можно самому, достаточно пары кликов в личном кабинете. Система автоматически подберет удобные варианты.",
    img: "https://cdn1.tu-tu.ru/aviacore-static/images/exchange.2dfaf.jpg",
  },
  {
    text: "Экономьте время на мелочах",
    description:
      "При покупке авиабилетов оформите сразу билеты на аэроэкспресс, чтобы не терять время на вокзале и прибыть в аэропорт без опозданий.",
    img: "https://cdn1.tu-tu.ru/aviacore-static/images/aeroexpress.848f5.jpg",
  },
  {
    text: "Возвращайте без потерь",
    description:
      "С услугой «100% возврат» можно сдать даже невозвратный билет на самолет и получить все деньги назад. Просто потому что можете.",
    img: "https://cdn1.tu-tu.ru/aviacore-static/images/guarantee.7eb7b.jpg",
  },
  {
    text: "Получайте помощь в нужный момент",
    description:
      "Мы организовали круглосуточный контакт-центр, специалисты которого с удовольствием ответят на ваши вопросы по телефону и эл. почте в любое время суток.",
    img: "https://cdn1.tu-tu.ru/aviacore-static/images/support.83f5e.jpg",
  },
];
const Slider = () => {
  const [counter, setCunter] = useState(0);

  return (
    <div>
      <div className="slider">
        <svg
          onClick={() => (counter > 0 ? setCunter(counter - 1) : setCunter(3))}
          className="svg__button svg__button__left"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000"
          viewBox="0 0 448 512"
          width="35"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        <div className="slider__item">
          {arrSlide.map((slide, index) => {
            if (index === counter) {
              return (
                <>
                  <div key={index} className="slider__item_left">
                    <h2>{slide.text}</h2>
                    <p>{slide.description}</p>
                    <NavLink to="/avialists" className="slider__item_button">
                      Выбрать рейс
                    </NavLink>
                  </div>
                  <div className="slider__item_right">
                    <img className="slider__item_img" src={slide.img} alt="" />
                  </div>
                </>
              );
            }
          })}
        </div>
        <svg
          onClick={() => (counter < 3 ? setCunter(counter + 1) : setCunter(0))}
          className="svg__button svg__button__right"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000"
          viewBox="0 0 448 512"
          width="35"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
