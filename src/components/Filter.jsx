import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default Filter;
