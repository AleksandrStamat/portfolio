import React, { useState } from "react";
import "./PopupContact.css";
import { useFormWithValidation } from "../../utils/formValidation";
import { sendForm } from "../../utils/api";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
function PopupContact(props) {
  const [phone, setPhone] = useState("");
  const validate = useFormWithValidation();
  function formReset() {
    setPhone("");
    validate.resetForm();
  }
  function handleForm(e) {
    e.preventDefault();
    formReset();
    sendForm({ ...validate.values, phone }).then(() => {
      props.onClose();
    });
  }
  return (
    <>
      <div
        className={`popup-contact ${props.isOpen && "popup-contact_opened"}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            props.onClose();
          }
        }}
      >
        <form className="popup-contact__container" onSubmit={handleForm}>
          <button
            type="button"
            onClick={props.onClose}
            className="popup-contact__button-close"
          ></button>
          <h2 className="popup-contact__title">Свяжитесь со мной</h2>
          <fieldset className="popup-contact__field-list">
            <div className="popup-contact__field">
              <label htmlFor="name" className="popup-contact__label">
                Ваше имя
              </label>
              <input
                onChange={validate.handleChange}
                className={`popup-contact__input ${
                  validate.errors.name ? "popup-contact__input_error" : ""
                }`}
                name="name"
                label="name"
                type="text"
                minLength="1"
                maxLength="30"
                value={validate.values.name || ""}
                required
              />
              <span className="popup-contact__error">
                {validate.errors.name || ""}
              </span>
            </div>
            <div className="popup-contact__field">
              <label htmlFor="email" className="popup-contact__label">
                Ваш email
              </label>
              <input
                onChange={validate.handleChange}
                className={`popup-contact__input ${
                  validate.errors.email ? "popup-contact__input_error" : ""
                }`}
                name="email"
                label="email"
                type="email"
                value={validate.values.email || ""}
                required
              />
              <span className="popup-contact__error">
                {validate.errors.email || ""}
              </span>
            </div>
            <div className="popup-contact__field">
              <label htmlFor="tel" className="popup-contact__label">
                Ваш телефон
              </label>
              <PhoneInput onChange={setPhone} value={phone || ""} required />
              <span className="popup-contact__error">
                {validate.errors.tel || ""}
              </span>
            </div>
            <div className="popup-contact__field">
              <label htmlFor="text" className="popup-contact__label">
                Ваше сообщение
              </label>
              <textarea
                rows="2"
                onChange={validate.handleChange}
                name="msg"
                type="textarea"
                label="text"
                className="popup-contact__input"
                value={validate.values.msg || ""}
              />
            </div>
          </fieldset>
          <button
            className={`popup-contact__submit ${
              validate.isValid ? "" : "popup-contact__submit_disabled"
            }`}
            type="submit"
            disabled={!validate.isValid}
          >
            Отправить
          </button>
        </form>
      </div>
    </>
  );
}

export default PopupContact;
