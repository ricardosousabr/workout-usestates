import React, { useState } from "react";

function CreditAnalysis() {
  const [credit, setCredit] = useState(0);
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [address, setAddress] = useState("")
  const [income, setIncome] = useState(0)
  const regex = /^[(a-zA-Z)]$/
  const client = {
    name: name,
    lastName: lastName,
    age: age,
    birthDate: birthDate,
    address: address,
    income: income,
  };
  const badCustomers = {
    client: "Gabriel"
  }

  function analyzeCredit() {
    if (income / 4 >= 300 && client.age >= 18) {
      alert("Credito Aprovado")
      if (income <= 1500) {
        setCredit(Math.round(income / 4))
      } else if (income > 1500) {
        setCredit(Math.round(income / 3))
      }
    } else {
      alert("Credito Não Autorizado")
    }
  }

  function analyzeData() {
    if (name != badCustomers.client && name === regex) {
      alert("Cliente oK")
    } else {
      alert("Erros, dados incorretos")
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Analise de Credito</h1>
      </div>
      <div>
        <div>
          <p>Name: {client.name}</p>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <p>Last name: {client.lastName}</p>
          <input type="text" onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div>
          <p>Age: {client.age}</p>
          <input type="number" onChange={(e) => setAge(e.target.value)}/>
        </div>
        <div>
          <p>Birth date: {client.birthDate}</p>
          <input type="text" onChange={(e) => setBirthDate(e.target.value)}/>
        </div>
        <div>
          <p>Address: {client.address}</p>
          <input type="text" onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div>
          <p>Income: R$ {client.income}</p>
          <input type="number" onChange={(e) => setIncome(e.target.value)}/>
        </div>
        <div>
          <button onClick={analyzeData}>analyze data</button>
        </div>
        <div>
          <p>Seu Credito Atual: {credit}</p>
        </div>
      </div>
      <div>
        <button onClick={analyzeCredit}>analyze credit</button>
      </div>
    </div>
  );
}

export default CreditAnalysis;
