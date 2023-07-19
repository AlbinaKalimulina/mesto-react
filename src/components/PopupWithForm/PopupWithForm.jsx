export default function PopupWithForm({name, title, titleButton, children, isOpen}){
    return(
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            
        <div className="popup__content">
          <button className="popup__close-button" type="button" />
          <h2 className="popup__title">{title}</h2>
          <form
            className="popup__container popup__edit-container"
            name="profile"
            noValidate=""
          >
           {children}
            <button className="popup__save-button" type="submit">
              {titleButton}
            </button>
          </form>
        </div>
      </div>
    )
}