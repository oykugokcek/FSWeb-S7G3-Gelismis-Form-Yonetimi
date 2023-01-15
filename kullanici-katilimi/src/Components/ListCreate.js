import React, { useState } from "react";

function ListCreate({ onCreate }) {
  const [personData, setPersonData] = useState({
    name: "",
    email: "",
    password: "",
    acceptance: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    let newValue = value;
    if (event.target.type === "checkbox") {
      newValue = event.target.checked;
    }

    setPersonData({
      ...personData,
      [name]: newValue,
    });
    console.log(personData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(personData);
  };

  return (
    <div className="ListCreate">
      <form>
        <label></label>
        <input
          name="name"
          value={personData.name}
          type="text"
          placeholder="İsim"
          onChange={handleChange}
        />
        <br />
        <label></label>
        <input
          name="email"
          value={personData.email}
          type="text"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <label></label>
        <input
          name="password"
          value={personData.password}
          type="password"
          placeholder="Şifre"
          onChange={handleChange}
        />
        <br />
        <input
          name="acceptance"
          checked={personData.acceptance}
          type="checkbox"
          placeholder="isim"
          onChange={handleChange}
        />
        <label>Kullanım Şartlarını Kabul Ediyorum.</label>
        <br />
        <button onClick={handleSubmit}>Sign Up!</button>
      </form>
    </div>
  );
}

export default ListCreate;
