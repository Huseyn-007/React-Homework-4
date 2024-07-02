import React, { useState } from "react";
import "./App.css";

export default function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [score, setScore] = useState(0);
  const [image, setImage] = useState("");

  const [tempname, setTempName] = useState("");
  const [tempsurname, setTempSurname] = useState("");
  const [tempbirthDate, setTempBirthDate] = useState(null);
  const [tempscore, setTempScore] = useState(0);
  const [tempimage, setTempImage] = useState("");

  function handleSumbit(e) {
    e.preventDefault();
    setTempName(name);
    setTempSurname(surname);
    setTempScore(score);
    setTempBirthDate(birthDate);
    setTempImage(image);

    setName('');
    setSurname('')
    setScore('');
    setBirthDate(null);
    setImage('');

  }

  return (
    <div className="container">
      <form onSubmit={handleSumbit} className="inputs">
        <h1>Form</h1>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Enter your surname"
          onChange={(e) => {
            setSurname(e.target.value);
          }}
          value={surname}
        ></input>
        <br />
        <input
          type="date"
          placeholder="Enter your birthdate"
          onChange={(e) => {
            setBirthDate(e.target.value);
          }}
          value={birthDate}
        ></input>
        <br />
        <input
          type="number"
          placeholder="Enter your score"
          onChange={(e) => {
            setScore(e.target.value);
          }}
          value={score}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Enter your image url"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
        ></input>
        <button type="sumbit">Sumbit</button>
      </form>

      <section className="datas">
        <h2> Name: {tempname}</h2>
        <h2> Surname: {tempsurname}</h2>
        <h2> BirthDate: 121212121</h2>
        <h2> Score: {tempscore}</h2>
        <img src={tempimage} alt="image"></img>
      </section>
    </div>
  );
}
