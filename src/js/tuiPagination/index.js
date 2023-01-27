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

pagination.on('afterMove', loadMoreTrendingPhotos);

async function loadMoreTrendingPhotos(event) {
  const currentPage = event.page;
  try {
    const { results } = await unsplashApi.getTrendingPhotos(currentPage);
    const markup = createGalleryCards(results);
    refs.list.innerHTML = markup;
  } catch (err) {
    console.log(err);
  }
  // console.log(currentPage);
}

async function loadMoreSearchingPhotos(event) {
  const currentPage = event.page;
  try {
    const { results } = await unsplashApi.getPhotosByQuery(currentPage);
    const markup = createGalleryCards(results);
    refs.list.innerHTML = markup;
  } catch (err) {
    console.log(err);
  }
  // console.log(currentPage);
}

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  pagination.off('afterMove', loadMoreTrendingPhotos);
  pagination.off('afterMove', loadMoreSearchingPhotos);
  pagination.on('afterMove', loadMoreSearchingPhotos);

  const searchValue = e.currentTarget.elements.query.value.trim();
  if (!searchValue) {
    Notiflix.Notify.failure('Please enter query');
    return;
  }
  unsplashApi.query = searchValue;
  try {
    const { total, results } = await unsplashApi.getPhotosByQuery(page);
    pagination.reset(total);
    const markup = createGalleryCards(results);
    refs.list.innerHTML = markup;
  } catch (err) {
    console.log(err);
  }
}
