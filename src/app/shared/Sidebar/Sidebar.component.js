import React from "react";
import IconCalma from "../../../assets/icons/calmaNav.svg";
import IconSalud from "../../../assets/icons/saludNav.svg";
import IconPositivismo from "../../../assets/icons/positivismoNav.svg";
import IconDescanso from "../../../assets/icons/descansoNav.svg";
import { withRouter } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarProvider";
import ExitButton from "../ExitButton/ExitButton.component";
import "./Sidebar.css";

const Sidebar = (props) => {
  const { hideSidebar, setHideBar } = React.useContext(SidebarContext);
  const { opacity, setOpacity } = React.useContext(SidebarContext);
  const { styleNav, setStyleNav } = React.useContext(SidebarContext);

  React.useEffect(() => {
    setStyleNav((prevState) => ({ ...prevState, opacity: opacity }));
  }, [opacity, setStyleNav]);

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
        <ExitButton type={"sidebar"} />
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
