import React from "react";
import IconCalma from "../../../assets/icons/calmaNav.svg";
import IconSalud from "../../../assets/icons/saludNav.svg";
import IconPositivismo from "../../../assets/icons/positivismoNav.svg";
import IconDescanso from "../../../assets/icons/descansoNav.svg";
import { useDispatch } from "react-redux";
import { cerrarSesionAccion } from "../../Redux/Login/usuarioDucks";
import { withRouter } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarProvider";
import "./Sidebar.css";

const Sidebar = (props) => {
  const dispatch = useDispatch();

  const { hideSidebar, setHideBar } = React.useContext(SidebarContext);
  const { opacity, setOpacity } = React.useContext(SidebarContext);
  const { styleNav, setStyleNav } = React.useContext(SidebarContext);

  const [hoverExitText, setHoverExitText] = React.useState(
    "o-title-exit o-font-regular"
  );
  const [hoverExitIcon, setHoverExitIcon] = React.useState("o-icon-exit");

  React.useEffect(() => {
    setStyleNav({ ...styleNav, opacity: opacity });
  }, [opacity]);

  const closeSideBar = () => {
    setOpacity(0);
    setStyleNav({ ...styleNav, opacity: 0 });

    setTimeout(() => {
      setHideBar(true);
    }, 700);
  };

  const goRouteNav = (route) => {
    setHideBar(true);
    switch (route) {
      case "calma":
        props.history.push("/calma");
        break;
      case "salud":
        props.history.push("/salud");
        break;
      case "positivismo":
        props.history.push("/positivismo");
        break;
      case "descanso":
        props.history.push("/descanso");
        break;
      default:
        break;
    }
  };

  const changeColor = (val) => {
    if (val) {
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

  return (
    <div className={hideSidebar ? "d-none" : ""} style={styleNav}>
      <div className="o-container-menu-nav">
        <div className="o-menu-nav o-font-medium">Menú</div>
        <div
          className="o-close-menu o-font-medium"
          onClick={() => closeSideBar()}
        >
          <strong>x</strong>
        </div>
      </div>
      <div className="o-container-links">
        <div className="o-link" onClick={() => goRouteNav("calma")}>
          <img className="o-icon-nav" src={IconCalma} alt="icon" />
          <div className="o-title-link o-font-medium">Calma</div>
        </div>
        <div className="o-link" onClick={() => goRouteNav("salud")}>
          <img className="o-icon-nav" src={IconSalud} alt="icon" />
          <div className="o-title-link o-font-medium">Salud</div>
        </div>
        <div className="o-link" onClick={() => goRouteNav("positivismo")}>
          <img className="o-icon-nav" src={IconPositivismo} alt="icon" />
          <div className="o-title-link o-font-medium">Positivismo</div>
        </div>
        <div className="o-link" onClick={() => goRouteNav("descanso")}>
          <img className="o-icon-nav" src={IconDescanso} alt="icon" />
          <div className="o-title-link o-font-medium">Descanso</div>
        </div>

        <div
          className="o-link-close"
          onMouseEnter={() => changeColor(true)}
          onMouseLeave={() => changeColor(false)}
          onClick={() => closeSession()}
        >
          <span className={hoverExitIcon}></span>
          <div className={hoverExitText}>Cerrar sesión</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
