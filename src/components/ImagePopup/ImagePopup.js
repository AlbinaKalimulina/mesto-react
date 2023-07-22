export default function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup_image ${isOpen && 'popup_opened'}`}>
      <div className="popup__image-container">
        <button className="popup__close-button" type="button" onClick={onClose} />
        <figure>
          <img className="popup__card-image" src={card.link} alt={`Фото ${card.name}`} />
          <figcaption className="popup__card-description">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}