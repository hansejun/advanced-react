import React, { useEffect, useState } from 'react';

const ControlledForm = () => {
  const [value, setValue] = useState({ name: '', age: 0 });

  const handleChange = e => {
    const value =
      e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;

    setValue({ ...value, [e.target.name]: value });
  };

  // 제어 컴포넌트는 값의 변경을 감지할 수 있다.
  useEffect(() => {
    console.log('name changed');
  }, [value.name]);

  return (
    <form>
      <input
        type="text"
        name="name"
        value={value.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={value.age}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
