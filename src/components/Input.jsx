import React, { useState, useEffect } from "react";
import styles from "./Input.module.css";
import cities from "../cities.json";
import photo from "../assets/images/bg-airplane.webp";
import airplaneIcone from "../assets/images/plane.png";

const Input = ({
  handleChange1,
  handleChange2,
  hint1,
  hint2,
  onShowModal,
  clearInputs,
}) => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [suggestions1, setSuggestions1] = useState([]);
  const [suggestions2, setSuggestions2] = useState([]);

  useEffect(() => {
    if (inputValue1) {
      const filteredCities = cities.filter((city) =>
        city?.startsWith(inputValue1)
      );
      setSuggestions1(filteredCities);
    } else {
      setSuggestions1([]);
    }
  }, [inputValue1]);

  useEffect(() => {
    if (inputValue2) {
      const filteredCities = cities.filter((city) =>
        city?.startsWith(inputValue2)
      );
      setSuggestions2(filteredCities);
    } else {
      setSuggestions2([]);
    }
  }, [inputValue2]);

  const onInputChange1 = (e) => {
    setInputValue1(e.target.value);
    handleChange1(e.target.value);
  };

  const onInputChange2 = (e) => {
    setInputValue2(e.target.value);
    handleChange2(e.target.value);
  };

  const onCityClick1 = (city) => {
    setInputValue1(city);
    handleChange1(city);
    setSuggestions1([]); 
  };

  const onCityClick2 = (city) => {
    setInputValue2(city);
    setSuggestions2([]);
    handleChange2(city);
  };

  const handleShowModal = () => {
    onShowModal();
    setInputValue1('')
    setInputValue2('')
    clearInputs();
  };
  return (
    <div className={styles.container}>
      <div className={styles.photoHolder}>
        <img src={photo} alt="background" />
      </div>
      <div className={styles.inputContainer}>
        <label>{hint1}</label>
        <input
          type="text"
          value={inputValue1}
          onChange={onInputChange1}
          placeholder="From"
        />
        {suggestions1.length > 1 && (
          <ul className={styles.searchResult}>
            {suggestions1.map((city, index) => (
              <li key={index} onClick={() => onCityClick1(city)}>
                {city}
              </li>
            ))}
          </ul>
        )}
        <img src={airplaneIcone} alt="plane" />
        <label htmlFor="">{hint2}</label>
        <input
          type="text"
          value={inputValue2}
          onChange={onInputChange2}
          placeholder="To"
        />
        {suggestions2.length > 1 && (
          <ul className={styles.secondSerachResult}>
            {suggestions2.map((city, index) => (
              <li key={index} onClick={() => onCityClick2(city)
            }>
                {city}
              </li>
            )
          )}
          </ul>
        )}
        <button onClick={handleShowModal} className={styles.showModalButton}>
          Show Flight Info
        </button>
      </div>
    </div>
  );
};

export default Input;
