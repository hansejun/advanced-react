import React, { useEffect, useState } from 'react';

const UserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(url);
      setUser(response.data);
    })();
  }, []);
  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
      })}
    </>
  );
};

export default UserLoader;
