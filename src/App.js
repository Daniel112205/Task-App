import './App.css';
import TodoContainer from './components/TodoContainer';
import Create from './services/Create'
import React from 'react';
import { useEffect, useState } from "react";
import Read from './services/Read';
import RegisterTask from './components/RegisterTask';
import Delete from './services/Delete';
function App() {
  const [taskToCreate, setTaskToCreate] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null)
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

  useEffect(() => {
    if (taskToDelete) {
      Delete(taskToDelete).then(
        () => {
          setData(prev => {
            return prev.filter(value => value.id !== taskToDelete);
          })
        },
        err => {
          console.error(err)
        }
      )
    }
  }, [taskToDelete])
  
  const handleCreate = values => {
    setTaskToCreate(values)
  }
  
  const handleDelete = id => {
    setTaskToDelete(id)
    console.log(id);
  }

  const list = data.map(value => (
    <TodoContainer 
      task={value.task}
      key={value.id}
      student={value.student}
      id={value.id}
      handleDelete={handleDelete}      
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
