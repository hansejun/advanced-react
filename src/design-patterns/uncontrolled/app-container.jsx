import { useState } from 'react';
import ControlledFlow from './controlled-flow';

const StepOne = ({ goNext }) => (
  <>
    <h1>Step one Name:</h1>
    <button onClick={() => goNext({ name: 'my name' })}>Next</button>
  </>
);
const StepTwo = ({ goNext }) => (
  <>
    <h1>Step Two Age:</h1>
    <button onClick={() => goNext({ age: 'my age' })}>Next</button>
  </>
);
const StepThree = ({ goNext }) => (
  <>
    <h1>Step Three Country:</h1>
    <button onClick={() => goNext({ country: 'my country' })}>Next</button>
  </>
);

const AppContainer = () => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onNext = dataFromStep => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <>
      <ControlledFlow currentIndex={currentStepIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
      </ControlledFlow>
    </>
  );
};

export default AppContainer;
