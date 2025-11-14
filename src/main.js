import { fetchImagesByQuery } from './js/pixabay-api.js';
import { createGalleryMarkup, clearGallery } from './js/render-functions.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');
const loaderWrapper = document.querySelector('.loader-wrapper');

if (!searchForm || !galleryList || !loaderWrapper) {
  // Елементи інтерфейсу не знайдені на сторінці
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

searchForm?.addEventListener('submit', handleSearchFormSubmit);

function handleSearchFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const query = form.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please fill the search field before searching.',
      position: 'topRight',
    });
    return;
  }

  clearGallery(galleryList);
  showLoader();

  fetchImagesByQuery(query)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.error({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      const markup = createGalleryMarkup(data.hits);
      galleryList.innerHTML = markup;
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
}

function showLoader() {
  loaderWrapper?.classList.remove('is-hidden');
}

function hideLoader() {
  loaderWrapper?.classList.add('is-hidden');
}
