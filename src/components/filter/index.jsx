const Filter = ({ setCategory }) => {
  const onChangeCategory = (e) => {
    const { value } = e.target;
    setCategory(value);
  };
  return (
    <div className="filter">
      <label htmlFor="category"> Category </label>
      <select name="category" id="category" onChange={onChangeCategory}>
        <option value="all">all</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>
    </div>
  );
};

export default Filter;
