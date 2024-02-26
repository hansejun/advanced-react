import mitt from 'mitt';
import ParentComponent from './parent';

export const emitter = mitt();

const AppContainer = () => {
  return <ParentComponent />;
};

export default AppContainer;
