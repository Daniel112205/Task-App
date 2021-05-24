import React from 'react';

const TodoContainer = ({task, student}) => {
    return (
        <div>
            <h5>{task}</h5>
            <h5>{student}</h5>
        </div>
    )
}
export default TodoContainer;