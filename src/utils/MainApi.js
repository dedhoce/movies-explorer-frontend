import { BaseApi } from './BaseApi';

class Api extends BaseApi {
  _getHeaders(localJWT) {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localJWT}`,
    };
  }

  getUserInfo(localJWT) {
    return this._request('/users/me', {
      headers: this._getHeaders(localJWT),
    });
  }

  pushUserInfo({ name, email }, localJWT) {
    console.log(name, email)
    return this._request('/users/me', {
      method: 'PATCH',
      headers: this._getHeaders(localJWT),
      body: JSON.stringify({
        name,
        email
      }),
    });
  }

  getInitialMovies(localJWT) {
    return this._request('/movies', {
      headers: this._getHeaders(localJWT),
    });
  }

  deleteMovie(movieId, localJWT) {
    return this._request(`/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._getHeaders(localJWT),
    });
  }

  pushInfoCreateMovie(dataMovie, localJWT) {    
    return this._request('/movies', {
      method: 'POST',
      headers: this._getHeaders(localJWT),
      body: JSON.stringify(
        dataMovie
      ),
    });
  }
}

const mainApi = new Api({
  baseUrl: 'https://api.movies-exp.amelitskov.nomoredomainswork.ru'  
});

export default mainApi;
