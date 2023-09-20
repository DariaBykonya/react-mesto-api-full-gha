class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _checkQuery(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  _headersData = () => {
    this._token = localStorage.getItem('jwt');
    this._headers.authorization = `Bearer ${this._token}`
    return this._headers;
  }

  getInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headersData(),
      credentials: 'include',
    }).then(this._checkQuery);
  }
  getCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headersData(),
      credentials: 'include',
    }).then(this._checkQuery);
  }
  patchUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headersData(),
      body: JSON.stringify({
        name: data.nameuser,
        about: data.profession
      }),
      credentials: 'include',
    }).then(this._checkQuery);
  }

  patchAddAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headersData(),
      body: JSON.stringify({
        avatar: data.avatar
      }),
      credentials: 'include',
    }).then(this._checkQuery);
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headersData(),
      body: JSON.stringify({
        name: data.name,
        link: data.link
      }),
      credentials: 'include',
    })
    .then(this._checkQuery)
    .then(response => {
        // Успешно добавлена новая карточка
        return response.data; // Вернуть данные новой карточки
    })
    .catch(error => {
      // Обработка ошибки
      console.error(`Ошибка при добавлении карточки: ${error}`);
      throw error; // Пробросить ошибку для дальнейшей обработки
    });
  }
  

  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headersData(),
      credentials: 'include',
    }).then(this._checkQuery);
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headersData(),
      credentials: 'include',
    }).then(this._checkQuery);
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this.deleteLike(id);
    } else {
      return this.addLike(id);
    }
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/`, {
      method: 'DELETE',
      headers: this._headersData(),
      credentials: 'include',
    }).then(this._checkQuery);
  }
}

const api = new Api({
  baseUrl: 'http://api.mesto.student-project.nomoredomainsrocks.ru',
  headers: {
    "Content-Type": "application/json",
    'Accept': 'application/json',
  }
});

export default api;