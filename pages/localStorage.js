import React, { useState } from "react";

function LocalStorage() {
  const [user, setUser] = useState("")

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
      <h1>Digite Seu Nome de Usuario</h1>
      <input type="text" value={user} onChange={(event) => setUser(event.target.value)} />
      <button onClick={() => store("ls_user", user)}>Gravar Usuario</button>
      <button onClick={() => readKey("ls_user")}>Ler Usuario</button>
      <button onClick={() => removeKey("ls_user")}>Apagar Usuario</button>
    </div>
  )
}

export default LocalStorage;
