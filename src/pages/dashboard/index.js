import React from 'react';

export default function Dashboard() {
  const token = localStorage.getItem('token');
  console.log(token);
  return <div>Dashboard</div>;
}
