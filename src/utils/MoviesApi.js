import { BaseApi } from './BaseApi';

class MoviesApi extends BaseApi {
  getInitialMovies() {
    return this._request('/');
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;
