import React from "react";
import BackButtonComponent from "../../shared/BackButton/BackButton.component";
import NavbarComponent from "../../shared/Navbar/Navbar.component";
import SidebarComponent from "../../shared/Sidebar/Sidebar.component";
import SweetAlert from "../../shared/SweetAlert/SweetAlert.component";
import imageCategoryCalm from "../../../assets/images/calmBG.jpg";
import "./Calm.css";
import ContainerCategory from "../../shared/ContainerCategory/ContainerCategory.component";
import SliderCard from "../../components/Category/SliderCard/SliderCard.component";

const Calm = () => {

  return (
    <>
      <NavbarComponent />
      <SidebarComponent />
      <SweetAlert />
      <BackButtonComponent />
      <ContainerCategory imgCategory={imageCategoryCalm}>
        <div className="o-title-category-carousel">Calma</div>
        <div className="o-container-carousel">
          <SliderCard typeCard={"video"} category={"calma-videos"} />
        </div>
      </ContainerCategory>
    </>
  );
};

export default Calm;
