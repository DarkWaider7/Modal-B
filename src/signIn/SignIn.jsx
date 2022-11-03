import "./SignIn.css";
import eyeVisible from "../img/eyes/eyeVisible.png";
import eyeNotVisible from "../img/eyes/eyeNotVisible.png";
import { useRef } from "react";

function ModalSignIn(props) {
  const inputRef = useRef();

  const InputTypeChange = function () {
    if (inputRef.current.type === "password") {
      inputRef.current.type = "text";
    } else if (inputRef.current.type === "text") {
      inputRef.current.type = "password";
    }
  };

  const imdVisibleRef = useRef();

  const imgVisible = function () {
    imdVisibleRef.current.style.display = "none";
    imdNotVisibleRef.current.style.display = "block";
  };

  const imdNotVisibleRef = useRef();

  const imgNotVisible = function () {
    imdNotVisibleRef.current.style.display = "none";
    imdVisibleRef.current.style.display = "block";
  };

  return (
    <div className="modal-sign-in">
      <div className="modal__sign-in-title">Sign In</div>
      <form action="">
        <input
          className="modal-sign-in__input"
          type="email"
          placeholder="Your Email"
        />
        <input
          className="modal-sign-in__input"
          type="password"
          placeholder="Your password"
          ref={inputRef}
        />

        <img
          className="modal-sign-in__visible visible"
          onClick={() => {
            InputTypeChange();
            imgVisible();
          }}
          ref={imdVisibleRef}
          src={eyeVisible}
          alt=""
        />
        <img
          className="modal-sign-in__not-visible not-visble"
          onClick={() => {
            InputTypeChange();
            imgNotVisible();
          }}
          ref={imdNotVisibleRef}
          src={eyeNotVisible}
          alt=""
        />
      </form>

      <div className="modal-sign-in__buttons">
        <button className="modal-sign-in__sign-in">Sign In</button>
        <button
          className="modal-sign-in__create-acc"
          onClick={() => {
            props.gocreate();
          }}>
          Create Account
        </button>
        <button
          className="modal-sign-in__exit exit"
          onClick={() => props.exitSignIn(false)}>
          X
        </button>
      </div>
    </div>
  );
}

export default ModalSignIn;
