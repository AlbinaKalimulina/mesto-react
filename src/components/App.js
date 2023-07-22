import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import PopupWithForm from "./PopupWithForm/PopupWithForm.js";
import ImagePopup from "./ImagePopup/ImagePopup.js";
import { useState } from "react";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopup, setIsImagePopup] = useState(false)
  

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsImagePopup(false)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    setIsImagePopup(true)

  }

  return (
    <div className="page__content">

      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name='edit-profile'
        title='Редактировать профиль'
        titleButton='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
      </PopupWithForm>

      <PopupWithForm
        name='add-place'
        title='Новое место'
        titleButton='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
      </PopupWithForm>

      <PopupWithForm
        name='edit-avatar'
        title='Обновить аватар'
        titleButton='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
      </PopupWithForm>

      <PopupWithForm
        name='delete-card'
        title='Вы уверены?'
        titleButton='Да'
      />

      <ImagePopup card={selectedCard} isOpen={isImagePopup} onClose={closeAllPopups} />

    </div>

  );
}

export default App;
