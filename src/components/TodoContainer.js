import React from 'react';

const TodoContainer = ({task, student, id, handleDelete, handleUpdate, isCompleted}) => {
    return (
        <div style={{display: 'flex'}} className="container">
            <table id="t01">
            <tr>
            <th>Task</th>
            <th>Student</th> 
            <th>ToDo</th>
            <th>Actions</th>
        </tr>
                <tr>
                  <td>{task}</td>
                  <td>{student}</td>
                  <td>{isCompleted ? 'Completed' : 'Pending'}</td>
                  <td>
                        <button onClick={() => handleDelete(id)}>delete</button>
                        <button onClick={() => handleUpdate(id)}>update</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default TodoContainer;