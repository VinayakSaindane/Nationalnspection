import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Gallery = lazy(() => import('@/components/gallery/Gallery'));

export const GalleryRoute: RouteObject = {
  path: '/gallery',
  element: <Gallery />,
};