/**
 * Створює розмітку карток зображень для галереї.
 * @param {Array} images - масив об'єктів з Pixabay (поле hits).
 * @returns {string} - розмітка <li> елементів.
 */
export function createGalleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              loading="lazy"
            />
          </a>
          <div class="gallery-info">
            <div class="gallery-info-item">
              <span class="gallery-info-label">Likes</span>
              <span class="gallery-info-value">${likes}</span>
            </div>
            <div class="gallery-info-item">
              <span class="gallery-info-label">Views</span>
              <span class="gallery-info-value">${views}</span>
            </div>
            <div class="gallery-info-item">
              <span class="gallery-info-label">Comments</span>
              <span class="gallery-info-value">${comments}</span>
            </div>
            <div class="gallery-info-item">
              <span class="gallery-info-label">Downloads</span>
              <span class="gallery-info-value">${downloads}</span>
            </div>
          </div>
        </li>`;
      }
    )
    .join('');
}

/**
 * Очищає вміст галереї.
 */
export function clearGallery(container) {
  if (container) {
    container.innerHTML = '';
  }
}
