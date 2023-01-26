/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, createContext, useContext, useCallback, useEffect } from "react";
import ProjectModal from "./project-modal";

export const MODAL_TYPES = {
  PROJECT_MODAL: "PROJECT_MODAL",
};

const MODAL_COMPONENTS: { [x: string]: React.FC<any> } = {
  [MODAL_TYPES.PROJECT_MODAL]: ProjectModal,
};

export type GlobalModalContext = {
  showModal: (modalType: string, modalProps?: unknown) => void;
  hideModal: () => void;
  store: unknown;
};

const initalState: GlobalModalContext = {
  showModal: () => {},
  hideModal: () => {},
  store: {},
};

const GlobalModalContext = createContext(initalState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [store, setStore] = useState({});
  const { modalType, modalProps } = store as any || {};

  const escListener = useCallback((event: KeyboardEvent) => {

    if (event.key === "Escape") {
      hideModal()
    }
  }, []);

  const showModal = (modalType: string, modalProps: unknown = {}) => {
    setStore({
      ...store,
      modalType,
      modalProps,
      modalState: true
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      modalType: null,
      modalProps: {},
      modalState: false
    });
  };

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType];
    if (!modalType || !ModalComponent) {
      return null;
    }
    return <ModalComponent id="global-modal" {...modalProps} />;
  };

  useEffect(() => {
    document.addEventListener("keydown", escListener, false);

    return () => {
      document.removeEventListener("keydown", escListener, false);
    };
  }, [escListener]);

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
};
