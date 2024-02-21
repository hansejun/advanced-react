import React, { useEffect, useState } from 'react';

const DataResource = ({ getData = () => {}, name, children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getData();
      setData(response.data);
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [name]: data });
        }
      })}
    </>
  );
};

export default DataResource;
