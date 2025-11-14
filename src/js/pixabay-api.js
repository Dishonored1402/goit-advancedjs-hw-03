const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'YOUR_PIXABAY_API_KEY_HERE';

/**
 * Виконує HTTP-запит до Pixabay API за рядком пошуку.
 * Повертає проміс з об'єктом відповіді (response.json()).
 */
export function fetchImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?${searchParams.toString()}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
