import { useEffect, useState } from 'react';

export const includeUser = (Component, userId) => {
  return props => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await getUser(userId);
        setUser(response);
      })();
    }, [userId]);

    return <Component user={user} {...props} />;
  };
};
