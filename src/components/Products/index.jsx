import { useEffect, useState } from "react";
import Card from "../card/Card";
import Filter from "../filter";
import { API_BASE_ADDRESS } from "../../constants";
import { useFetch } from "../../hook/useFetch";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState();
  const { data, loading } = useFetch(`${API_BASE_ADDRESS}/products`);

  useEffect(() => {
    setProducts(data);
  }, [loading]);

  useEffect(() => {
    let productsFiltered = [...products];

    productsFiltered = productsFiltered.filter((item) => {
      return item.category === category;
    });
    setFilteredProducts(productsFiltered);
  }, [category]);

  const allProducts = filteredProducts.length ? filteredProducts : products;

  return loading ? (
    <div>loading Products...</div>
  ) : (
    <div className="productList">
      <div className="heading">
        <h1>Product list</h1>
        <Filter category={category} setCategory={setCategory} />
      </div>
      <ul>
        {allProducts.map((item) => {
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
