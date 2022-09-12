import jwt from "jsonwebtoken";



export default (req, res, next) => {
  // проверяем есть ли у пользователя токен
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      // получение id пользователя из jwt токена
      const decoded = jwt.verify(token, "secret123");
      req.userId = decoded._id;
      next();
      
    } catch (error) {
        res.status(403).json({
          message: "Нет доступа по jwt токену",
        });
    }
  } else{
    res.status(403).json({
      message: "Нет доступа по jwt токену",
    });
  }
};
