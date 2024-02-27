import { forwardRef, useRef } from 'react';

const App = () => {
  const ref = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    console.log(ref.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input ref={ref} />
    </form>
  );
};

// 부모컴포넌트에서 ref를 전달할 수 있다.
const CustomInput = (props, ref) => {
  return <input ref={ref} {...props} type="text" />;
};

export const Input = forwardRef(CustomInput);
