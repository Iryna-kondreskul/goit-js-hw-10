const BASE_URL = ' https://api.thecatapi.com/v1/';
const BREEDS_ENDP = 'breeds';
const ENDPOINT = 'images/search';
const API_KEY = 'live_ks7DrDX1WH6cUTMCIjdT8mriF0Q2ncG8n5jq7EIV0F64PNvm72UMt4pKfQxR7V80';

const options = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

export function fetchBreeds() {
    return fetch(`${BASE_URL}${BREEDS_ENDP}`, options).then(response =>
      response.json()
    );
  }
  

  export function fetchCatByBreed(breedId) {
    return fetch(
      `${BASE_URL}${ENDPOINT}?breed_ids=${breedId}`,
      options
    ).then(response => response.json());
  }


