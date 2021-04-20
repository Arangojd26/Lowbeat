import React from "react";

export const SidebarContext = React.createContext();

const SidebarProvider = (props) => {
  const { children } = props;

  const [hideSidebar, setHideBar] = React.useState(true);
  const [opacity, setOpacity] = React.useState(0);
  const [styleNav, setStyleNav] = React.useState({
    position: "absolute",
    top: 0,
    left: 0,
    background:
      "linear-gradient(1deg, rgba(98,73,133,1) 0%, rgba(180,128,251,1) 94%)",
    width: "16rem",
    height: "100vh",
    zIndex: 10,
    borderRadius: "0px 45px 45px 0px",
    opacity: 0,
    transition: "opacity 0.5s",
  });

  return (
    <SidebarContext.Provider
      value={{
        hideSidebar,
        setHideBar,
        opacity,
        setOpacity,
        styleNav,
        setStyleNav,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
