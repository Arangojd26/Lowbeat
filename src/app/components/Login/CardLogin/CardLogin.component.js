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
  const errorMessage = useSelector((store) => store.usuario.errorMessage);

  const { setOpenLoading } = props;

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
      setErrorUser("Ingrese nombre");
      contandor++;
    }
    if (!email.trim()) {
      setErrorUser("Ingrese email");
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
      setErrorUser("Ingrese Constraseña");
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
      setErrorUser("Las contraseñas no coinciden");
      contandor++;
    }

    if (contandor > 0) {
      return;
    } else {
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
    dispatch(ingresarUsuarioNormalAccion(email, pass));
    setOpenLoading(true);
    clearForm();
  }, [email, pass, dispatch, setOpenLoading]);

  const registrar = React.useCallback(async () => {
    dispatch(registrarUsuarioNormalAccion(nombre, email, pass));
    setModal(true);
    setOpenLoading(true);
    clearForm();
  }, [nombre, email, pass, dispatch, setOpenLoading]);

  const clearForm = () => {
    // setEsRegistro(!esRegistro);
    setNombre("");
    setEmail("");
    setPass("");
    setPassConfirm("");
    setErrorUser(null);
  };

  return (
    <>
      <ModalLoginComponent open={modal} />
      <div className="card o-card-login" id="Position-Card">
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
              {errorMessage && (
                <p className="text-danger text-left ml-3 pt-2">
                  <small>{errorMessage}</small>
                </p>
              )}
              {errorUser && (
                <p className="text-danger text-left ml-3 pt-1">
                  <small>{errorUser}</small>
                </p>
              )}
              <SwitchLogin
                esRegistro={esRegistro}
                setEsRegistro={setEsRegistro}
                clearForm={clearForm}
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
