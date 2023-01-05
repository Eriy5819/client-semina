import React from 'react';

export default function Input({ name, value, type, onChange }) {
  return <input type={type} name={name} value={value} onChange={onChange} />;
}
