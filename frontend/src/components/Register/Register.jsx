import { Link } from "react-router-dom";
import { useState } from "react";


const Register = ({ onRegister }) => {



  const [data, setData] = useState({
    password: "",
    email: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(data.password, data.email);
  };
    
  return (
      <div className="sign">
        <div className="sign__body">
            <h1 className="sign__title">Регистрация</h1>
          <form
            className="sign__form"
            onSubmit={handleSubmit}
          >
            <input
            name="email"
            type="email"
            placeholder="Email"
            id="emailAddress"
            className="sign__input sign__input_type_emailAddress"
            value={data.email}
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
          <span
            className="sign__input-error sign__input-error_type_emailAddress"
            // id="mesto-error"
          />
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="Пароль"
            className="sign__input sign__input_type_pass"
            required
            value={data.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <span
            className="sign__input-error sign__input-error_type_pass"
            // id="url-image-error"
          />
            <button className="sign-up__button-form sign__log-in-button_valid" type="submit">Зарегистрироваться</button>
          </form>

          <p className="sign-up__subtitle">Уже зарегистрированы? <Link to="/signin" className="sign-up__link-navigate">Войти</Link>
            </p>
        </div>
        {/* <InfoTooltip
          linkImage={passed}
          altImage='Попробуй ещё раз'
          subtitle='Вы успешно зарегистрировались!'
          onClose={closePopup}
          isOpen={passedPopupOpen}
        />
        <InfoTooltip
          linkImage={failed}
          altImage='Успешно'
          subtitle='Что-то пошло не так! Попробуйте ещё раз.'
          onClose={closePopup}
          isOpen={failedPopupOpen}
        /> */}
      </div>
    );

}

export default Register