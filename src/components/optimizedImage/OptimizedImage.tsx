import React, { useState } from 'react';

type OptimizedImageWithPlaceholderProps = {
  alt: string;
  src: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
  fallbackSrc?: string;
};

export function OptimizedImageWithPlaceholder({
  alt,
  src,
  width,
  height,
  className,
  priority = false,
  sizes,
  srcSet,
  fallbackSrc,
}: OptimizedImageWithPlaceholderProps) {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: '#e5e7eb',
      }}
      className={className}
    >
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#e5e7eb',
            animation: 'pulse 1.5s infinite',
          }}
        />
      )}

      <img
        src={currentSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (fallbackSrc && currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
          }
        }}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
