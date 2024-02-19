import React from 'react';

const NumberList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <div>
          <p>index:{i}</p>
          <ItemComponent key={i} {...{ [sourceName]: item }} />
        </div>
      ))}
    </>
  );
};

export default NumberList;
