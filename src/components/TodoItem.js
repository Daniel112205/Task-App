
const TodoItem = ({id,task, student, isCompleted, handleUpdate}) => {
    return(
        <div style={{display: 'flex'}}>
            
            <h2>Task: {task}</h2>
            <h5>Student: {student}</h5>
            <label className="switch">
                {isCompleted}
                <input type="checkbox" />
                <button onClick={() => handleUpdate(id)}><span className="slider round"></span></button> 
            </label>
        </div>
    );
}
export default TodoItem;