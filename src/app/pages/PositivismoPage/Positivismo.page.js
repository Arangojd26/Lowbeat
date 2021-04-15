import React from "react";
import BackButtonComponent from "../../shared/BackButton/BackButton.component";
import NavbarComponent from "../../shared/Navbar/Navbar.component";
import SidebarComponent from "../../shared/Sidebar/Sidebar.component";
import SweetAlert from "../../shared/SweetAlert/SweetAlert.component";
import imageCategoryPositivimso from "../../../assets/images/positivismoBG.jpg";
import "./Positivismo.css";
import ContainerCategory from "../../shared/ContainerCategory/ContainerCategory.component";
import SliderCard from "../../components/Category/SliderCard/SliderCard.component";

const Positivismo = () => {
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
      <ContainerCategory imgCategory={imageCategoryPositivimso}>
        <div className="o-title-category-carousel">Positivismo</div>
        <div className="o-container-carousel">
          <SliderCard typeCard={"video"} category={"positivismo-videos"} />
        </div>
      </ContainerCategory>
    </>
  );
};

export default Positivismo;
