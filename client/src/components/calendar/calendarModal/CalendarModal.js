import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { layoutCloseModal } from "../../../redux/layout/layoutAction";
import CalendarForm from "../calendarForm/CalendarForm";
import "./calendarModal.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

//componente
export default function CalendarModal() {
  
  const {modalOpen} = useSelector((state) => state.layout);
  const dispatch = useDispatch()


  const closeModal = () => {
    dispatch(layoutCloseModal())
  };

  return (
    <Modal
      isOpen={ modalOpen }
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      overlayClassName="modal-fondo"
    >
      <CalendarForm closeModal={closeModal}  />
    </Modal>
  );
}
