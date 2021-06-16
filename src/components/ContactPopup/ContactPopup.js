import React, { useState } from "react";
import "./ContactPopup.css";
import { useFormWithValidation } from "../../utils/formValidation";
import { sendForm } from "../../utils/api";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import InformationPopup from "../InformationPopup/InformationPopup";

function PopupContact(props) {
  const [phone, setPhone] = useState("");
  const [informationPopupOpenMessage, setInformationPopupMessage] =
    useState("");
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
      setInformationPopupMessage("Сообщение успешно отправлено!");
    });
  }
  //Обработчик информационного попапа
  function handleSubmitInformationPopup() {
    setInformationPopupMessage("");
  }

  return (
    <>
      <div
        className={`contact-popup ${props.isOpen && "contact-popup_opened"}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            props.onClose();
          }
        }}
      >
        <form className="contact-popup__container" onSubmit={handleForm}>
          <button
            type="button"
            onClick={props.onClose}
            className="contact-popup__button-close"
          ></button>
          <h2 className="contact-popup__title">Свяжитесь со мной</h2>
          <fieldset className="contact-popup__field-list">
            <div className="contact-popup__field">
              <label htmlFor="name" className="contact-popup__label">
                Ваше имя
              </label>
              <input
                onChange={validate.handleChange}
                className={`contact-popup__input ${
                  validate.errors.name ? "contact-popup__input_error" : ""
                }`}
                name="name"
                label="name"
                type="text"
                minLength="1"
                maxLength="30"
                value={validate.values.name || ""}
                required
              />
              <span className="contact-popup__error">
                {validate.errors.name || ""}
              </span>
            </div>
            <div className="contact-popup__field">
              <label htmlFor="email" className="contact-popup__label">
                Ваш email
              </label>
              <input
                onChange={validate.handleChange}
                className={`contact-popup__input ${
                  validate.errors.email ? "contact-popup__input_error" : ""
                }`}
                name="email"
                label="email"
                type="email"
                value={validate.values.email || ""}
                required
              />
              <span className="contact-popup__error">
                {validate.errors.email || ""}
              </span>
            </div>
            <div className="contact-popup__field">
              <label htmlFor="tel" className="contact-popup__label">
                Ваш телефон
              </label>
              <PhoneInput onChange={setPhone} value={phone || ""} required />
              <span className="contact-popup__error">
                {validate.errors.tel || ""}
              </span>
            </div>
            <div className="contact-popup__field">
              <label htmlFor="text" className="contact-popup__label">
                Ваше сообщение
              </label>
              <textarea
                rows="2"
                onChange={validate.handleChange}
                name="msg"
                type="textarea"
                label="text"
                className="contact-popup__input"
                value={validate.values.msg || ""}
              />
            </div>
          </fieldset>
          <button
            className={`contact-popup__submit ${
              validate.isValid ? "" : "contact-popup__submit_disabled"
            }`}
            type="submit"
            disabled={!validate.isValid}
          >
            Отправить
          </button>
        </form>
      </div>
      <InformationPopup
        message={informationPopupOpenMessage}
        onSubmit={handleSubmitInformationPopup}
      />
    </>
  );
}

export default PopupContact;
