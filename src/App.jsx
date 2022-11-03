import { useState } from "react";
import "./App.css";
import "./modalCreateAcc/CreateAcc.css";
import ModalCreateAccount from "./modalCreateAcc/CreateAcc.jsx";
import ModalSignIn from "./signIn/SignIn";

function App() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);

  const openingSignIn = () => {
    setOpenSignIn(true);
    if (openCreate === true) {
      setOpenSignIn(false);
    }
  };

  const GoSignIn = () => {
    setOpenSignIn(true);
    setOpenCreate(false);
  };

  const GoCreateAcc = () => {
    setOpenSignIn(false);
    setOpenCreate(true);
  };

  return (
    <div className="App">
      <button onClick={openingSignIn} className="open-modal">
        open
      </button>
      {openSignIn && (
        <ModalSignIn gocreate={GoCreateAcc} exitSignIn={setOpenSignIn} />
      )}
      {openCreate && (
        <ModalCreateAccount
          create={GoCreateAcc}
          exitCrAcc={setOpenCreate}
          gosignin={GoSignIn}
        />
      )}
    </div>
  );
}

export default App;
