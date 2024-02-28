import { useLayoutEffect, useRef } from 'react';

function useContainerSize() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        // 컨테이너의 새로운 크기를 기반으로 필요한 작업 수행
        // 예: 다른 컨테이너의 크기 조정
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []); // 의존성 배열이 비어 있으므로, 컴포넌트가 마운트될 때 한 번만 실행됩니다.

  return containerRef;
}

export default useContainerSize;
