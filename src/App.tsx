import { useState, useEffect, useLayoutEffect, useRef } from 'react';

const ResponsiveInput = ({ onClear, ...props }) => {
  const el = useRef();
  const [w, setW] = useState(0);
  const measure = () => setW(el.current.offsetWidth);

  useLayoutEffect(() => {
    console.log('layout effect');
    measure();
  }, []);

  // 1. 페인트 이후 실행된다.
  // 2.
  useEffect(() => {
    console.log('effect');
    performance.mark('effect:start');
    window.addEventListener('resize', measure);
    performance.mark('effect:end');
    performance.measure('effect', 'effect:start', 'effect:end');
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <label>
      <input {...props} ref={el} />
      {w > 200 && <button onClick={onClear}>clear</button>}
    </label>
  );
};

export default function App() {
  return <ResponsiveInput style={{ width: '50%' }} />;
}
