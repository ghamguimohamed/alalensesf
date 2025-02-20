export type Category = 'landscapes' | 'morocco' | 'animals' | 'sports';

export interface ImageMetadata {
  camera: string;
  lens: string;
  aperture: string;
  shutterSpeed: string;
  iso: string;
  location: string;
  date: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  category: Category;
  alt: string;
  metadata: ImageMetadata;
}