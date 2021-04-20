import React from "react";
import SliderCard from "../../components/Category/SliderCard/SliderCard.component";
import BackButtonComponent from "../../shared/BackButton/BackButton.component";
import ContainerCategory from "../../shared/ContainerCategory/ContainerCategory.component";
import NavbarComponent from "../../shared/Navbar/Navbar.component";
import SidebarComponent from "../../shared/Sidebar/Sidebar.component";
import SweetAlert from "../../shared/SweetAlert/SweetAlert.component";
import imageCategorySalud from "../../../assets/images/saludBG.jpg";
import { batch, useDispatch } from "react-redux";
import { obtenerVideosAccion } from "../../Redux/Multimedia/multimediaDucks";
import "./Salud.css";

const Salud = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    function fetchVideosCategory() {
      batch(() => {
        dispatch(obtenerVideosAccion("salud-videos"));
      });
    }
    fetchVideosCategory();
  }, [dispatch]);

  return (
    <>
      <NavbarComponent />
      <SidebarComponent />
      <SweetAlert />
      <BackButtonComponent />
      <ContainerCategory imgCategory={imageCategorySalud}>
        <div className="o-title-category-carousel">Salud</div>
        <div className="o-container-carousel">
          <SliderCard typeCard={"video"} />
        </div>
      </ContainerCategory>
    </>
  );
};

export default Salud;
