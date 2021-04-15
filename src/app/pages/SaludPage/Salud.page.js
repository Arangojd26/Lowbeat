import React from "react";
import SliderCard from "../../components/Category/SliderCard/SliderCard.component";
import BackButtonComponent from "../../shared/BackButton/BackButton.component";
import ContainerCategory from "../../shared/ContainerCategory/ContainerCategory.component";
import NavbarComponent from "../../shared/Navbar/Navbar.component";
import SidebarComponent from "../../shared/Sidebar/Sidebar.component";
import SweetAlert from "../../shared/SweetAlert/SweetAlert.component";
import imageCategorySalud from "../../../assets/images/saludBG.jpg";
import "./Salud.css";

const Salud = () => {
  const [hideSidebar, setHideBar] = React.useState(true);
  const [opacity, setOpacity] = React.useState(0);

  return (
    <>
      <NavbarComponent setOpacity={setOpacity} setHideBar={setHideBar} />
      <SidebarComponent
        opacity={opacity}
        setOpacity={setOpacity}
        hideSidebar={hideSidebar}
        setHideBar={setHideBar}
      />

      <SweetAlert />
      <BackButtonComponent />
      <ContainerCategory imgCategory={imageCategorySalud}>
        <div className="o-title-category-carousel">Salud</div>
        <div className="o-container-carousel">
          <SliderCard typeCard={"video"} category={"salud-videos"} />
        </div>
      </ContainerCategory>
    </>
  );
};

export default Salud;
