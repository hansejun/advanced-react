import React, { useEffect, useState } from 'react';

const ResourceLoader = ({ url, name, children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(url);
      setData(response.data);
    })();
  }, [url]);

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

export default ResourceLoader;
