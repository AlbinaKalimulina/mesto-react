import { useState, useEffect } from "react"
import api from "../../utils/api.js"
import Card from "../Card/Card.js"

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])
  
    useEffect(() => {
        Promise.all([api.getInfo(), api.getCards()])
            .then(([dataUser, dataCard]) => {
                setUserName(dataUser.name)
                setUserDescription(dataUser.about)
                setUserAvatar(dataUser.avatar)
                setCards(dataCard)
            })
            .catch((error) => {
                console.log(error)
              })
    }, [])



    return (
        <main className="content">
            <section className="profile">
                <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
                    <img className="profile__avatar" src={userAvatar} alt="фото профиля" />
                </button>
                <div className="profile__info" aria-label="Информация профиля">
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__description">{userDescription}</p>
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
                <div className="element">
                    {cards.map(data => {
                        return (
                            <div key={data._id}>
                                <Card card={data} onCardClick={onCardClick}/>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}