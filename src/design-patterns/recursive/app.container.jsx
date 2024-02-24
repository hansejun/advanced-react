import RecursiveComponent from './recursive';

const nestObj = {
  key1: 'value1',
  key2: {
    innerKey1: 'innerValue1',
    innerKey2: {
      innerInnerKey1: 'innerInnerValue1',
      innerInnerKey2: 'innerInnerValue2',
    },
  },
  key3: 'value3',
};

const AppContainer = () => {
  return (
    <div>
      <RecursiveComponent data={nestObj} />
    </div>
  );
};

export default AppContainer;
