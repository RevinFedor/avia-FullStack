import UserModel from "./models/User.js";
import AviaModel from "./models/Avia.js";
import AviaPersModel from "./models/AviaPers.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {
  loginValidation,
  registerValidation,
} from "./validations/validations.js";

import checkAuth from "./utils/checkAuth.js";

mongoose
  .connect(
    "mongodb+srv://admin:rrr123@cluster0.gin8uzz.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Ok"))
  .catch((e) => console.log("DB Error " + e));

  
const app = express();
app.use(cors());
app.use(express.json());

app.post("/auth/register", registerValidation, async (req, res) => {
  try {
    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl:
        "https://pravoslavie.ru/sas/image/103595/359501.p.jpg?mtime=161901118780",
      password: req.body.password,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );
    const { ...userData } = user._doc;

    res.json({ ...userData, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не удалось зарегестрироваться",
    });
  }
});

app.post("/auth/login", loginValidation, async (req, res) => {
  try {
    // получаем информация о пользователе
    const user = await UserModel.findOne({ email: req.body.email });
    
    if (!user) {
      return res.status(403).json({
        message: "Неверный емаил",
      });
    }
    
    // проверяем пароль
    const isValidPass = Boolean(req.body.password === user._doc.password);

    if (!isValidPass) {
      return res.status(404).json({
        message: "Неверный пароль",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    // вытаскиваем инфомарцию о пользователе
    const {...userData } = user._doc;
    res.json({ ...userData, token });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось авторизоваться",
    });
  }
});

app.get("/auth/me", checkAuth, async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }

    const { ...userData } = user._doc;
    res.json(userData);
     
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Нет доступа",
    });
  }
});

app.get("/avia", async (req, res) => {
  try {
    const avia = await AviaModel.find().populate("reys");
    res.json(avia);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить авиабилеты",
    });
  }
});




app.post("/avia/cart",checkAuth, async (req, res) => {
  try {
    const doc = new AviaPersModel({
      avia: req.body.avia,
      user: req.userId,
    });

    const avia = await doc.save();
    res.json(avia);

  } catch (error) {
    console.log("Ошибка: " + error);
    res.status(500).json({
      message: "Не удалось создать статью",
    });
  }
});

app.get("/avia/cart", async (req, res) => {
  try {
    const avia = await AviaPersModel.find().populate("avia");
    res.json(avia);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить авиабилеты",
    });
  }
});






app.listen(4444, (err) => {
  console.log(err);
});
