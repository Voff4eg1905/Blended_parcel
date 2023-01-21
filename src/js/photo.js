import { refs } from './photosRefs';
import { UnsplashApi } from './UnsplashApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createGalleryCards } from './createGalleryCard';

const unsplashApi = new UnsplashApi();

function handleSubmit(event) {
  event.preventDefault();
  const searchValue = event.currentTarget.elements.query.value;
  if (!searchValue) {
    Notify.failure('Nothing');
    return;
  }
  unsplashApi.query = searchValue;
  event.currentTarget.reset();

  unsplashApi.getPhotos().then(({ results, total }) => {
    const markup = createGalleryCards(results);
    refs.list.innerHTML = markup;
  });
}

refs.form.addEventListener('submit', handleSubmit);
