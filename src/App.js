import './App.css';
import TodoContainer from './components/TodoContainer';
import RegisterTask from './components/TodoContainer';
import Create from './services/Create'
import React from 'react';
import { useEffect, useState } from "react";
function App() {
  const [taskToCreate, setTaskToCreate] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    if (taskToCreate) {
      setIsLoading(true)
      Create(taskToCreate).then(
        res => {
          setData(prev => [res.data, ...prev])
          setIsLoading(false)
        },
        err => {
          console.error(err)
          setIsLoading(false)
        }
      )
    }
  }, [taskToCreate])
  
  const handleCreate = values => {
    setTaskToCreate(values)
  }
  return (
    <div className="App">
      <header className="App-header">
        <RegisterTask handleCreate={handleCreate} />
        {/* <TodoContainer/> */}
      </header>
    </div>
  );
}

export default App;
