import PopupWithForm from '../PopupWithForm.jsx'
import { useEffect, useRef } from 'react';



function AddPlacePopup ({ isOpen, onClose, onAddPlace }) {

    const titlePlace = useRef(null)
    const linkPlace = useRef(null)

      function handleSubmit(evt) {
        evt.preventDefault();
        onAddPlace({
            name: titlePlace.current.value,
            link: linkPlace.current.value
          });
      }

      useEffect(() => {
        titlePlace.current.value = ''
        linkPlace.current.value = ''
      }, [isOpen])

        return (
            <PopupWithForm
          title="Новое место"
          name="addMesto"
          titleButton="Создать"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Название"
            id="title"
            className="popup__input popup__input_type_title"
            required=""
            minLength={2}
            maxLength={30}
            ref={titlePlace}
          />
          <span
            className="popup__input-error popup__input-error_type_title"
            id="mesto-error"
          />
          <input
            type="url"
            name="image"
            id="image"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_image"
            required=""
            ref={linkPlace}
          />
          <span
            className="popup__input-error popup__input-error_type_image"
            id="url-image-error"
          />
        </PopupWithForm>
        );
    
    }
    
    export default AddPlacePopup



