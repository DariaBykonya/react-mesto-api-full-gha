import { useState } from "react";


const Login = ({ onLogin }) => {

  
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
  }


  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(data.password, data.email);
  };
  return (
    <div className="sign">
      <div className="sign__body">
          <h1 className="sign__title">Вход</h1>
        <form
          className="sign__form"
          onSubmit={handleSubmit}
        >

          <input
          type="email"
          name="email"
          placeholder="Email"
          id="emailAddress"
          className="sign__input sign__input_type_emailAddress"
          required=""
          value={data.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <span
          className="sign__input-error sign__input-error_type_emailAddress"
        />
        <input
          type="password"
          name="password"
          id="pass"
          placeholder="Пароль"
          className="sign__input sign__input_type_pass"
          required=""
          value={data.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <span
          className="sign__input-error sign__input-error_type_pass"
        />


          <button className="sign__log-in-button sign__log-in-button_valid" type="submit">Войти</button>
        </form>
      </div>
    </div>
  );

}

export default Login