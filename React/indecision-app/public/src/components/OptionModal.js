import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearModal} // uses function then yo ucan click anywhere and modal disappears
    contentLabel="selected option"
  >
    <h3>selected option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearModal}>Okay</button>
  </Modal>
);
export default OptionModal;
