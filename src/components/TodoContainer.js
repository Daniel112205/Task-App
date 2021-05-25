import React from 'react';

const TodoContainer = ({task, student, id, handleDelete, handleUpdate, isCompleted}) => {
    return (
        <div style={{display: 'flex'}}>
            <h5>{task}</h5>
            <h5>{student}</h5>
            <h5>{isCompleted ? 'Completed' : 'Pending'}</h5>
            <button onClick={() => handleDelete(id)}>delete</button>
            <button onClick={() => handleUpdate(id)}>update</button>
        </div>
    )
}
export default TodoContainer;