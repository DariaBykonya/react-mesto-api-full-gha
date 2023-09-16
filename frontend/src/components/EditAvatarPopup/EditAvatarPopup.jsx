import { useEffect, useRef } from 'react';
import PopupWithForm from '../PopupWithForm.jsx'



function EditAvatarPopup ({ isOpen, onClose, onUpdateAvatar }) {
    const avatarInput = useRef(null)

      function handleSubmit(evt) {
        // Запрещаем браузеру переходить по адресу формы
        evt.preventDefault();
              
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateAvatar({
          avatar: avatarInput.current.value
        });
      } 

      useEffect(() => {
        avatarInput.current.value = ''
      }, [isOpen])

        return (
            <PopupWithForm
            title="Обновить аватар"
            name="addAvatar"
            titleButton="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
          >
            <input
              type="url"
              name="avatar"
              placeholder="Cсылка на фото"
              id="avatar"
              className="popup__input popup__input_type_avatar"
              required=""
              ref={avatarInput}
            />
            <span className="popup__input-error popup__input-error_type_avatar" />
          </PopupWithForm>
        );
    
    }
    
    export default EditAvatarPopup



