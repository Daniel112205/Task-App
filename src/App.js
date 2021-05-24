import './App.css';
import TodoContainer from './components/TodoContainer';
import Create from './services/Create'
import React from 'react';
import { useEffect, useState } from "react";
import Read from './services/Read';
import RegisterTask from './components/RegisterTask';
function App() {
  const [taskToCreate, setTaskToCreate] = useState(null);
  const [data, setData] = useState([])
  useEffect(()=>{
    Read()
    .then(response =>{
      setData(response.data.todos)
    })
  },[])
  
  useEffect(() => {
    if (taskToCreate) {
      Create(taskToCreate).then(
        res => {
          setData(prev => [res.data, ...prev])
        },
        err => {
          console.error(err)
        }
      )
    }
  }, [taskToCreate])
  
  const handleCreate = values => {
    setTaskToCreate(values)
  }
  const list = data.map(value => (
    <TodoContainer 
      task={value.task}
      key={value.task}
      student={value.student}      
    />
  ))
  return (
    <div className="App">
      <header className="App-header">
        <RegisterTask handleCreate={handleCreate}/>
        <h2>Taks</h2>
        {list}
      </header>
    </div>
  );
}

export default App;
