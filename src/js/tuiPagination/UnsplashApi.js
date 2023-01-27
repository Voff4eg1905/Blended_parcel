import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search';
axios.defaults.headers.common['Authorization'] =
  'Client-ID LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

export class UnsplashApi {
  #query = '';

  async getTrendingPhotos(page) {
    const url = `/photos?page=${page}&query=city&per_page=15&color=black`;
    const { data } = await axios.get(url);
    return data;
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}
