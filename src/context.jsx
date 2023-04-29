import React, { createContext, useContext, useState } from 'react'

const NewContext = createContext();

export const useGlobalContext = () => useContext(NewContext);

const AppProvider = (props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <NewContext.Provider value={{isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal}}>
        {props.children}
    </NewContext.Provider>
  )
}

export default AppProvider
