import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const nameRef = useRef();
  const ageRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    console.log(name, age);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" name="name" />
      <input ref={ageRef} type="number" name="age" />
      <button>Submit</button>
    </form>
  );
};

export default UncontrolledForm;
