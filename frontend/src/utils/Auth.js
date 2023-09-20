export const BASE_URL = 'http://api.mesto.student-project.nomoredomainsrocks.ru';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка в веденных данных ${res.status}`);
};

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
        "Content-Type": "application/json"
    },
    credentials: 'include',
    body: JSON.stringify({ password, email })
  }).then (checkResponse)
};

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({ password, email })
    }).then (checkResponse)
  };


export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
    }).then (checkResponse)
  };