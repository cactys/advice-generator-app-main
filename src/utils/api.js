import { BASE_URL } from './constants';

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkingResponse(res) {
    return res.ok
      ? res.json()
      : res.json().then((err) => Promise.reject(err.message));
  }

  getAdvice() {
    return fetch(this._baseUrl, {
      method: 'GET',
    }).then(this._checkingResponse);
  }
}

const api = new Api({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
