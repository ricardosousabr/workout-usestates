import React, { useState, useEffect } from "react";

function plans() {
  const [megas, setMegas] = useState(0)
  const [canais, setCanais] = useState(0)
  const [linhas, setLinhas] = useState(0)
  const [valor, setValor] = useState(megas + canais + linhas)

  useEffect(() => {
    const calculo = megas + canais + linhas;
    console.log(calculo)

  }, [megas, canais, linhas]);
  return (
    <div>
      <div>
        <h1>Internet EFEX.</h1>
      </div>
      <div>
        <p>Digite a quantidade de Megas - {megas}</p>
        <input type="number" onChange={(event) => setMegas(parseInt(event.target.value))} />
      </div>
      <div>
        <p>Digite a quantidade de Canais - {canais}</p>
        <input type="number" onChange={(event) => setCanais(parseInt(event.target.value))} />
      </div>
      <div>
        <p>Digite a quantidade de Linhas de Telefone - {linhas}</p>
        <input type="number" onChange={(event) => setLinhas(parseInt(event.target.value))} />
      </div>
      <div>
        <p>Valor do Plano {calculo}</p>
      </div>
    </div>
  );
}

export default plans;
