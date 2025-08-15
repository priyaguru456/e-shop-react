import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", textAlign: "center" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", maxHeight: "150px" }} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button style={{ padding: "5px 10px" }}>View Details</button>
      </Link>
    </div>
  );
}
