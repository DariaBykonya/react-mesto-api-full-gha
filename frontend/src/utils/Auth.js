export const BASE_URL = 'http://localhost:3000';

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
      Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ password, email })
  }).then (checkResponse)
};

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        Accept: "application/json",
          "Content-Type": "application/json"
      },
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
    }).then (checkResponse)
  };