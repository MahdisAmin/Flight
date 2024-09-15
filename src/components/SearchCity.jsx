import React, { useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

function SearchCity() {
  const [cityName, setCityName] = useState("");
  const [citySecondInput, setCitySecondInput] = useState("");
  const [ticketInfo, setTicketInfo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange1 = (value) => {
    setCityName(value);
  };

  const handleChange2 = (value) => {
    setCitySecondInput(value);
  };

  const generateTicketInfo = () => {
    if (cityName && citySecondInput) {
      const randomHour = Math.floor(Math.random() * 24);
      const randomMinute = Math.floor(Math.random() * 60);
      const randomPrice = (Math.random() * 1000).toFixed(2);
      setTicketInfo({
        from: cityName,
        to: citySecondInput,
        time: `${randomHour}:${randomMinute < 10 ? "0" : ""}${randomMinute}`,
        price: `$${randomPrice}`,
      });
      setShowModal(true);
    }
  };

  const clearInputs = () => {
    setCityName("");
    setCitySecondInput("");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Input
        handleChange1={handleChange1}
        handleChange2={handleChange2}
        hint1="From"
        hint2="To"
        onShowModal={generateTicketInfo}
        clearInputs={clearInputs}
      />
      <Modal show={showModal} onClose={closeModal} ticketInfo={ticketInfo} />
    </>
  );
}

export default SearchCity;
