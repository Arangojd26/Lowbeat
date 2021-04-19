import React from 'react'

export const SidebarContext = React.createContext()

const SidebarProvider = (props) => {

    const { children } = props;

    const [hideSidebar, setHideBar] = React.useState(true);
    const [opacity, setOpacity] = React.useState(0);
  
    return (
        <SidebarContext.Provider value={{hideSidebar, setHideBar, opacity, setOpacity}}>
            { children }
        </SidebarContext.Provider>
    )
}

export default SidebarProvider
