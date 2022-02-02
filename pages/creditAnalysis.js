import React, { useState } from "react";

function CreditAnalysis() {
  const [credit, setCredit] = useState(0);
  const [income, setIncome] = useState(0);
  const client = {
    name: "Maria",
    lastName: "Carmo",
    age: 21,
    birthDate: "05/03/2000",
    address: "RUA QUATORZE",
    income: income,
  };

  function analysis() {
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

  return (
    <div className="App">
      <div>
        <h1>Analise de Credito</h1>
      </div>
      <div>
        <p>Name: {client.name}</p>
        <p>Last name: {client.lastName}</p>
        <p>Birth date: {client.birthDate}</p>
        <p>Address: {client.address}</p>
        <p>Income: R$ {client.income}</p>
      </div>
      <div>
        <p>Seu Credito Atual: {credit}</p>
      </div>
      <div>
        <input type="number" onChange={(e) => setIncome(e.target.value)}/>
      </div>
      <div>
        <button onClick={analysis}>analysis</button>
      </div>
    </div>
  );
}

export default CreditAnalysis;
