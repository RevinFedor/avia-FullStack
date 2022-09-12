import { useState } from "react";

const FormInput = () => {
  const [formValid,setFormValid] = useState()
  return (
    <div className="form">
      <div className="form__left">
        <h1>Будьте в курсе!</h1>
        <p className="form__text">
          Подпишитесь на рассылку, чтобы получать информацию о выгодных акциях и
          специальных предложениях
        </p>
        <div className="form__form">
          <input onChange={(e) => setFormValid(e.target.value)} type="text" />
          <button
            onClick={() =>
              formValid ? alert("Уведомление отправлено вам на почту") :  alert("Введите почту" )
            }
          >
            Подписаться
          </button>
        </div>
        <p className="form__p">
          Нажимая кнопку, я принимаю условия Пользовательского соглашения.
        </p>
      </div>
      <img
        src="https://yastatic.net/s3/travel/static/_/fcf3da8eaad827d95b47.png"
        alt=""
      />
    </div>
  );
};

export default FormInput;
