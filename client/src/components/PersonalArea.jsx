import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../features/aviaSlice";

const PersonalArea = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCart());
  }, []);


  let auth = useSelector((state) => state.auth);
  const cartAll = useSelector((state) => state.avia.cart);

  if (auth.data == null || cartAll.length < 1) {
    return <div className="section"><h1>Вы не авторизированы</h1></div>
  } 
    
  const data = auth.data;
  const cartPers = cartAll.filter((cart) => cart.user === auth.data._id);
  if (cartPers.length<1){
    return (
      <div className="section">
        <h1>У вас нету заказов</h1>
      </div>
    );
  }
    return (
      <div className="section">
        <div className="personal_data">
          <img src={data.avatarUrl} alt="" />
          <div>
            <div className="personal_data__p">
              Email:
              <p>{data.email}</p>{" "}
            </div>
            <div className="personal_data__p">
              Name:
              <p>{data.fullName}</p>{" "}
            </div>
          </div>
        </div>
        <div>
          <div className="personal">
            <div className="avialist avialist__personal">
              {cartPers[0].avia.map((item) => {
                return (
                  <div className="avia__data">
                    <time className="avia__data_el">5:40</time>
                    <time className="avia__data_el">8:40</time>
                    <div className="label_rice avia__data_el">
                      <div>{item.rays}</div>
                    </div>
                    <time className="avia__data_el">
                      {cartPers[0].avia.timeAll}
                    </time>
                    <span className="avia__data_el">
                      {cartPers[0].avia.price}
                    </span>
                    <div className="personal__btn">Заказ в обработке</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  

  
};

export default PersonalArea;
