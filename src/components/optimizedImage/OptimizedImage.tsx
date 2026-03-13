import { memo, useState } from 'react';

interface OptimizedImageProps {
  alt: string;
  src: string;
  width: number;
  height: number;

  className?: string;
  style?: React.CSSProperties;

  priority?: boolean;
  sizes?: string;
  srcSet?: string;

  fallback?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';

  onClick?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  alt,
  src,
  width,
  height,
  className,
  style,
  priority = false,
  sizes,
  srcSet,
  fallback,
  loading,
  decoding = 'async',
  onClick,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const isPriority = priority;
  return (
    <img
      src={currentSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        ...style,
      }}
      loading={loading ?? (isPriority ? 'eager' : 'lazy')}
      decoding={decoding}
      fetchPriority={isPriority ? 'high' : 'auto'}
      onClick={onClick}
      onError={() => {
        if (fallback && currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
    />
  );
};

export default memo(OptimizedImage);
