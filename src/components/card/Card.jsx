import React, { useEffect, useState } from "react";

function Card(props) {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  const { title, price, description, img, count } = props;

  const onAdd = () => {
    setSelected(true);
  };

  return (
    <div className="card">
      <img src={img} alt="products" />
      <h1>{title}</h1>
      <p className="price">${price}</p>
      <p>{description}</p>
      <div className="count">
        <span> count :</span>
        <span> {count} </span>
      </div>
      <p>
        <button className={selected && "selected"} onClick={onAdd}>
          {selected ? "selected" : "Add to Cart"}
        </button>
      </p>
    </div>
  );
}

export default Card;
