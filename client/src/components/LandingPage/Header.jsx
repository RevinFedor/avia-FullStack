import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout, selectAuth } from "../../features/authSlice";

const Header = () => {
  const isAuth = useSelector(selectAuth);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
       dispatch(logout());
       window.localStorage.removeItem("token");
    }
   
  };
  return (
    <div className="header">
      <div className="header__logo">OKEI Airlines</div>
      <div className="header__links">
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/avialists">Купить билет</NavLink>
        <NavLink to="/favourites">Избранное</NavLink>
        <NavLink to="/cart">Оформление</NavLink>
        {isAuth ? (
          <>
            <NavLink to="/personalarea">Личный кабинет</NavLink>
            <button className="header__logout" onClick={onClickLogout}>
              {" "}
              Выйти
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">Вход</NavLink>
            <NavLink to="/register">Регистрация</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
