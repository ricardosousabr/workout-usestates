import React, { useState, useEffect } from "react";

function LocalStorage() {
  const [user, setUser] = useState({})
  const [name, setName] = useState("")
  const [senha, setSenha] = useState("")

  useEffect(() => {
    const users = {
      name: name,
      senha: senha,
    }
    setUser(users)

  }, [name, senha])

  function store(key, value) {
    localStorage.setItem(key, value)
  }

  function readKey(key) {
    alert(localStorage.getItem(key))
  }

  function removeKey(key) {
    localStorage.removeItem(key)
  }

  return (
    <div>
      <div>
        <h1>Digite Seu Nome de Usuario {user.name} e senha {user.senha}</h1>
        <div>
          <input type="text" onChange={(event) => setName(event.target.value)} /><br />
          <button onClick={() => store("ls_user", user.name)}>Gravar Usuario</button>
          <button onClick={() => readKey("ls_user")}>Ler Usuario</button>
          <button onClick={() => removeKey("ls_user")}>Apagar Usuario</button>
        </div>
        <div>
          <input type="text" onChange={(event) => setSenha(event.target.value)} /><br />
          <button onClick={() => store("ls_senha", user.senha)}>Gravar Senha</button>
          <button onClick={() => readKey("ls_senha")}>Ler Senha</button>
          <button onClick={() => removeKey("ls_senha")}>Apagar Senha</button>
        </div>
        <div>
          <button onClick={() => store("ls_data", user)}>Gravar dados</button>
          <button onClick={() => readKey("ls_senha")}>Ler Dados</button>
        </div>
      </div>
    </div>
  )
}

export default LocalStorage;
