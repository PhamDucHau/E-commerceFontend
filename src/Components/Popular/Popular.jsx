import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://e-commercebackend-si06.onrender.com/popularinwomen")
      .then((response) => response.json())
      .then((data) => {        
        setPopularProducts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      {loading && (
        <div className="w-full h-full flex sticky bottom-0 justify-center items-center">
          <Loading />
        </div>
      )}
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
