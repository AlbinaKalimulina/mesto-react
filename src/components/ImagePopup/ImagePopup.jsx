export default function ImagePopup() {
    return (
        <div className="popup popup_image">
        <div className="popup__image-container">
          <button className="popup__close-button" type="button" />
          <figure>
            <img className="popup__card-image" src="#" alt="#" />
            <figcaption className="popup__card-description" />
          </figure>
        </div>
      </div>
    )
}