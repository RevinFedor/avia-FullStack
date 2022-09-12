import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AviaItem from "./AviaItem.jsx";

const AviaLists = () => {
  let avia = useSelector((state) => state.avia.array);


  const [input, setInput] = useState("");

  // Поиск
  const [aviaFilter, setAviaFilter] = useState(avia);
  useEffect(() => {
    const arraySearch = avia.filter((aviaItem) =>
      aviaItem.rays.toLowerCase().includes(input.toLowerCase())
    );
    setAviaFilter(arraySearch);
  }, [input, avia]);




  return (
    <div className="avialist">
      <input
        className="avialist__search"
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Поиск..."
      />

      <div className="avia">
        <div className="avia__name">
          <label>Вылет</label>
          <label>Прилет</label>
          <label>Рейс</label>
          <label>В пути</label>
          <label>Лучшая цена</label>
        </div>
        {aviaFilter.map((aviaItem) => {
          return <AviaItem key={aviaItem.idSlug} aviaItem={aviaItem} />;
        })}
      </div>
    </div>
  );
};

export default AviaLists;
