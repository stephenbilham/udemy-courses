import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearModal} // uses function then yo ucan click anywhere and modal disappears
    contentLabel="selected option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">selected option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleClearModal}>
      Okay
    </button>
  </Modal>
);
export default OptionModal;
