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

  return (
    <div>
      <h2>Somar Valores</h2>
      <h2>{valorOne}</h2>
      <input type="number" onChange={(event) => setValorOne(parseInt(event.target.value))} />
      <h2>{valorTwo}</h2>
      <input type="number" onChange={(event) => setValorTwo(parseInt(event.target.value))} />
      <h2>{total}</h2>
    </div>
  )
}

export default object;
