import React from "react";
import BackButtonComponent from "../../shared/BackButton/BackButton.component";
import NavbarComponent from "../../shared/Navbar/Navbar.component";
import SidebarComponent from "../../shared/Sidebar/Sidebar.component";
import SweetAlert from "../../shared/SweetAlert/SweetAlert.component";
import imageCategoryCalm from "../../../assets/images/calmBG.jpg";
import "./Calm.css";
import ContainerCategory from "../../shared/ContainerCategory/ContainerCategory.component";
import SliderCard from "../../components/Category/SliderCard/SliderCard.component";
import { batch, useDispatch } from "react-redux";
import { obtenerVideosAccion } from "../../Redux/Multimedia/multimediaDucks";

const Calm = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    function fetchVideosCategory() {
      batch(() => {
        dispatch(obtenerVideosAccion("calma-videos"));
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
