import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function object() {
  const [valorOne, setValorOne] = useState(0)
  const [valorTwo, setValorTwo] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculo = valorOne + valorTwo;
      setTotal(calculo)
    }, [valorOne, valorTwo]
  )

  function handlerInput(setValue, event) {
    const valueInput = parseInt(event.target.value);

    if (valueInput >= 0) {
      setValue(valueInput)
    } else {
      setValue(0)
    }
  }

  return (
    <div>
      <h2>Somar Valores</h2>
      <h2>Valor {valorOne}</h2>
      <input type="number" onChange={(event) => handlerInput(setValorOne, event)} />
      <h2>Valor {valorTwo}</h2>
      <input type="number" onChange={(event) => handlerInput(setValorTwo, event)} />
      <h2>Valor Total {total}</h2>
    </div>
  )
}

export default object;
