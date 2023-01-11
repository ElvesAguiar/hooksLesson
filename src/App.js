import React,{useState,useEffect, useMemo, useCallback } from "react";

function App() {

  const [task, setTask] = useState(['Pagar a conta de luz',
        'estudar react hooks']);
      
  const [name, setName] = useState('Matias', 'Vih0', 'karol');
  const [input, setInput] =  useState('');


  useEffect(()=>{
    const storageTasks = localStorage.getItem('task');
    if(storageTasks){
      setTask(JSON.parse(storageTasks));
    }
  },[])

  useEffect(() => {
    localStorage.setItem('task',JSON.stringify(task));
  }, [task]);

  const handleAdd= useCallback(()=>{
    setTask([...task, input]);
    setInput('');
  
  },[input,task]);

  const totalTask = useMemo(() => task.length, [task]);


  return (
    <div>
     <ul>
      {task.map(task=>(<li key={task} > {task} </li>))}
     </ul>
    <br/>

    <strong>vc tem {totalTask} tarefas</strong><br/>

    <input type="text" value={input} onChange={(event => setInput(event.target.value))}/>

    <button type="button" onClick={handleAdd}>Adicionar</button>

    </div>
  );
};

export default App;
