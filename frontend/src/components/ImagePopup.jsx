function ImagePopup({ card, isOpen, onClose }) {
    return (
        <div className={`popup popup-image ${isOpen && 'popup_opened'}`} onClick = {onClose}>
         <div className="popup-image__container" onClick = {e => {e.stopPropagation()}}>
            <img className="popup-image__image" alt={`Фото ${card?.name ? card.name : 'not found'}`} src={card?.link ? card.link : 'not found'}/>
            <p className="popup-image__heading">{card?.name ? card.name : 'not found'}</p>
            <button className="button popup__close" type="button" onClick={onClose}/>
         </div>
        </div>
  )};
  
  export default ImagePopup