import React, { useState, useEffect } from "react";

function Form() {
  const [data, setData] = useState({})
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [city, setCity] = useState("")

  useEffect(() => {
    const users = {
      name: name,
      age: age,
      city: city,
    }
    setData(users)

  }, [name, age, city])

  function dataInput(event, passValue) {
    const userData = event.target.value
    passValue(userData)
  }

  function checkAge() {
    if (age >= 18) {
      alert("Usuario Maior de Idade")
    } else {
      alert("Usuario Menor de Idade")
    }
  }

  function clearInput(clear) {
    clear("")
  }

  return (
    <div>
      <h1>Criar usuario</h1>
      <p>Nome: {data.name}</p>
      <input type="text" value={name} onChange={(event) => dataInput(event, setName)} />
      <button onClick={() => clearInput(setName)}>Clear</button>
      <p>Idade: {data.age}</p>
      <input type="number" value={age} onChange={(event) => dataInput(event, setAge)} />
      <button onClick={checkAge}>Check</button>
      <button onClick={() => clearInput(setAge)}>Clear</button>
      <p>Cidade: {data.city}</p>
      <input type="text" value={city} onChange={(event) => dataInput(event, setCity)} />
      <button onClick={() => clearInput(setCity)}>Clear</button>
    </div>
  )
}

export default Form;
