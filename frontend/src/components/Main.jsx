import { useContext } from "react";
import Card from "./Card.jsx";
import currentUserContext from "../contexts/CurrentUserContext.js";
import RenderLoading from "./RenderLoading/RenderLoading.jsx";
import Footer from "./Footer.jsx";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, onDelete, cards, isLoading, onCardLike }) {
  
  const currentUser = useContext(currentUserContext)
    return (
      <>
        <main>
        <section className="page-content profile">
          <div className="profile__full-info">
            <button type="button" className="profile__avatar-add" onClick={onEditAvatar}>
              <div className="profile__image" 
              style={{
                backgroundImage: `url(${currentUser ? currentUser.avatar : '#'})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%' }}/>
            </button>
            <div className="profideleteCardle__info">
              <div className="profile__name-edit">
                <h1 className="profile__name">{currentUser ? currentUser.name : ''}</h1>
                <button className="button profile__edit-button" type="button" onClick={onEditProfile}/>
              </div>
              <p className="profile__text">{currentUser ? currentUser.about : ''}</p>
            </div>
          </div>
          <button className="button profile__add-button" type="button" onClick={onAddPlace}/>
        </section>
        <section className="page-content elements">
         {isLoading ? <RenderLoading/> : cards.data.map(data => {
          return (
            <div id="cardTemplate" key={data._id}>

          <Card card={data} onCardClick = {onCardClick} onDelete = {onDelete} onCardLike={onCardLike} />
          </div>)
          })}
        </section>
      </main>
      <Footer />
      </>
  )};
  
  export default Main