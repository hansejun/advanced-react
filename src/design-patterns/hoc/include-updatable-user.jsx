import { useEffect, useState } from 'react';

export const includeUpdatableUser = (Component, userId) => props => {
  const [initialUser, setInitialUser] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getUser(userId);
      setInitialUser(response);
      setUser(response);
    })();
  }, []);

  const handleChangeUser = data => {
    setUser({ user, ...data });
  };

  const handlePostUser = async data => {
    const response = await postUser(data);
    setInitialUser(response);
    setUser(response);
  };

  const handleResetUser = () => {
    setUser(initialUser);
  };

  return (
    <Component
      {...props}
      user={user}
      onChangeUser={handleChangeUser}
      onPostUser={handlePostUser}
      onResetUser={handleResetUser}
    />
  );
};
