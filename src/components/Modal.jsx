import React from "react";
import styles from "./Modal.module.css";

import airplaneIcone from "../assets/images/plane.png";

const Modal = ({ show, onClose, ticketInfo }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h1>Flight Information</h1>
        <h2>
                  {ticketInfo.from}
                  
          <img src={airplaneIcone} alt="" />
          {ticketInfo.to}
        </h2>
        <p>Time: {ticketInfo.time}</p>
        <p>Price: {ticketInfo.price}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
