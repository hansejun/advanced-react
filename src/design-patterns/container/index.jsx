import React from 'react';
import ResourceLoader from './resource-loader';

const AppContainer = () => {
  return (
    <>
      <ResourceLoader url="/users/1" name="user">
        <UserView />
      </ResourceLoader>

      <ResourceLoader url="/books/1" name="book">
        <UserView />
      </ResourceLoader>

      <ResourceLoader url="/foods/1" name="food">
        <UserView />
      </ResourceLoader>
    </>
  );
};

export default AppContainer;
