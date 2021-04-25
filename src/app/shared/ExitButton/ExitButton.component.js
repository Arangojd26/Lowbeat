import React from "react";
import { useDispatch } from "react-redux";
import { cerrarSesionAccion } from "../../Redux/Login/usuarioDucks";
import { withRouter } from "react-router-dom";
import "./ExitButton.css";

const ExitButton = (props) => {
  const { type } = props;
  const dispatch = useDispatch();
  const [hoverExitText, setHoverExitText] = React.useState("o-title-exit");

  const [hoverExitIcon, setHoverExitIcon] = React.useState("o-icon-exit");

  const changeColor = (onHover) => {
    if (onHover) {
      setHoverExitText("o-title-exit-red o-font-regular");
      setHoverExitIcon("o-icon-exit-red");
    } else {
      setHoverExitText("o-title-exit o-font-regular");
      setHoverExitIcon("o-icon-exit");
    }
  };

  const closeSession = () => {
    dispatch(cerrarSesionAccion());
    props.history.push("/login");
  };

  const renderExitButton = () => {
    let className;
    let position;
    switch (type) {
      case "navbar":
        className = "d-flex pointer";
        position = "inNavbar";
        break;
      case "sidebar":
        className = "o-link-close";
        position = "inSidebar";
        break;

      default:
        break;
    }

    return (
      <div
        className={className}
        onMouseEnter={() => changeColor(true)}
        onMouseLeave={() => changeColor(false)}
        onClick={() => closeSession()}
      >
        {position === "inNavbar" ? (
          <>
            <div className={hoverExitText}>Cerrar sesión</div>
            <span className={hoverExitIcon}></span>
          </>
        ) : (
          <>
            <span className={hoverExitIcon}></span>
            <div className={hoverExitText}>Cerrar sesión</div>
          </>
        )}
      </div>
    );
  };

  return renderExitButton();
};

export default withRouter(ExitButton);
