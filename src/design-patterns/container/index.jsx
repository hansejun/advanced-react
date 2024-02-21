import React from 'react';
import ResourceLoader from './resource-loader';
import DataResource from './data-resource';

const AppContainer = () => {
  return (
    <>
      <DataResource getData={() => getUser('1')} name="user">
        <UserView />
      </DataResource>

      <DataResource getData={() => getBook('2')} name="book">
        <SmallBookList />
      </DataResource>
    </>
  );
};

export default AppContainer;
