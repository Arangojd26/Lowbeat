import React from "react";
// import Slidercards from "../../components/Calm/SliderCards/Slidercards.component";
import BackButtonComponent from "../../shared/BackButton/BackButton.component";
import NavbarComponent from "../../shared/Navbar/Navbar.component";
import SidebarComponent from "../../shared/Sidebar/Sidebar.component";
import SweetAlert from "../../shared/SweetAlert/SweetAlert.component";
import imageCategoryCalm from "../../../assets/images/calmBG.jpg";
// import { useSelector } from 'react-redux'
import "./Calm.css";
import ContainerCategory from "../../shared/ContainerCategory/ContainerCategory.component";
import SliderCard from "../../components/Category/SliderCard/SliderCard.component";

const Calm = () => {
  const [hideSidebar, setHideBar] = React.useState(true);
  const [opacity, setOpacity] = React.useState(0);

  // const stateAlert = useSelector(store => store.myList.showAlertAdd)

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
