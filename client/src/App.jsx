import { BrowserRouter, Route, Routes } from "react-router-dom";

import AviaLists from "./components/AviaLists";
import Cart from "./components/Cart";
import Header from "./components/LandingPage/Header";
import Footer from "./components/LandingPage/Footer";

import LandingPage from "./components/LandingPage/LandingPage";
import Favourites from "./components/Favourites";
import PersonalArea from "./components/PersonalArea";
import { useEffect } from "react";
import { fetchAvia, fetchCart } from "./features/aviaSlice";
import { useDispatch } from "react-redux";

import { Login } from "./components/Login";
import { fetchAuthMe } from "./features/authSlice";
import { Registration } from "./components/Registration";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAvia());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/avialists" element={<AviaLists />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/personalarea" element={<PersonalArea />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
