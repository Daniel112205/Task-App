import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";

const baseUrl = 'https://todos-go.herokuapp.com/api/todos';

const TodoContainer = () => {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        axios.get(`${baseUrl}`)
        .then(function (response){
            setData(response.data.todos);            
        })
    },[]);
    const list = data.map(value => {
        return (
            <>
            <h5 key={value.id}>
                {value.task}--
                {value.student}
            </h5>
            </>
        )
    })
    return (
        <div>
            <h2>Taks</h2>
            {list}
        </div>
    )
}
export default TodoContainer;