import React, { memo } from 'react';
import { PhotoCard, PhotoCol, PhotoGrid } from './styles';

type Photo = {
  src: string;
  alt: string;
  rotate: string;
  height: string;
  blur?: boolean;
};

type Column = {
  offset?: boolean;
  photos: Photo[];
};

type PhotoGalleryProps = {
  columns: Column[];
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ columns }) => {
  return (
    <PhotoGrid>
      {columns.map((column, colIndex) => (
        <PhotoCol key={colIndex} $offset={column.offset}>
          {column.photos.map((photo, photoIndex) => (
            <PhotoCard
              key={photoIndex}
              src={photo.src}
              alt={photo.alt}
              $rotate={photo.rotate}
              $height={photo.height}
              $blur={photo.blur}
            />
          ))}
        </PhotoCol>
      ))}
    </PhotoGrid>
  );
};

export default memo(PhotoGallery);
