import React, { useState } from "react";

function form() {
  const [data, setData] = useState({})
  const users = {
    name: "",
    age: 0,
    city: "",
  }

  function userData() {
    setData({...users, name: "Ricardo", age: 20, city: "Teresina"})
    console.log(data)
  }

  return (
    <div>
      <h1>Usuario</h1>
      <p>Nome: {data.name}</p>
      <p>Idade: {data.age}</p>
      <p>city: {data.city}</p>
      <button onClick={userData}>Click</button>
    </div>
  )
}

export default form;
