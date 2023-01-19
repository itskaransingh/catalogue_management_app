import React from "react";
import { useAppContext } from "../context/AppContext";

const Select = () => {
  const { setcatvalue, categories } = useAppContext();

  return (
    <select
      onChange={(e) => (
        setcatvalue(e.target.value), console.log(e.target.value)
      )}
      className="select lg:navbar-end  select-primary navbar-center lg:max-w-xs"
    >
      <option>All</option>
      {categories ? (
        categories?.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))
      ) : (
        <option disabled selected>
          Loading...
        </option>
      )}
    </select>
  );
};

export default Select;
