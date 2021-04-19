import React from "react";
import SliderCard from "../../components/Category/SliderCard/SliderCard.component";
import BackButtonComponent from "../../shared/BackButton/BackButton.component";
import ContainerCategory from "../../shared/ContainerCategory/ContainerCategory.component";
import NavbarComponent from "../../shared/Navbar/Navbar.component";
import SidebarComponent from "../../shared/Sidebar/Sidebar.component";
import SweetAlert from "../../shared/SweetAlert/SweetAlert.component";
import imageCategoryDescanso from "../../../assets/images/descansoBG.jpg";
import "./Descanso.css";

const Descanso = () => {
  return (
    <>
      <NavbarComponent />
      <SidebarComponent />
      <SweetAlert />
      <BackButtonComponent />
      <ContainerCategory imgCategory={imageCategoryDescanso}>
        <div className="o-title-category-carousel">Descanso</div>
        <div className="o-container-carousel">
          <SliderCard typeCard={"video"} category={"descanso-videos"} />
        </div>
      </ContainerCategory>
    </>
  );
};

export default Descanso;
