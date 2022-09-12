import { useReducer } from "react";
import svg from "../../img/rotate.svg";

const initialState = {
  number_1: "",
  number_2: "",
  number_3: "",
  number_4: "",
  number_5: "",
  number_6: "",
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "number_1":
      if (payload) {
        return { number_1: "" };
      }
      return { number_1: "active_p" };
    case "number_2":
      if (payload) {
        return { number_2: "" };
      }
      return { number_2: "active_p" };
    case "number_3":
      if (payload) {
        return { number_3: "" };
      }
      return { number_3: "active_p" };
    case "number_4":
      if (payload) {
        return { number_4: "" };
      }
      return { number_4: "active_p" };
    case "number_5":
      if (payload) {
        return { number_5: "" };
      }
      return { number_5: "active_p" };
    case "number_6":
      if (payload) {
        return { number_6: "" };
      }
      return { number_6: "active_p" };

    default:
      return state;
  }
};

const QuestionList = () => {
  const [classes, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="question">
      <p className="question__q">Появился вопрос?</p>
      <h1 className="question__title">У нас есть готовые ответы</h1>
      <p className="question__text">
        Ответы на самые популярные вопросы мы оставили ниже. Остальные ответы
        хранятся в нашей базе знаний. Если вы не нашли то, что вам нужно,
        напишите нам в чат. Мы с радостью ответим на любой, даже самый сложный
        вопрос
      </p>
      <div className="question__list">
        <div className="question__item">
          <div
            className="question__button"
            onClick={() => {
              classes.number_1 === "active_p"
                ? dispatch({ type: "number_1", payload: true })
                : dispatch({ type: "number_1", payload: false });
            }}
          >
            <h1>Как действовать, если мне не пришла маршрутная квитанция?</h1>
            <img className={classes.number_1} src={svg} />
          </div>

          <p className={classes.number_1}>
            Письмо с маршрутной квитанцией мы мгновенно отправляем на почту,
            указанную при оформлении. Если письма нет в папке «Входящие», мы
            рекомендуем проверить папку «Спам». В случае, если и в ней письма не
            нашлось, то скачать маршрутную квитанцию можно в разделе Документы
            по моим заказам, заполнив все необходимые строки формы. Заходить в
            личный кабинет для этого не нужно.
          </p>
        </div>
        <div className="question__item">
          <div
            className="question__button"
            onClick={() => {
              classes.number_2 === "active_p"
                ? dispatch({ type: "number_2", payload: true })
                : dispatch({ type: "number_2", payload: false });
            }}
          >
            <h1>Как мне вернуть или обменять билет?</h1>
            <img className={classes.number_2} src={svg} />
          </div>

          <p className={classes.number_2}>
            Правила возврата билета могут различаться в зависимости от
            перевозчика и выбранного тарифа. Рассчитать их сможет наша Служба
            заботы. Чтобы оформить запрос заполните данные в специальной форме.
          </p>
        </div>
        <div className="question__item">
          <div
            className="question__button"
            onClick={() => {
              classes.number_3 === "active_p"
                ? dispatch({ type: "number_3", payload: true })
                : dispatch({ type: "number_3", payload: false });
            }}
          >
            <h1>Как мне поменять информацию в билете?</h1>
            <img className={classes.number_3} src={svg} />
          </div>

          <p className={classes.number_3}>
            Правила изменения информации в билете зависят от условий выбранного
            тарифа и правил перевозчика. Чтобы уточнить возможность
            корректировки данных, заполните специальную форму.
          </p>
        </div>
        <div className="question__item">
          <div
            className="question__button"
            onClick={() => {
              classes.number_4 === "active_p"
                ? dispatch({ type: "number_4", payload: true })
                : dispatch({ type: "number_4", payload: false });
            }}
          >
            <h1>Как провозить за границу домашних животных?</h1>
            <img className={classes.number_4} src={svg} />
          </div>

          <p className={classes.number_4}>
            Каждая страна по-своему регламентирует требования к ввозу животных.
            В некоторых — действует запрет на ввоз питомцев. Поэтому, прежде,
            чем брать его с собой, убедитесь, что это возможно. После пройдите
            ряд процедур:
            <ul>
              <li>
                Чипируйте питомца в любой ветклинике. Так, в случае потери
                животного, вам его вернут.
              </li>
              <li>Сделайте любимцу прививку от бешенства.</li>
              <li>
                Получите ветеринарное свидетельство по форме №1. Это нужно для
                прохождения ветеринарного пограничного контроля и получения
                международного ветеринарного сертификата.
              </li>
              <li>
                Получите международный паспорт животного с указанием всех его
                прививок и вакцинаций.
              </li>
              <li>
                Согласуйте транспортировку животного с авиакомпанией. Для этого
                свяжитесь с нашей Службой заботы после оплаты билета. Обратите
                внимание: количество мест для животных в самолете ограничено.
              </li>
            </ul>
          </p>
        </div>
        <div className="question__item">
          <div
            className="question__button"
            onClick={() => {
              classes.number_5 === "active_p"
                ? dispatch({ type: "number_5", payload: true })
                : dispatch({ type: "number_5", payload: false });
            }}
          >
            <h1>
              Ребёнку исполнилось 14 лет. Можно ли оформить билет на
              свидетельство о рождении?
            </h1>
            <img className={classes.number_5} src={svg} />
          </div>

          <p className={classes.number_5}>
            Если на момент перелета ребенку уже будет 14 лет, то оформить билет
            необходимо, указав данные его паспорта. Перелёт по свидетельству о
            рождении будет невозможен.
          </p>
        </div>
        <div className="question__item">
          <div
            className="question__button"
            onClick={() => {
              classes.number_6 === "active_p"
                ? dispatch({ type: "number_6", payload: true })
                : dispatch({ type: "number_6", payload: false });
            }}
          >
            <h1>Почему OKEI Airlines?</h1>
            <img className={classes.number_6} src={svg} />
          </div>

          <p className={`${classes.number_6}`}>
            <div className="p__block">
              <div className="p__item">
                <h1>Низкие цены</h1>
                <span>
                  Не расстраивайтесь, если не успели найти подходящий авиабилет
                  на распродаже или у других операторов, потому что у Купибилета
                  найдутся варианты на все четыре стороны.
                </span>
              </div>
              <div className="p__item">
                <h1>Удобство сервиса</h1>
                <span>
                  При помощи формы поиска выбирайте дешёвые билеты от известных
                  мировых авиакомпаний. Планируйте интересные маршруты,
                  комбинируя рейсы разных перевозчиков. Вы можете купить дешёвые
                  авиабилеты онлайн на сайте Купибилет или в приложении.
                </span>
              </div>
              <div className="p__item">
                <h1>Поддержка</h1>
                <span>
                  Круглосуточная служба поддержки поможет клиентам, где бы они
                  ни находились, даже в другом часовом поясе. Напишите нам,
                  чтобы обменять, вернуть билет на самолёт или
                  проконсультироваться до оформления заказа.
                </span>
              </div>
              <div className="p__item">
                <h1>Безопасность</h1>
                <span>
                  Купибилет гарантирует безопасную онлайн-оплату авиабилетов
                  банковской картой, так как мы используем современные
                  технологии шифрования. Не бойтесь, ваши данные не попадут к
                  третьим лицам.
                </span>
              </div>
              <div className="p__item">
                <h1>Электронный билет</h1>
                <span>
                  Электронный билет — современная альтернатива бумажному билету.
                  Это безопасно, а главное — вы получаете билет сразу на
                  электронную почту и в приложении. Распечатайте его в
                  аэропорту, дома или в отеле.
                </span>
              </div>
              <div className="p__item">
                <h1>Выгодаы</h1>
                <span>
                  Мы работаем с партнёрами по всему миру, поэтому цены на
                  авиабилеты, которые вы находите, – наиболее выгодные и без
                  комиссии. Поиск стоимости предложений происходит
                  автоматически, в результате выводятся самые дешёвые
                  авиабилеты.
                </span>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
