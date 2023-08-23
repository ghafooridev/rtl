const Filter = ({ filters, setCategory }) => (
  <div className="filter">
    <label htmlFor="category"> Category </label>
    <select
      name="category"
      id="category"
      onChange={(e) => {
        const { value } = e.target;
        value !== "all" ? setCategory(value) : setCategory(null);
      }}
    >
      <option value="all">all</option>
      <option value="electronics">electronics</option>
      <option value="jewelery">jewelery</option>
      <option value="men's clothing">men's clothing</option>
      <option value="women's clothing">women's clothing</option>
    </select>
  </div>
);

export default Filter;
