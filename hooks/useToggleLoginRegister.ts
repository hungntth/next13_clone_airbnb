import { useCallback } from "react";

interface ModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useToggleLoginRegister = (
  loginModal: ModalStore,
  registerModal: ModalStore,
  loginSwitch: boolean
) => {
  const onToggle = useCallback(() => {
    if (!!loginSwitch) {
      loginModal.onClose();
      registerModal.onOpen();
    }else{
        registerModal.onClose();
        loginModal.onOpen();
    }
  }, [loginModal, registerModal]);

  return onToggle;
};

export default useToggleLoginRegister;
