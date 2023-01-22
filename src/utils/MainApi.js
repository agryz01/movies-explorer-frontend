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

  setMovie(cardMovie) {
    return fetch(`${this._url}movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country: cardMovie.country,
        director: cardMovie.director,
        duration: cardMovie.duration,
        year: cardMovie.year,
        description: cardMovie.description,
        image: `https://api.nomoreparties.co${cardMovie.image.url}`,
        trailerLink: cardMovie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${cardMovie.image.formats.thumbnail.url}`,
        movieId: cardMovie.id,
        nameRU: cardMovie.nameRU,
        nameEN: cardMovie.nameEN
      })
    })
      .then(res => this._response(res));
  }

  deletMovie(idMovie) {
    return fetch(`${this._url}movies/${idMovie}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers
    })
      .then(res => this._response(res));
  }

  getMovies() {
    return fetch(`${this._url}movies`, {
      method: 'GET',
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