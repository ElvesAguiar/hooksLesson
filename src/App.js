import React, { useState } from 'react';
 
function App() {
 
  // Declarar uma nova variável de state, na qual chamaremos de "contador"
  const [count, setContador] = useState(0);
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setContador(count + 1)}>
          Aumentar
      </button>
    </div>
  );
}

export default App;