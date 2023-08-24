import React, { useState } from "react";

function Card(props) {
  const [selected, setSelected] = useState(false);

  const { title, price, description, image, rating } = props;

  const onAdd = () => {
    setSelected(!selected);
  };

  return (
    <div className="card">
      <img src={image} alt="products" />
      <h6>{title}</h6>
      <p className="price">${price}</p>
      <p className="description">{description}</p>
      <div className="rate">{rating.rate} &#9650;</div>

      <button className={selected ? "selected" : ""} onClick={onAdd}>
        {selected ? "selected" : "Add to Cart"}
      </button>
    </div>
  );
}

export default Card;
