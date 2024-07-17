// UserDetails.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function UserDetails() {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div className="UserDetails">
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Country: {user.country}</p>
      <p>Region: {user.region}</p>
      <p>Text: {user.text}</p>
      <p>IBAN: {user.iban}</p>
      <p>Credit Card: {user["Credit Card"]}</p>
      <p>CVV: {user.cvv}</p>
    </div>
  );
}
