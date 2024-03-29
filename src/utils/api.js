class Api {
    
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
        this._authorization = options.headers.authorization;
    }

    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject
    }

    getInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
            .then(this._checkResponse)
            .catch((error) => {
                console.log(error)
              })
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
            .then(this._checkResponse)
            .catch((error) => {
                console.log(error)
              })
    }

    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.description,
            })
        })
            .then(this._checkResponse)
            .catch((error) => {
                console.log(error)
              })
    }

    setAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.userphoto,
            })
        })
            .then(this._checkResponse)
            .catch((error) => {
                console.log(error)
              })
    }

    addCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.placename,
                link: data.placelink,
            })
        })
            .then(this._checkResponse)
            .catch((error) => {
                console.log(error)
              })
    }
    addLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization
            }
        })
            .then(this._checkResponse)
            .catch((error) => {
                console.log(error)
              })
    }

    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
            .then(this._checkResponse)
            .catch((error) => {
                console.log(error)
              })
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
            .then(this._checkResponse)
            .catch((error) => {
                console.log(error)
              })
    }


}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
    headers: {
        authorization: '961112be-ea9b-423a-bd3d-e30631a423a3',
        'Content-Type': 'application/json'
    }
});

export default api;