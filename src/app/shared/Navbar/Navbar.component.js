import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import { SidebarContext } from "../../context/SidebarProvider";
import GenericButton from "../GenericButton/GenericButton.component";
import ExitButton from "../ExitButton/ExitButton.component";
import "./Navbar.css";

const Navbar = (props) => {
  const { setHideBar } = React.useContext(SidebarContext);
  const { setOpacity } = React.useContext(SidebarContext);

  const openLists = () => props.history.push("/listas");

  const openSideBar = () => {
    setHideBar(false);

    setTimeout(() => {
      setOpacity(1);
    }, 50);
  };

  return (
    <nav
      className="o-navbar-container"
      style={{ backgroundColor: props.colorBackground }}
    >
      <div className="o-container-menu" onClick={() => openSideBar()}>
        <div className="o-line-menu"></div>
        <div className="o-line-menu"></div>
        <div className="o-line-menu"></div>
      </div>
      <div className="">
        <img className="o-logo-low-navbar" src={Logo} alt="Logo" />
      </div>
      <div className="o-container-btn-listas">
        <GenericButton title={"Mis listas"} clickButton={openLists} />
      </div>
      <div className="o-container-exit">
        <ExitButton type={"navbar"} />
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
