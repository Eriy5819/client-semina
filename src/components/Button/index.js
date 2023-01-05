import React from 'react';

export default function Button(props) {
  const { onClick, children } = props;
  return <div onClick={onClick}>{children}</div>;
}
