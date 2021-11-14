import React from "react";
import useInput from "./hooks/useInput";

function SearchForm({ isCheckboxSwitchedOn, handleShortFilmsOn, handleSearchButton }) {
  const searchInput = useInput('', {isEmpty: true});

  function handleButton(e) {
    e.preventDefault();

    searchInput.inputValid && handleSearchButton(searchInput.value);
  }

  function handleCheckbox(e) {
    (e.target.checked ? handleShortFilmsOn(true) : handleShortFilmsOn(false))
  }

  return (
    <section className="search-form">
      <form
        className="search-form__form"
        onSubmit={handleButton}
        noValidate >
        <fieldset
          className="search-form__fieldset">
            <div className="search-form__left-section">
              <div className="search-form__search-icon"/>
              <input
                type="text"
                placeholder="Фильм"
                className="search-form__form-item search-form__form-item_type_search"
                name="search"
                onChange={searchInput.handleInputChange}
                value={searchInput.value}
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

              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                onChange={handleCheckbox}
                checked={isCheckboxSwitchedOn}
                className="search-form__form-item search-form__form-item_type_checkbox"
              />
              <p className="search-form__label">Короткометражки</p>
            </div>

        </fieldset>
      </form>
      <div className="search-form__section-hl section-hl section-hl_type_gray" />
    </section>
  )
}

export default SearchForm;