import React from 'react';

const LeftSideComp = ({ title }) => {
  return <h2>{title}</h2>;
};

const RightSideComp = ({ title }) => {
  return <h2>{title}</h2>;
};

const SplitScreen = ({ children }) => {
  return <main className="flex">{children}</main>;
};

const Container = () => {
  return (
    <SplitScreen>
      <aside className="flex-1">
        <LeftSideComp title="left side" />
      </aside>
      <aside className="flex-1">
        <RightSideComp title="right side" />
      </aside>
    </SplitScreen>
  );
};

export default Container;
