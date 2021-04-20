import React from "react";
import SliderCard from "../../components/Category/SliderCard/SliderCard.component";
import BackButtonComponent from "../../shared/BackButton/BackButton.component";
import ContainerCategory from "../../shared/ContainerCategory/ContainerCategory.component";
import NavbarComponent from "../../shared/Navbar/Navbar.component";
import SidebarComponent from "../../shared/Sidebar/Sidebar.component";
import SweetAlert from "../../shared/SweetAlert/SweetAlert.component";
import imageCategoryDescanso from "../../../assets/images/descansoBG.jpg";
import { batch, useDispatch } from "react-redux";
import { obtenerVideosAccion } from "../../Redux/Multimedia/multimediaDucks";
import "./Descanso.css";

const Descanso = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    function fetchVideosCategory() {
      batch(() => {
        dispatch(obtenerVideosAccion("descanso-videos"));
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
      <ContainerCategory imgCategory={imageCategoryDescanso}>
        <div className="o-title-category-carousel">Descanso</div>
        <div className="o-container-carousel">
          <SliderCard typeCard={"video"} />
        </div>
      </ContainerCategory>
    </>
  );
};

export default Descanso;
