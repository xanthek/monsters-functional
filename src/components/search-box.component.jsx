import "./search-box.styles.css";

const SearchBox = ({ placeholder, className, onSearchHandler }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchHandler}
    />
  );
};

export default SearchBox;
