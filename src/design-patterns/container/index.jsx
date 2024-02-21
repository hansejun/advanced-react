import React from 'react';
import ResourceLoader from './resource-loader';
import DataResource from './data-resource';
import DataResourceWithRender from './data-resource-with-render';
import UserView from './user-view';

const AppContainer = () => {
  return (
    <>
      <DataResourceWithRender
        getData={() => getUser('1')}
        render={data => <UserView user={data} />}
      />
    </>
  );
};

export default AppContainer;
