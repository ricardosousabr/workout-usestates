import React, { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;

  function checker() {
    if (password.length <= 8 && regex.test(password)) {
      alert("Senha não tem 8 caracteres")
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
