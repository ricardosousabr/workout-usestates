import React, { useState, useEffect } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("")

  function checker() {
    if (password >= 8) {
      alert("ola")
    }

  }

  return (
    <div>
      <p>Senha {password}</p>
      <input type="text" onChange={(event) => setPassword(event.target.value)} />
      <button onClick={checker}>to check</button>
      <button onClick={() => setPassword("")}>Clear</button>
    </div>
  )
}

export default PasswordChecker;