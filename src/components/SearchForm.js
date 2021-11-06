import React from "react";

function SearchForm(props) {
  return (
    <section className="search-form">
      <form
        className="search-form__form"
          >
        <fieldset
          className="search-form__fieldset">
            <div className="search-form__left-section">
              <div className="search-form__search-icon"/>
              <input
                type="text"
                placeholder="Фильм"
                className="search-form__form-item search-form__form-item_type_search"
                name="search"
                required
              />
                <button
                type="submit"
                className="search-form__save-btn"
              >
                Найти
              </button>
            </div>
            <div className="search-form__right-section">

              <div className="search-form__section-vl section-vl"/>

              <input id="checkbox" name="checkbox" type="checkbox" className="search-form__form-item search-form__form-item_type_checkbox"></input>
              <p className="search-form__label">Короткометражки</p>
            </div>

        </fieldset>
      </form>
      <div className="search-form__section-hl section-hl section-hl_type_gray" />
    </section>
  )
}

export default SearchForm;