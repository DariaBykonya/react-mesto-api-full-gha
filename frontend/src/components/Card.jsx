import { useContext } from "react"
import currentUserContext from "../contexts/CurrentUserContext"


function Card ({ card, onCardClick, onDelete, onCardLike }) {

const currentUser = useContext(currentUserContext)

const isOwnCard = card.owner === currentUser._id;
const isLiked = card.likes.some(i => i === currentUser._id);
const cardLikeButtonClassName = ( 
  `element__like-button ${isLiked ? 'element__like-button_active' : ''}` 
);

function handleLikeCard() {
  onCardLike(card)
}


    return (
      <div id="cardTemplate">
        <div className="element">
        {isOwnCard &&  
          <button
              className="element__delete-button"
              type="button"
              onClick={() => {onDelete(card._id)}}
          />
        }
          <img
            className="element__image"
            src={card.link}
            alt={card.name}
            onClick={() => onCardClick({ link: card.link, name: card.name })}
          />
          <div className="element__info">
            <h2 className="element__text">{card.name}</h2>
            <div className="element__like">
              <button className = {cardLikeButtonClassName} type="button" onClick={handleLikeCard}/>
              <p className="element__like-meter">{card.likes.length}</p>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Card