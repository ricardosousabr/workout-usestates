import React, { useState, useEffect } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [cpf, setCpf ] = useState("");
  const regexAbc = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;
  const regexCpf = /[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/;
  const [name, setName] = useState("")

  function checkerPassword() {
    if (password.length <= 7 && regexAbc.test(password)) {
      alert("Senha não tem 8 caracteres")
    }
  }

  function checkerCpf() {
    if (regexCpf.test(cpf)) {
      alert("Tudo certo")
    }
    else {
      alert("Siga o exemplo")
    }
  }

  function clearInput(clear) {
    clear("")
    console.log("fsdf")
  }

  return (
    <div>
      <div>
        <p>Senha {password}</p>
        <input type="text" onChange={(event) => setPassword(event.target.value)}/>
        <button onClick={checkerPassword}>to check</button>
        <button onClick={() => clearInput(setPassword)}>Clear</button>
      </div>
      <div>
        <p>Digite o seu CPF</p>
        <p>Ex: 000.000.000-00</p>
        <input type="text" onChange={(event) => setCpf(event.target.value)}/>
        <button onClick={checkerCpf}>to check</button>
        <button onClick={() => clearInput(setCpf)}>Clear</button>
      </div>
      <div>
        <p>Seu nome: {name}</p>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => clearInput(setName)}>Clear</button>
      </div>
    </div>
  )
}

export default PasswordChecker;
