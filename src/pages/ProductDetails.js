import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <img src={product.image} alt={product.name} style={{ width: "200px" }} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <Link to="/billing">
        <button style={{ padding: "10px 15px" }}>Buy Now</button>
      </Link>
    </div>
  );
}
