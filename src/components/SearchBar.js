import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "8px",
        margin: "15px 0",
        width: "100%",
        maxWidth: "300px",
        border: "1px solid gray",
        borderRadius: "4px",
      }}
    />
  );
}
