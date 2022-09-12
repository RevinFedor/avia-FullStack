import React from 'react';
import { Link } from 'react-router-dom';

import inst from '../../img/Instagram.png'
import tg from "../../img/Telegram.png";
import vk from "../../img/VK.png";
import ws from "../../img/Whatsapp.png";

const Footer = () => {
    return (
      <div className="footer">
        <div className="header__logo">OKEI Airlines</div>
        <div className="footer__links">
          <h1>Сервисы</h1>
          <p>Расписание транспорта </p>
          <p> Журнал путешествий</p>
        </div>
        <div className="footer__links">
          <h1>Пользователям</h1>
          <p>О Сервисе</p>
          <p>Служба поддержки</p>
          <p>Пользовательское соглашение</p>
          <p>Правила программы лояльности OKEI Airlines</p>
        </div>
        <div className="footer__social">
          <img src={inst} alt="" />
          <img src={tg} alt="" />
          <img src={vk} alt="" />
          <img src={ws} alt="" />
        </div>
      </div>
    );
};

export default Footer;