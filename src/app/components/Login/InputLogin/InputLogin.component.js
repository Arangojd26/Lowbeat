import React from "react";
import iconPassHide from "../../../../assets/icons/passHide.svg";
import iconPassShow from "../../../../assets/icons/passShow.svg";

const InputLogin = (props) => {
  const {
    title,
    valueInput,
    setValueInput,
    procesarDatos,
    esCheck,
    setEsCheck,
  } = props;

  const [labelEmail, setLabelEmail] = React.useState(false);
  const [labelPass, setLabelPass] = React.useState(false);
  const [LabelPassConfirm, setLabelPassConfirm] = React.useState(false);
  const [labelNombre, setLabelNombre] = React.useState(false);
  const [verIconViewPass, setVerIconViewPass] = React.useState(
    "iconpass d-none"
  );
  const [verIconViewPassConfirm, setVerIconViewPassConfirm] = React.useState(
    "iconpass d-none"
  );
  const [changeIconPass, setChangeIconPass] = React.useState(false);
  const [changeIconPassConfirm, setChangeIconPassConfirm] = React.useState(
    false
  );

  const controlAnimacionLabelNombre = (val) =>
    val === "" ? setLabelNombre(false) : setLabelNombre(true);
  const controlAnimacionLabelEmail = (val) =>
    val === "" ? setLabelEmail(false) : setLabelEmail(true);

  const controlAnimacionLabelPass = (val) => {
    if (val === "") {
      setLabelPass(false);
      setVerIconViewPass("d-none");
    } else {
      setLabelPass(true);
    }
  };
  const controlAnimacionLabelPassRegister = (val) => {
    setEsCheck(!esCheck);
    if (val === "") {
      setLabelPass(false);
      setVerIconViewPass("d-none");
    } else {
      setLabelPass(true);
    }
  };
  const controlAnimacionLabelPassConfirm = (val) => {
    if (val === "") {
      setLabelPassConfirm(false);
      setVerIconViewPassConfirm("d-none");
    } else {
      setLabelPassConfirm(true);
    }
  };
  const focusPass = () => {
    setLabelPass(true);
    setVerIconViewPass("iconpass");
  };
  const focusPassRegistro = () => {
    setLabelPass(true);
    setVerIconViewPass("iconpass");
    setEsCheck(true);
  };
  const focusPassConfirm = () => {
    setLabelPassConfirm(true);
    setVerIconViewPassConfirm("iconpass");
  };

  const renderIconPassword = (
    classNameIcon,
    conditionIcon,
    setChangeIcon,
    changeIcon
  ) => {
    if (title.includes("Contraseña")) {
      return (
        <span className="input-group-append">
          <div className="input-group-text">
            <img
              className={classNameIcon}
              src={conditionIcon ? iconPassShow : iconPassHide}
              width="18"
              height="18"
              alt="viewa"
              onClick={() => {
                setChangeIcon(!changeIcon)
                setLabelPass(true)
              }}
            />
          </div>
        </span>
      );
    }
    return null;
  };

  const renderInputLogin = () => {
    let type;
    let onChange;
    let onClick;
    let onBlur;
    let onFocus;
    let onKeyUp;
    let value;
    let classNameIcon;
    let setChangeIcon;
    let changeIcon;
    let conditionIcon;
    let labelFocus;

    switch (title) {
      case "Nombre":
        type = "text";
        labelFocus = labelNombre;
        onChange = (e) => setValueInput(e.target.value);
        onClick = () => setLabelNombre(true);
        onBlur = (e) => controlAnimacionLabelNombre(e.target.value);
        onFocus = () => setLabelNombre(true);
        value = valueInput;
        break;
      case "Correo electrónico":
        type = "text";
        labelFocus = labelEmail;
        onChange = (e) => setValueInput(e.target.value);
        onClick = () => setLabelEmail(true);
        onBlur = (e) => controlAnimacionLabelEmail(e.target.value);
        onFocus = () => setLabelEmail(true);
        value = valueInput;
        break;
      case "Contraseña registro":
        classNameIcon = verIconViewPass;
        conditionIcon = changeIconPass;
        setChangeIcon = setChangeIconPass;
        changeIcon = changeIconPass;
        type = changeIconPass ? "text" : "password";
        labelFocus = labelPass;
        onChange = (e) => setValueInput(e.target.value);
        onClick = () => focusPassRegistro();
        onBlur = (e) => controlAnimacionLabelPassRegister(e.target.value);
        onFocus = () => focusPassRegistro();
        onKeyUp = (e) => procesarDatos(e);
        value = valueInput;
        break;
      case "Confirmar contraseña":
        classNameIcon = verIconViewPassConfirm;
        conditionIcon = changeIconPassConfirm;
        setChangeIcon = setChangeIconPassConfirm;
        changeIcon = changeIconPassConfirm;
        type = changeIconPassConfirm ? "text" : "password";
        labelFocus = LabelPassConfirm;
        onChange = (e) => setValueInput(e.target.value);
        onClick = () => focusPassConfirm();
        onBlur = (e) => controlAnimacionLabelPassConfirm(e.target.value);
        onFocus = () => focusPassConfirm();
        onKeyUp = (e) => procesarDatos(e);
        value = valueInput;
        break;
      case "Contraseña login":
        classNameIcon = verIconViewPass;
        conditionIcon = changeIconPass;
        setChangeIcon = setChangeIconPass;
        changeIcon = changeIconPass;
        type = changeIconPass ? "text" : "password";
        labelFocus = labelPass;
        onChange = (e) => setValueInput(e.target.value);
        onClick = () => focusPass();
        onBlur = (e) => controlAnimacionLabelPass(e.target.value);
        onFocus = () => focusPass();
        value = valueInput;
        break;

      default:
        break;
    }

    return (
      <>
        <div
          className={
            labelFocus ? "input-group pt-4 focused" : "input-group pt-4"
          }
        >
          <label className="form-label" htmlFor="last">
            {title}
          </label>
          <input
            type={type}
            className="form-control input-login"
            onChange={onChange}
            value={value}
            onClick={onClick}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyUp={onKeyUp}
          />
          {renderIconPassword(
            classNameIcon,
            conditionIcon,
            setChangeIcon,
            changeIcon
          )}
        </div>
      </>
    );
  };

  return renderInputLogin();
};

export default InputLogin;
