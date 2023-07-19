export default function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    return (
        <main className="content">
            <section className="profile">
                <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
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
                    onClick={onEditProfile}
                />
                <button
                    className="profile__add-button"
                    type="button"
                    aria-label="Добавить"
                    onClick={onAddPlace}
                />
            </section>

            <section className="elements" aria-label="Фотографии красивых мест">
                <div className="element" />
            </section>
        </main>
    )
}