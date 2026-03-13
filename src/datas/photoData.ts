import imgA from 'assets/NossaFeira-Setembro2025-TeiadeEventos-137.jpg';
import imgB from 'assets/NossaFeira-Setembro2025-TeiadeEventos-44.jpg';
import imgC from 'assets/NossaFeira-Setembro2025-TeiadeEventos-12.jpg';
import imgD from 'assets/NossaFeira-Setembro2025-TeiadeEventos-206.jpg';

export const photoColumns = [
  {
    offset: true,
    photos: [
      { src: imgA, alt: 'Cultura', rotate: 'rotate(-2deg)', height: '16rem' },
      {
        src: imgB,
        alt: 'Vibe',
        rotate: 'rotate(3deg)',
        height: '20rem',
        blur: true,
      },
    ],
  },
  {
    photos: [
      {
        src: imgC,
        alt: 'Gastronomia',
        rotate: 'rotate(2deg)',
        height: '20rem',
        blur: true,
      },
      { src: imgD, alt: 'Público', rotate: 'rotate(-3deg)', height: '16rem' },
    ],
  },
];
