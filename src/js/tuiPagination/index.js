import { pagination } from './Pagination';
import { UnsplashApi } from './UnsplashApi';
import { createGalleryCards } from '../createGalleryCard';
import { refs } from './refs';
import { Spinner } from 'spin.js';
import { spinnerStart, spinnerStop } from './spin';
import Notiflix from 'notiflix';

const unsplashApi = new UnsplashApi();
const page = pagination.getCurrentPage();

spinnerStart();
unsplashApi.getTrendingPhotos(page).then(({ results, total }) => {
  pagination.reset(total);
  const markup = createGalleryCards(results);
  refs.list.innerHTML = markup;
  refs.paginationBlock.classList.remove('is-hidden');
}).catch((err) => {
  console.log(err)
  Notiflix.Notify.failure(err.message);
}). finally(() => {spinnerStop()});

pagination.on('afterMove', loadMoreTrendingPhotos);

async function loadMoreTrendingPhotos(event) {
  const currentPage = event.page;
  try {
    spinnerStart();
    const { results } = await unsplashApi.getTrendingPhotos(currentPage);
    const markup = createGalleryCards(results);
    refs.list.innerHTML = markup;

  } catch (err) {
    refs.paginationBlock.classList.add('is-hidden');
    console.log(err);
    Notiflix.Notify.failure(err.message);
  } finally {
    spinnerStop();
  }
  // console.log(currentPage);
}

async function loadMoreSearchingPhotos(event) {
  const currentPage = event.page;
  try {
    spinnerStart();
    const { results } = await unsplashApi.getPhotosByQuery(currentPage);
    const markup = createGalleryCards(results);
    refs.list.innerHTML = markup;
  } catch (err) {
    refs.paginationBlock.classList.add('is-hidden');
    console.log(err);
    Notiflix.Notify.failure(err.message);
  } finally {
    spinnerStop();
  }
  // console.log(currentPage);
}

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  pagination.off('afterMove', loadMoreTrendingPhotos);
  pagination.off('afterMove', loadMoreSearchingPhotos);
  pagination.on('afterMove', loadMoreSearchingPhotos);
  refs.paginationBlock.classList.add('is-hidden');
  refs.list.innerHTML = '';

  const searchValue = e.currentTarget.elements.query.value.trim();
  if (!searchValue) {
    Notiflix.Notify.failure('Please enter query');
    return;
  }
  unsplashApi.query = searchValue;
  try {
    spinnerStart();
    const { total, results } = await unsplashApi.getPhotosByQuery(page);
    if (results.length === 0) {
      return Notiflix.Notify.failure('Enter correct query!');
    }
    pagination.reset(total);
    const markup = createGalleryCards(results);
    refs.list.innerHTML = markup;
    refs.paginationBlock.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
    Notiflix.Notify.failure(err.message);
  } finally {
    spinnerStop();
  }
}
