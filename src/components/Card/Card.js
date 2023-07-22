export default function Card({ card, onCardClick }) {
    return (
        <div className="card">
            <button className="card__delete-button" type="button" />
            <img
                className="card__image"
                src={card.link}
                alt={`Фото ${card.name}`}
                onClick={() => onCardClick({ link: card.link, name: card.name })}
            />
            <div className="card__title">
                <h2 className="card__place-name" >{card.name}</h2>
                <div className="card__like-group">
                    <button className="card__like-button" type="button" />
                    <span className="card__likes-counter"> {card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}