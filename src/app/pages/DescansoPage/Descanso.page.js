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
