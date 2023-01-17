export default class MainApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
    this._response = options.response;
  }

  setUser(name, email, password) {
    return fetch(`${this._url}signup`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    })
      .then(res => this._response(res));
  }

  authUser(email, password) {
    return fetch(`${this._url}signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ password, email })
    })
      .then(res => this._response(res));
  }

  setUserInformation(email, name) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        name: name
      })
    })
      .then(res => this._response(res));
  }

  getUserInformation() {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
      .then(res => this._response(res));
  }

  logout() {
    return fetch(`${this._url}signout`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers
    })
      .then(res => this._response(res));
  }
}

export const api = new MainApi({
  url: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  response: res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
})