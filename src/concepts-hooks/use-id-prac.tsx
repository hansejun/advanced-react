import React, { useId } from 'react';

function MyComponent() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>이름:</label>
      <input id={id} type="text" />
    </div>
  );
}
