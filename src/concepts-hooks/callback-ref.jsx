import { useCallback, useEffect, useRef, useState } from 'react';

export const Test = () => {
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    // 1. show가 false이기에 inputRef.current가 존재하지 않아 에러가 발생
    // 2. show가 true여도 이 useEffect는 한 번만 실행되기 때문에 focus가 실행되지 않음
    inputRef.current.focus();
  }, []);

  return (
    <>
      <button onClick={() => setShow(prev => !prev)}> change</button>
      {show && <input ref={inputRef} />}
    </>
  );
};

export const Test2 = () => {
  const [show, setShow] = useState(false);
  const realInputRef = useRef(null);

  // input이 생성될 때마다 focus를 실행
  const inputRef = useCallback(input => {
    realInputRef.current = input;

    if (input === null) return;
    input.focus();
  }, []);

  return (
    <>
      <button onClick={() => setShow(prev => !prev)}> change</button>
      {show && <input ref={inputRef} />}
    </>
  );
};
