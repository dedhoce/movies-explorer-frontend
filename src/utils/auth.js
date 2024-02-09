import { BaseApi } from './BaseApi';

class Auth extends BaseApi {
  checkUserToken(localJWT) {
    return this._request('/users/me', {      
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${localJWT}`,
      },
    });
  }

  regisrationNewUser({ name, email, password }) {
    return this._request('/signup', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password,
        email,
        name
      }),
    });
  }

  getUserToken({ email, password }) {
    return this._request('/signin', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password,
        email,
      }),
    });
  }
}
const auth = new Auth({
  baseUrl: 'https://api.movies-exp.amelitskov.nomoredomainswork.ru',
  //baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default auth;
