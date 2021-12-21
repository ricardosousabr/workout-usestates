import React, { useState } from 'react';

 function Example() {
  const [age, setAge] = useState(19)
  const [frut, setFrut] = useState(" ")
  return (
    <div>
      <div>
        <p>Sua idade Atua {age}</p>
        <button onClick={() => setAge(age - 1)}>Diminuir idade</button>
        <button onClick={() => setAge(age + 1)}>Aumentar idade</button>
      </div>
      <div>
      <input type="text" onChange={(event) => setFrut(event.target.value)} id='fruta'/>
      <p>Sua Fruta preferida e {frut}</p>
      </div>
    </div>
  );
}

export default Example;
