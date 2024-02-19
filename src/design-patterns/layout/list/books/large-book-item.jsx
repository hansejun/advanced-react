import React from 'react';

const LargeBookList = ({ book }) => {
  const { name, price, title, pages } = book;

  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Title: {title}</p>
      <p>Pages: {pages}</p>
    </div>
  );
};

export default LargeBookList;
