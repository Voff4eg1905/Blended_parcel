export class UnsplashApi {
  #baseUrl = 'https://api.unsplash.com/search/photos';
  #apiKey = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
  #query = '';
  #page = 1;

  getPhotos() {
    const url = `${this.#baseUrl}?page=${this.#page}&query=${
      this.#query
    }&client_id=${this.#apiKey}&per_page=15&color=black`;

    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}
