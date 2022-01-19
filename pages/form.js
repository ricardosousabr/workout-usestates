import React, { useState, useEffect } from "react";

function Form() {
  const [data, setData] = useState({})
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [city, setCity] = useState("")
  const [password, setPassword] = useState("")
  const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;

  useEffect(() => {
    const users = {
      name: name,
      age: age,
      city: city,
      password: password,
    }
    setData(users)

  }, [name, age, city, password])

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

  function store(key, value) {
    if (age >= 18 && password.length == 8 && regex.test(password)) {
      localStorage.setItem(key, value)
    } else {
      alert("Idade ou senha incorretos")
    }
  }

  function removeKey(key) {
    localStorage.removeItem(key)
  }

  return (
    <div>
      <div>
        <h1>Criar usuario</h1>
        <p>Name: {data.name}</p>
        <input type="text" value={name} onChange={(event) => dataInput(event, setName)} />
        <button onClick={() => clearInput(setName)}>Clear</button>
      </div>
      <div>
        <p>Age: {data.age}</p>
        <p>Minimum age 18 years</p>
        <input type="number" value={age} onChange={(event) => dataInput(event, setAge)} />
        <button onClick={checkAge}>Check</button>
        <button onClick={() => clearInput(setAge)}>Clear</button>
      </div>
      <div>
      <p>City: {data.city}</p>
      <input type="text" value={city} onChange={(event) => dataInput(event, setCity)} />
      <button onClick={() => clearInput(setCity)}>Clear</button>
      </div>
      <div>
        <p>Password: {data.password}</p>
        <p>Only passwords containing letters</p>
        <input type="text" value={password} onChange={(event) => dataInput(event, setPassword)} />
        <button onClick={() => clearInput(setPassword)}>Clear</button>
      </div>
      <div>
        <button onClick={() => store("name", name)}>Criar Usuario</button>
        <button onClick={() => removeKey("name")}>Deletar Usuario</button>
      </div>
    </div>
  )
}

export default Form;
