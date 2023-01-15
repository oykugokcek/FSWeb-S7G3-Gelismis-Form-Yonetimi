import React, { useState } from "react";
import ListCreate from "./Components/ListCreate";
import List from "./Components/List";

function App() {
  const [formData, setFormData] = useState([]);

  const createPerson = (person) => {
    const updatedData = [
      ...formData,
      {
        name: person.name,
        email: person.email,
        password: person.password,
        acceptance: person.acceptance,
      },
    ];
    setFormData(updatedData);
    console.log(formData);
  };

  return (
    <div className="App">
      <ListCreate onCreate={createPerson} />
      <List formData={formData} />
    </div>
  );
}

export default App;
