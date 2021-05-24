import React from 'react';
import { useEffect, useState } from "react";

const TodoContainer = () => {
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