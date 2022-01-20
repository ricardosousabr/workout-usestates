import React, { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [cpf, setCpf ] = useState("");
  const regexAbc = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;
  const regexCpf = /[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/;

  function checkerPassword() {
    if (password.length <= 8 && regexAbc.test(password)) {
      alert("Senha não tem 8 caracteres")
    }
  }

  function checkerCpf() {
    if (regexCpf.test(cpf)) {
      alert("Tudo certo")
    }
    else {
      alert("CPF invalido")
    }
  }

  return (
    <div>
      <div>
        <p>Senha {password}</p>
        <input type="text" onChange={(event) => setPassword(event.target.value)}/>
        <button onClick={checkerPassword}>to check</button>
        <button onClick={() => setPassword("")}>Clear</button>
      </div>
      <div>
        <p>Digite o seu CPF</p>
        <input type="text" onChange={(event) => setCpf(event.target.value)}/>
        <button onClick={checkerCpf}>to check</button>
        <button onClick={() => setCpf("")}>Clear</button>
      </div>
    </div>
  )
}

export default PasswordChecker;
