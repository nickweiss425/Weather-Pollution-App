import "./SearchOption.css";

export const SearchOption = ({ option }) => {
  return (
    <div className="search-option">
        {option.city}, {option.countryCode}
    </div>
  );
};
