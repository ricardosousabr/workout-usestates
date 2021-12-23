import React, { useState, useEffect } from "react";

function plans() {
  const [megas, setMegas] = useState(0)
  const [canais, setCanais] = useState(0)
  const [linhas, setLinhas] = useState(0)
  const [valor, setValor] = useState(0)

  useEffect(() => {
    const calculo = megas + canais + linhas;
    setValor(calculo)

  }, [megas, canais, linhas]);

  function handleInput(event, passValue, multiplyValue) {
    const parseNumber = parseInt(event.target.value)
    const annualValue = multiplyValue * 12;

    if (parseNumber >= 0) {
      passValue(parseNumber * multiplyValue)
      console.log(parseNumber * multiplyValue)
    } else {
      passValue(0)
    }
  }

  return (
    <div>
      <div>
        <h1>Internet EFEX.</h1>
      </div>
      <div>
        <p>Digite a quantidade de Megas - {megas}</p>
        <input type="number" onChange={(event) => handleInput(event, setMegas, 1) } />
      </div>
      <div>
        <p>Digite a quantidade de Canais - {canais}</p>
        <input type="number" onChange={(event) => handleInput(event, setCanais, 2)} />
      </div>
      <div>
        <p>Digite a quantidade de Linhas de Telefone - {linhas}</p>
        <input type="number" onChange={(event) => handleInput(event, setLinhas, 20)} />
      </div>
      <div>
        <p>Valor do Plano R$ {valor}</p>
        <p>Valor do Plano Anual R$ {valor * 12}</p>
      </div>
    </div>
  );
}

export default plans;
