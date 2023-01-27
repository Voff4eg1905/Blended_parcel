import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search';
axios.defaults.headers.common['Authorization'] =
  'Client-ID LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

export class UnsplashApi {
  #query = '';

  async getTrendingPhotos(page) {
    const { data } = await axios.get('/photos', {params: {
      page,
      query: 'city',
      per_page: 15,
      color: 'black',
    }});
    
    return data;
  }

  async getPhotosByQuery(page) {
    const { data } = await axios.get('/photos', {params: {
      page,
      query: this.#query,
      per_page: 15,
      color: 'black',
    }});
    return data;
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}
