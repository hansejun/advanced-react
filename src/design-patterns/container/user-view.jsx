import React from 'react';

const UserView = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default UserView;
