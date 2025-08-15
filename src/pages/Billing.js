import React, { useState } from "react";

export default function Billing() {
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed! Thank you ${form.name}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Billing Details</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <br /><br />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
        <br /><br />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
        <br /><br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
