const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53252560-1c4ffe9c456d309b0775dfd67';


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
