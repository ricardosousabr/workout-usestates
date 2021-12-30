import React, { useState, useEffect } from "react";

function plans() {
  const [megas, setMegas] = useState(0)
  const [canais, setCanais] = useState(0)
  const [linhas, setLinhas] = useState(0)
  const [valor, setValor] = useState(0)

  useEffect(() => {
    const calculo = (megas * 1) + (canais * 2) + (linhas * 20);
    setValor(calculo)

  }, [megas, canais, linhas]);

  function handleInput(event, passValue) {
    const parseNumber = parseInt(event.target.value)

    if (parseNumber >= 0) {
      passValue(parseNumber)
    } else {
      passValue("")
    }
  }

  function clearInput(clear) {
    clear(0)
  }

  return (
    <div>
      <div>
        <h1>EFEX Internet.</h1>
      </div>
      <div>
        <p>Enter the amount of Megas - {megas}</p>
        <input type="number" value={megas} onChange={(event) => handleInput(event, setMegas) } />
        <button onClick={() => clearInput(setMegas)}>Clear</button>
      </div>
      <div>
        <p>Enter the number of channels - {canais}</p>
        <input type="number" value={canais} onChange={(event) => handleInput(event, setCanais)} />
        <button onClick={() => clearInput(setCanais)}>Clear</button>
      </div>
      <div>
        <p>Enter the number of Telephone Lines - {linhas}</p>
        <input type="number" value={linhas} onChange={(event) => handleInput(event, setLinhas)} />
        <button onClick={() => clearInput(setLinhas)}>Clear</button>
      </div>
      <div>
        <p>Plan Value R$ {valor},00</p>
        <p>Annual Plan Value R$ {valor * 12},00</p>
      </div>
    </div>
  );
}

export default plans;
