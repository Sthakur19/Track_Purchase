// ProductSearch.jsx
import React, { useState } from "react";

function ProductSearch({ filterProducts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterProducts(term); // Pass the search term to the filterProducts function
  };

  return (
    <input
      type="text"
      placeholder="Search for a product..."
      value={searchTerm}
      onChange={handleInputChange}
      className="placeholder:text-slate-400  pl-2  bg-white border rounded border-slate-300 w-56 h-10 mb-6 custom-position"
    />
  );
}

export default ProductSearch;
