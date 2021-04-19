import React from "react";
import CardMenu from "../../components/Home/CardMenu/CardMenu.component";
import NavbarComponent from "../../shared/Navbar/Navbar.component";
import SidebarComponent from "../../shared/Sidebar/Sidebar.component";
import "./HomePage.css";
import ImageCalm from "../../../assets/images/iconCalma.png";
import ImageSalud from "../../../assets/images/iconSalud.png";
import ImagePositivismo from "../../../assets/images/iconPositivismo.png";
import ImageDescanso from "../../../assets/images/iconDescanso.png";

const Home = () => {

  return (
    <>
      <div className="o-fondo-home" />
      <NavbarComponent />
      <SidebarComponent />
      <div className="container-flex o-container-cards-menu">
        <div className="o-content-cards-menu">
          <div className="row">
            <CardMenu image={ImageCalm} title={"Calma"} />
            <CardMenu image={ImageSalud} title={"Salud"} />
            <CardMenu image={ImagePositivismo} title={"Positivismo"} />
            <CardMenu image={ImageDescanso} title={"Descanso"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
