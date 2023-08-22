import { useEffect, useState } from "react";
import Card from "../card/Card";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="list">
      {products.map((item) => {
        return <Card {...item} />;
      })}
    </div>
  );
}

export default Products;
