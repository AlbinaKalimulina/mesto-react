import Header from "./Header/Header.jsx";

function App() {
  return (
    <div className="page__content">

      <Header />

      <main className="content">

        <section className="profile">
          <button type="button" className="profile__avatar-button">
            <img className="profile__avatar" src="#" alt="фото профиля" />
          </button>
          <div className="profile__info" aria-label="Информация профиля">
            <h1 className="profile__name"> </h1>
            <p className="profile__description" />
          </div>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Редактировать"
          />
          <button
            className="profile__add-button"
            type="button"
            aria-label="Добавить"
          />
        </section>

        <section className="elements" aria-label="Фотографии красивых мест">
          <div className="element" />
        </section>
      </main>

      <footer className="footer">
        <p className="footer__copyright">© 2023 Mesto Russia</p>
      </footer>

      <div className="popup popup_edit">
        <div className="popup__content">
          <button className="popup__close-button" type="button" />
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__container popup__edit-container"
            name="profile"
            noValidate=""
          >
            <input
              className="popup__input popup__input_type_name"
              id="username"
              name="username"
              type="text"
              placeholder="Введите имя"
              required=""
              minLength={2}
              maxLength={40}
            />
            <span className="error-message popup__error" id="username-error" />
            <input
              className="popup__input popup__input_type_descrition"
              id="description"
              name="description"
              type="text"
              placeholder="Введите вид деятельности"
              required=""
              minLength={2}
              maxLength={200}
            />
            <span className="error-message popup__error" id="description-error" />
            <button className="popup__save-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_add">
        <div className="popup__content">
          <button className="popup__close-button" type="button" />
          <h2 className="popup__title">Новое место</h2>
          <form
            className="popup__container popup__add-container"
            name="placeCard"
            noValidate=""
          >
            <input
              className="popup__input popup__input_type_place-name"
              id="placename"
              name="placename"
              type="text"
              placeholder="Название"
              required=""
              minLength={2}
              maxLength={30}
            />
            <span className="error-message popup__error" id="placename-error" />
            <input
              className="popup__input popup__input_type_place-link"
              id="placelink"
              name="placelink"
              type="url"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span className="error-message popup__error" id="placelink-error" />
            <button className="popup__save-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_image">
        <div className="popup__image-container">
          <button className="popup__close-button" type="button" />
          <figure>
            <img className="popup__card-image" src="#" alt="#" />
            <figcaption className="popup__card-description" />
          </figure>
        </div>
      </div>

      <div className="popup popup_userphoto">
        <div className="popup__content">
          <button className="popup__close-button" type="button" />
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            className="popup__container popup__userphoto-container"
            name="avatar"
            noValidate=""
          >
            <input
              className="popup__input popup__input_type_userphoto-link"
              id="userphotolink"
              name="userphoto"
              type="url"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span className="error-message popup__error" id="userphotolink-error" />
            <button className="popup__save-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_delete">
        <div className="popup__content">
          <button className="popup__close-button" type="button" />
          <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
          <form
            className="popup__container popup__deletecard-container"
            name="deleteCard"
            noValidate=""
          >
            <button className="popup__save-button" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default App;
