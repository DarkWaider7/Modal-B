import "./CreateAcc.css";
import { useRef } from "react";
import eyeVisible from "../img/eyes/eyeVisible.png";
import eyeNotVisible from "../img/eyes/eyeNotVisible.png";

function ModalCreateAccount(props) {
  const inputRef = useRef();

  const InputTypeChange = function () {
    if (inputRef.current.type === "password") {
      inputRef.current.type = "text";
    } else if (inputRef.current.type === "text") {
      inputRef.current.type = "password";
    }
  };

  const imgVisibleRef = useRef();

  const imgVisible = function () {
    imgVisibleRef.current.style.display = "none";
    imgNotVisibleRef.current.style.display = "block";
  };

  const imgNotVisibleRef = useRef();

  const imgNotVisible = function () {
    imgNotVisibleRef.current.style.display = "none";
    imgVisibleRef.current.style.display = "block";
  };

  return (
    <div className="modal__block">
      <div className="modal__registration">Create Personal Account</div>
      <form className="modal__form" action="">
        <input
          className="modal__input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="modal__input"
          type="text"
          name="surname"
          placeholder="Your Surname"
        />
        <input
          className="modal__input"
          type="password"
          name="password"
          ref={inputRef}
          placeholder="Your password"
        />
        <img
          className="modal__eye-visible visible"
          onClick={() => {
            InputTypeChange();
            imgVisible();
          }}
          ref={imgVisibleRef}
          src={eyeVisible}
          alt=""
        />

        <img
          className="modal__eye-not-visible not-visble"
          onClick={() => {
            InputTypeChange();
            imgNotVisible();
          }}
          ref={imgNotVisibleRef}
          src={eyeNotVisible}
          alt=""
        />
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className="modal__input"
          type="number"
          name="age"
          placeholder="Your Age"
        />
      </form>
      <button
        className="modal__exit exit"
        onClick={() => props.exitCrAcc(false)}>
        X
      </button>
      <div className="modal__reg-buttons">
        <button
          type="button"
          className="modal__sign-in"
          onClick={() => props.gosignin()}>
          sign in
        </button>
        <button type="button" className="modal__create-acc">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default ModalCreateAccount;
