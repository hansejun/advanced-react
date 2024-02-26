import { useEffect, useState } from 'react';
import { emitter } from './app-container';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onIncrement = () => {
      setCount(prev => prev + 1);
    };

    const onDecrement = () => {
      setCount(prev => prev - 1);
    };
    // emitter.on(type , handler)
    emitter.on('inc.', onIncrement);
    emitter.on('dec.', onDecrement);

    return () => {
      emitter.off('inc.', onIncrement);
      emitter.off('dec.', onDecrement);
    };
  }, []);
  return <div>#: {count}</div>;
};

export default Counter;
