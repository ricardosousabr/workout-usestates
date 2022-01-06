import React, { useState, useEffect } from "react";

function Form() {
  const [data, setData] = useState({})
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
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

  return (
    <div>
      <h1>Usuario</h1>
      <p>Nome: {data.name}</p>
      <input type="text" onChange={(event) => dataInput(event, setName)} />
      <p>Idade: {data.age}</p>
      <input type="number" onChange={(event) => dataInput(event, setAge)} />
      <button onClick={checkAge}>Check</button>
      <p>Cidade: {data.city}</p>
      <input type="text" onChange={(event) => dataInput(event, setCity)} />
    </div>
  )
}

export default Form;
