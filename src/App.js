import React,{useState} from "react";

function App() {

  const [task, setTask] = useState(['Pagar a conta de luz',
        'estudar react hooks']);
      
  const [name, setName] = useState('Matias', 'Vih0', 'karol');
  const [input, setInput] =  useState('');

  function handleAdd(){
    setTask([...task, input])
    setInput('');
  
  }


  return (
    <div>
     <ul>
      {task.map(task=>(<li key={task} > {task} </li>))}
     </ul>

    <input type="text" value={input} onChange={(event => setInput(event.target.value))}/>

    <button type="button" onClick={handleAdd}>Adicionar</button>

    </div>
  );
};

export default App;
