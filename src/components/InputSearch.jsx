import { useRef } from "react";
import randomNumber from "../utils/randomNumber";

const InputSearch = ({ setLocationNumber }) => {
  const locationSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (locationSearch.current.value === "") {
      setLocationNumber(randomNumber(126));
    } else {
      setLocationNumber(locationSearch.current.value.trim());
    }
  };

  return (
    <div className="content__search">
      <form onSubmit={handleSubmit}>
        <input
          className="input__search"
          ref={locationSearch}
          type="text"
          placeholder="Search Location"
        />
        <button className="button__search">Search</button>
        <h6>
          <span>*</span> if the search location field is empty, a random search
          will be executed
        </h6>
      </form>
    </div>
  );
};

export default InputSearch;
