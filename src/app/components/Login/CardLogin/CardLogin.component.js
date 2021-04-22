import React from "react";
import { withRouter } from "react-router-dom";
// import iconPassHide from "../../../../assets/icons/passHide.svg";
// import iconPassShow from "../../../../assets/icons/passShow.svg";
import "./CardLogin.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ingresarUsuarioNormalAccion,
  registrarUsuarioNormalAccion,
} from "../../../Redux/Login/usuarioDucks";
import CheckLogin from "../CheckLogin/CheckLogin.component";
import ModalLoginComponent from "../ModalLogin/ModalLogin.component";
import ButtonLogin from "../ButtonLogin/ButtonLogin.component";
import ButtonGoogle from "../ButtonGoogle/ButtonGoogle.component";
import SwitchLogin from "../SwitchLogin/SwitchLogin.component";
import TitleLogin from "../TitleLogin/TitleLogin.component";
import InputLogin from "../InputLogin/InputLogin.component";

const CardLogin = (props) => {
  const dispatch = useDispatch();

  const loading = useSelector((store) => store.usuario.loading);
  const activo = useSelector((store) => store.usuario.activo);

  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [passConfirm, setPassConfirm] = React.useState("");
  const [errorUser, setErrorUser] = React.useState(null);
  const [esCheck, setEsCheck] = React.useState(false);
  const [es8Caracteres, set8Caracteres] = React.useState(false);
  const [esCaracterEspecial, setCaracterEspecial] = React.useState(false);
  const [esMayuscula, setMayuscula] = React.useState(false);
  const [esNumero, setNumero] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  const [esRegistro, setEsRegistro] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [ingresar, setIngresar] = React.useState(false);

  React.useEffect(() => {
    if (activo) {
      props.history.push("/");
    }
  }, [activo, props.history]);

  const procesarDatos = (e) => {
    e.preventDefault();
    let contandor = 0;

    if (!nombre.trim() && esRegistro) {
      setError("Ingrese nombre");
      contandor++;
    }
    if (!email.trim()) {
      setError("Ingrese email");
      contandor++;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorUser("El correo introducido no es valido");
      contandor++;
    }
    if (!/com/.test(email) && esRegistro) {
      setErrorUser("El email debe terminar en .com");
      contandor++;
    }
    if (!pass.trim()) {
      setError("Ingrese Constraseña");
      contandor++;
    }
    if (pass.length < 8 && esRegistro) {
      set8Caracteres(false);
      contandor++;
    } else {
      set8Caracteres(true);
    }
    if (!/^[^A-Z]*[A-Z][^A-Z]*$/.test(pass) && esRegistro) {
      setMayuscula(false);
      contandor++;
    } else {
      setMayuscula(true);
    }
    if (!/[0-9]/.test(pass) && esRegistro) {
      setNumero(false);
      contandor++;
    } else {
      setNumero(true);
    }

    if (!/[!@#$%^&*]/.test(pass) && esRegistro) {
      setCaracterEspecial(false);
      contandor++;
    } else {
      setCaracterEspecial(true);
    }

    if (pass !== passConfirm && esRegistro) {
      setError("Las contraseñas no coinciden");
      contandor++;
    }

    if (contandor > 0) {
      return;
    } else {
      setError(null);
      setErrorUser(null);
      console.log("Correcto...");
      setIngresar(true);
      puedeIngresar(e);
    }
  };

  const puedeIngresar = (e) => {
    e.preventDefault();
    if (esRegistro && ingresar) {
      registrar();
      setIngresar(false);
    } else if (!esRegistro) {
      login();
    }
  };

  const login = React.useCallback(async () => {
    try {
      dispatch(ingresarUsuarioNormalAccion(email, pass));
      props.history.push("/");
      setEmail("");
      setPass("");
      setError(null);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Email no válido");
      }
      if (error.code === "auth/user-not-found") {
        setError("Usuario no registrado");
        // setModal(true);
      }
      if (error.code === "auth/wrong-password") {
        setError("La contraseña que ingresaste es incorrecta");
      }
    }
  }, [email, pass, dispatch, props.history]);

  const registrar = React.useCallback(async () => {
    try {
      dispatch(registrarUsuarioNormalAccion(nombre, email, pass));
      setModal(true);
      setNombre("");
      setEmail("");
      setPass("");
      setError(null);
      setErrorUser(null);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Email no válido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("El email ya está en uso");
      }
    }
  }, [nombre, email, pass, dispatch]);

  return (
    <>
      <ModalLoginComponent open={modal} />
      <div className="card o-card-Login" id="Position-Card">
        <CheckLogin
          esCheck={esCheck}
          es8Caracteres={es8Caracteres}
          esCaracterEspecial={esCaracterEspecial}
          esMayuscula={esMayuscula}
          esNumero={esNumero}
        />
        <div className="card-body">
          <TitleLogin esRegistro={esRegistro} />

          <div className="container-form">
            <form onSubmit={procesarDatos}>
              {esRegistro && (
                <InputLogin
                  title={"Nombre"}
                  valueInput={nombre}
                  setValueInput={setNombre}
                />
              )}
              <InputLogin
                title={"Correo electrónico"}
                valueInput={email}
                setValueInput={setEmail}
              />
              {errorUser && (
                <p className="text-danger text-left ml-3 pt-1">
                  <small>{errorUser}</small>
                </p>
              )}
              {esRegistro ? (
                <>
                  <InputLogin
                    title={"Contraseña registro"}
                    valueInput={pass}
                    setValueInput={setPass}
                    esCheck={esCheck}
                    setEsCheck={setEsCheck}
                    procesarDatos={procesarDatos}
                  />

                  <InputLogin
                    title={"Confirmar contraseña"}
                    valueInput={passConfirm}
                    setValueInput={setPassConfirm}
                    esCheck={esCheck}
                    setEsCheck={setEsCheck}
                    procesarDatos={procesarDatos}
                  />
                </>
              ) : (
                <InputLogin
                  title={"Contraseña login"}
                  valueInput={pass}
                  setValueInput={setPass}
                  esCheck={esCheck}
                  setEsCheck={setEsCheck}
                />
              )}
              {error && (
                <p className="text-danger text-left ml-3 pt-2">
                  <small>{error}</small>
                </p>
              )}
              <SwitchLogin
                esRegistro={esRegistro}
                setEsRegistro={setEsRegistro}
              />
              <ButtonLogin esRegistro={esRegistro} loading={loading} />
              <ButtonGoogle
                setOpenLoading={props.setOpenLoading}
                loading={loading}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(CardLogin);
