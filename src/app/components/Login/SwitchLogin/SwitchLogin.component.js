import React from "react";
import "./SwitchLogin.css";

const SwitchLogin = ({ esRegistro, setEsRegistro, clearForm }) => {

  const switchForm = () => {
    setEsRegistro(!esRegistro);
    clearForm();
  };

  return (
    <div className={esRegistro ? "pb-3 pt-4" : "pb-3 pt-4"}>
      <p
        className="text-recovery-pass"
        onClick={() => switchForm()}
        type="button"
      >
        <em> {esRegistro ? "¿Ya estás registrado?" : "Crear cuenta"} </em>
      </p>
    </div>
  );
};

export default SwitchLogin;
