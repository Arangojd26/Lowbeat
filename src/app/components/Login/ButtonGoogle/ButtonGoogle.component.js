import React from "react";
import "./ButtonGoogle.css";
import { ingresarUsuarioGoogleAccion } from "../../../Redux/Login/usuarioDucks";
import { useDispatch } from "react-redux";

const ButtonGoogle = (props) => {
  const dispatch = useDispatch();

  const signInGoogle = (e) => {
    e.preventDefault();
    dispatch(ingresarUsuarioGoogleAccion());
    props.setOpenLoading(true);
  };

  return (
    <button
    //   href="/#"
      className="google btn-google text-center mt-4"
      onClick={(e) => signInGoogle(e)}
      disabled={props.loading}
    >
      <i className="fab fa-google fa-fw" />
      Iniciar sesión con Google
    </button>
  );
};

export default ButtonGoogle;
