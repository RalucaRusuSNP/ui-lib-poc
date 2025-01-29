import React, { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonWrapperProps {
  isLoading?: boolean;
  children: React.ReactNode;
  circle?: boolean;
  full?: boolean;
  height?: string;
}

const SkeletonWrapper: React.FC<SkeletonWrapperProps> = ({
  isLoading,
  children,
  circle,
  full,
  height,
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const hiddenRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hiddenRef.current) {
      const { width, height } = hiddenRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, [children]);

  return isLoading ? (
    <div
      className={`skeleton-wrapper ${!height ? 'relative' : 'absolute'} ${
        full ? 'w-full' : ''
      }`}
    >
      <Skeleton
        width={dimensions.width}
        height={height ? height : dimensions.height}
        circle={circle}
      />

      <div
        className={`absolute top-0 left-0 ${full ? 'w-full' : ''} invisible`}
        ref={hiddenRef}
      >
        {children}
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default SkeletonWrapper;
