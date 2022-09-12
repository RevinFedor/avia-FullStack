import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";


import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectAuth } from "../../features/authSlice";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const isAuth = useSelector(selectAuth);
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "test1@gmail.com",
      password: "12345",
    },
    mode: "onChange",
  });

  const onSubmit = async (values)=>{
    const data = await dispatch(fetchAuth(values))
    if (!data.payload) {
      return alert("Не удалось авторизоваться");
    }
    if ('token' in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    } 
  }
  useEffect(()=>{

  },[])

  if (isAuth) {
    return <Navigate to='/' />
  }


  return (
    <div className="section">
      <Paper classes={{ root: styles.root }}>
        <Typography classes={{ root: styles.title }} variant="h5">
          Вход в аккаунт
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type="email"
            className={styles.field}
            label="E-Mail"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            {...register("email", { required: "Укажите почту" })}
            fullWidth
          />
          <TextField
            type="password"
            className={styles.field}
            label="Пароль"
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            {...register("password", { required: "Укажите пароль" })}
            fullWidth
          />
          <Button
            disabled={!isValid}
            type="submit"
            size="large"
            variant="contained"
            fullWidth
          >
            Войти
          </Button>
        </form>
      </Paper>
    </div>
  );
};
