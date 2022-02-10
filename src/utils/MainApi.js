class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getRequestResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  // Регистрация пользователя
  register(name, password, email) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password
      })
    })
    .then(this._getRequestResult)
  }

  // Проверяет email и пароль пользователя на соответствие какому-либо профилю, хранящемуся в базе данных
  authorization(password, email) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
    .then(this._getRequestResult)
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      }
    })
      .then(this._getRequestResult);
  }

  // Сохранение отредактированной информации о пользователе
  updateUserInfo(newUserInfo, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        "name": newUserInfo?.name,
        "email": newUserInfo?.email
      })
    })
    .then(this._getRequestResult);
  }

  // Добавляет фильм на сервер
  postFilm(filmData, token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        "country": filmData?.country,
        "director": filmData?.director,
        "duration": filmData?.duration,
        "year": filmData?.year,
        "description": filmData?.description,
        "image": `https://api.nomoreparties.co${filmData?.image.url}`,
        "trailer": filmData?.trailerLink,
        "nameRU": filmData?.nameRU,
        "nameEN": filmData?.nameEN || filmData?.nameRU,
        "thumbnail": `https://api.nomoreparties.co${filmData?.image.url}`,
        "movieId": filmData?.id,
      })
    })
      .then(this._getRequestResult);
  }

  // Получает сохраненные фильмы
  getSavedMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      }
    })
      .then(this._getRequestResult);
  }

  // Удаление сохраненного фильма
  deleteCard(filmData, token) {
    return fetch(`${this._baseUrl}/movies/${filmData._id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      }
    })
    .then(this._getRequestResult);
  }

  getInitialData(token) {
    return Promise.all([this.getUserInfo(token), this.getSavedMovies(token)]);
  }
}

// Создание экземпляра класса Api
const mainApi = new MainApi({
  baseUrl: 'https://evilya.nomoredomains.work',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default mainApi;