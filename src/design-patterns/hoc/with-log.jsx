export const withLog = Component => {
  return props => {
    console.log('props:', props);
    return <Component {...props} />;
  };
};
