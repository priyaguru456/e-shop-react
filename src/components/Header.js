import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>E-Shop</h2>
        <div>
          <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
          <Link to="/billing" style={{ color: "white" }}>Billing</Link>
        </div>
      </nav>
    </header>
  );
}
