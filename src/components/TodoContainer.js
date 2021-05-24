import React from 'react';

const TodoContainer = ({task, student, id, handleDelete, handleUpdate}) => {
    return (
        <div>
            <h5>{task}</h5>
            <h5>{student}</h5>
            <button onClick={() => handleDelete(id)}>delete</button>
            <button onClick={() => handleUpdate(id)}>update</button>
        </div>
    )
}
export default TodoContainer;