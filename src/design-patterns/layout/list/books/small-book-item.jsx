import React from 'react';

const SmallBookList = ({ book }) => {
  const { name, price } = book;
  return (
    <p>
      name : {name}, price:{price}
    </p>
  );
};

export default SmallBookList;
