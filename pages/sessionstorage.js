import React, { useState } from "react";

function SessionStorage() {
  const [user, setUser] = useState()

  function createUser(key, value) {
    sessionStorage.setItem(key, value)
  }

  function readUser(key) {
    alert(sessionStorage.getItem(key))
  }

  function deleteUser(key) {
    sessionStorage.removeItem(key)
  }

  return (
    <div>
      <h1>Usuario {user}</h1>
      <input type="text" onChange={(event) => setUser(event.target.value)}/>
      <button onClick={() => createUser("user", user)}>Criar Usuario</button>
      <button onClick={() => readUser("user")}>ler Usuario</button>
      <button onClick={() => deleteUser("user")}>Deletar Usuario</button>
    </div>
  )
}

export default SessionStorage;