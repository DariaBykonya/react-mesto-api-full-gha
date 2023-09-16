import { useContext, useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm.jsx'
import currentUserContext from '../../contexts/CurrentUserContext.js';



function EditProilePopup ({ isOpen, onClose, onUpdateUser}) {
    const currentUser = useContext(currentUserContext)

    const [name, setName] = useState('')
    function handleName(e) {
        setName(e.target.value);
      }

    const [description, setDescription] = useState('')
    function handleDescription(e) {
        setDescription(e.target.value);
      }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser, isOpen]); 


      function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        
        // Передаём значения управляемых компонентов во внешний обработчик
        
        onUpdateUser({
          nameuser: name,
          profession: description
        });
      }
        return (
            <PopupWithForm
            title="Редактировать профиль"
            name="editProfile"
            titleButton="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="nameuser"
              placeholder="Имя"
              id="nameuser"
              className="popup__input popup__input_type_nameuser"
              required=""
              minLength={2}
              maxLength={40}
              defaultValue={name}
              onChange={handleName}
            />
            <span className="popup__input-error popup__input-error_type_nameuser" />
            <input
              type="text"
              name="profession"
              placeholder="Профессия"
              className="popup__input popup__input_type_job"
              id="job"
              required=""
              minLength={2}
              maxLength={200}
              defaultValue={description}
              onChange={handleDescription}
            />
            <span
              className="popup__input-error popup__input-error_type_job"
              id="job-error"
            />
          </PopupWithForm>
        );
    
    }
    
    export default EditProilePopup



