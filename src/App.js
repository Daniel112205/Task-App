import './App.css';
import TodoContainer from './components/TodoContainer';
import Create from './services/Create'
import React from 'react';
import { useEffect, useState } from "react";
import Read from './services/Read';
import RegisterTask from './components/RegisterTask';
import Delete from './services/Delete';
import TodoItem from './components/TodoItem';
import Update from './services/Update';

function App() {
  const [taskToCreate, setTaskToCreate] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [data, setData] = useState([]);
  
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
  
  useEffect(() => {
    if (dataUpdate) {
        Update(dataUpdate).then(
        () => {
          setData(prev => {
            return prev.filter(value => value.id !== dataUpdate);
          })
        },
        err => {
          console.error(err)
        }
      )
    }
  }, [dataUpdate, data])
  
  const handleCreate = values => {
    setTaskToCreate(values)
  }
  
  const handleDelete = id => {
    setTaskToDelete(id)
    console.log(id);
  }
  const handleUpdate = id => {
    setDataUpdate(id)
    console.log(id);
  }

  const list = data.map(value => (
    <TodoContainer 
      task={value.task}
      key={value.id}
      student={value.student}
      id={value.id}
      isCompleted={value.isCompleted}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}      
    />
  ))
  return (
    <div className="App">
      <header className="App-header">
        {dataUpdate && (
          <TodoItem />
        )}
        {!dataUpdate && (
          <RegisterTask handleCreate={handleCreate}/>
        )}
        <h2>Task</h2>
        {list}
        
      </header>
    </div>
  );
}

export default App;
