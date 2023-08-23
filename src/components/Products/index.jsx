import { useEffect, useState } from "react";
import Card from "../card/Card";
import Filter from "../filter";
import { API_BASE_ADDRESS } from "../../constants";

function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState();

  const fetchProducts = (category) => {
    const url = category ? `products/category/${category}` : "products";
    fetch(`${API_BASE_ADDRESS}${url}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  return (
    <div className="productList">
      <div className="heading">
        <h1>Product list</h1>
        <Filter category={category} setCategory={setCategory} />
      </div>
      <ul>
        {products.map((item) => {
          return (
            <li key={item.id}>
              <Card {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
