import { pagination } from './Pagination';
import { UnsplashApi } from './UnsplashApi';
import { createGalleryCards } from '../createGalleryCard';
import { refs } from './refs';

const unsplashApi = new UnsplashApi();
const page = pagination.getCurrentPage();

unsplashApi.getTrendingPhotos(page).then(({ results, total }) => {
  pagination.reset(total);
  const markup = createGalleryCards(results);
  refs.list.innerHTML = markup;
});
