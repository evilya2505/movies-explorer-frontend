import React from "react";
import logoPath from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Register(props) {
  return (
    <section className="form-page">
      <form className="form form_type_auth" noValidate>
        <img alt="логотип" className="form__logo" src={logoPath} />
        <h3 className="form__title form__form_type_auth">Добро пожаловать!</h3>
        <fieldset className="form__fieldset">
            <div className="form__info">
              <div className="form__item-section">
                <p className="form__item-label form__item-label_type_auth">Имя</p>
                <input
                  id="userName"
                  type="text"
                  className="form__item form__item_type_auth"
                  name="userName"
                  required
                />
                <span className="form__item-error">
                </span>
              </div>

              <div className="form__item-section">
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

              <div className="form__item-section">
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
                Зарегистрироваться
              </button>
              <p className="form__subtitle">Уже зарегистрированы? <Link to="/signin" className="form__link">Войти</Link></p>
            </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Register;