import React from "react";

function Profile(props) {
  return (
    <section className="form-page">
      <form className="form form_type_profile" noValidate>
        <h3 className="form__title form__title_type_profile">Привет, Виталий!</h3>
        <fieldset
          className="form__fieldset">
            <div className="form__info">
              <div className="form__item-section form__item-section_type_profile">
                <p className="form__item-label form__item-label_type_profile">Имя</p>
                <input
                  id="userName"
                  type="text"
                  placeholder="Введите имя"
                  className="form__item form__item_type_profile"
                  name="userName"
                />
              </div>

              <div className="form__section-hl section-hl section-hl_type_gray"></div>

              <div className="form__item-section form__item-section_type_profile">
                <p className="form__item-label form__item-label_type_profile">E-mail</p>
                <input
                type="text"
                placeholder="Введите почту"
                className="form__item form__item_type_profile"
                name="email"
                />
              </div>
            </div>
            <div className="form__btns">
              <span className="form__btns-error"></span>
              <button
                type="submit"
                className="form__btn form__btn_type_text-black"
              >
                Редактировать
              </button>

              <button
                type="button"
                className="form__btn form__btn_type_text-red"
              >
                Выйти из аккаунта
              </button>
            </div>

        </fieldset>
      </form>
    </section>
  )
}

export default Profile;