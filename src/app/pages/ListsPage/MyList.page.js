import React from "react";
import ContainerMyList from "../../components/MyList/ContainerList/ContainerMyList.component";
import Menu from "../../components/MyList/Menu/Menu.component";
import BackButtonComponent from "../../shared/BackButton/BackButton.component";
import NavbarComponent from "../../shared/Navbar/Navbar.component";
import SidebarComponent from "../../shared/Sidebar/Sidebar.component";
import SweetAlert from "../../shared/SweetAlert/SweetAlert.component";
import "./MyList.css";

const MyList = () => {
  const [showList, setShowList] = React.useState("Calma");

  const renderCategoryList = () => {
    switch (showList) {
      case "Calma":
        return <ContainerMyList category={"calma-videos"} />;
      case "Salud":
        return <ContainerMyList category={"salud-videos"} />;
      case "Positivismo":
        return <ContainerMyList category={"positivismo-videos"} />;
      case "Descanso":
        return <ContainerMyList category={"descanso-videos"} />;
      default:
        break;
    }
  };

  return (
    <>
      <NavbarComponent />
      <SidebarComponent />
      <BackButtonComponent />
      <SweetAlert />
      <div className="container-fluid">
        <Menu setShowList={setShowList} />
        {renderCategoryList()}
      </div>
    </>
  );
};

export default MyList;
