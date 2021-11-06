import React from "react";
import logoPath from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <section className="form-page">
      <form className="form form_type_auth" noValidate>
        <img alt="логотип" className="form__logo" src={logoPath} />
        <h3 className="form__title form__title_type_auth">Рады видеть!</h3>
        <fieldset
          className="form__fieldset">
            <div className="form__info">

              <div className="form__item-section form__item-section_type_auth">
                <p className="form__item-label form__item-label_type_auth">E-mail</p>
                <input
                type="text"
                className="form__item form__item_type_auth"
                name="email"
                required
                />
                <span className="form__item-error">
                </span>
              </div>

              <div className="form__item-section form__item-section_type_auth">
                <p className="form__item-label form__item-label_type_auth">Пароль</p>
                <input
                type="text"
                className="form__item form__item_type_auth"
                name="password"
                required
                />
                <span className="form__item-error">
                </span>
              </div>
            </div>
            <div className="form__btns">
              <span className="form__btns-error"></span>
              <button
                type="submit"
                className="form__btn form__btn_type_rectangle"
              >
                Войти
              </button>
              <p className="form__subtitle">Еще не зарегистрированы? <Link to="/signup" className="form__link">Регистрация</Link></p>
            </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Login;