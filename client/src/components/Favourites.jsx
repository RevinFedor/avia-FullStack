import { useSelector } from "react-redux";
import AviaItem from "./AviaItem.jsx";

const Favourites = () => {
  let favourites = useSelector((state) => state.favourites.array);
  return (
    <div className="avialist">
      {favourites.length ? (
        
          <div className="avia">
            <div className="avia__name">
              <label>Вылет</label>
              <label>Прилет</label>
              <label>Рейс</label>
              <label>В пути</label>
              <label>Лучшая цена</label>
            </div>
            {favourites.map((aviaItem) => {
              return <AviaItem key={aviaItem.id} aviaItem={aviaItem} />;
            })}
          </div>
        
      ) : (
        <h1>Избранных рейсов нет</h1>
      )}
    </div>
  );
};

export default Favourites;
