function PopupWithForm({ title, name, titleButton, children, isOpen, onClose, onSubmit }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}  onClick = {onClose}>
        <div className="popup__container" onClick = {e => {e.stopPropagation()}}>
          <h2 className="popup__title">{title}</h2>
          <form
            name={name}
            className="popup__form"
            noValidate
            onSubmit={onSubmit}
          >
            {children}
            <button className="popup__save popup__save_valid" type="submit">
             {titleButton}
            </button>
          </form>
          <button className="button popup__close" type="button" onClick={onClose}/>
        </div>
      </div>
  )};
  
  export default PopupWithForm


