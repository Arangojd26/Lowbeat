import React from "react";
import BackButtonComponent from "../../shared/BackButton/BackButton.component";
import NavbarComponent from "../../shared/Navbar/Navbar.component";
import SidebarComponent from "../../shared/Sidebar/Sidebar.component";
import SweetAlert from "../../shared/SweetAlert/SweetAlert.component";
import imageCategoryPositivimso from "../../../assets/images/positivismoBG.jpg";
import "./Positivismo.css";
import ContainerCategory from "../../shared/ContainerCategory/ContainerCategory.component";
import SliderCard from "../../components/Category/SliderCard/SliderCard.component";
import { batch, useDispatch } from "react-redux";
import { obtenerVideosAccion } from "../../Redux/Multimedia/multimediaDucks";

const Positivismo = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    function fetchVideosCategory() {
      batch(() => {
        dispatch(obtenerVideosAccion("positivismo-videos"));
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
      <ContainerCategory imgCategory={imageCategoryPositivimso}>
        <div className="o-title-category-carousel">Positivismo</div>
        <div className="o-container-carousel">
          <SliderCard typeCard={"video"} />
        </div>
      </ContainerCategory>
    </>
  );
};

export default Positivismo;
