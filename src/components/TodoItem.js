
const TodoItem = ({data,key, handleUpdate}) => {
    console.log('access',key);
    // eslint-disable-next-line
    data.map(value => {
        if(value.id === key){
            return(
                <div style={{display: 'flex'}}>
                    
                    <h2>Task: {value.task}</h2>
                    <h5>Student: {value.student}</h5>
                    <label className="switch">
                        {value.isCompleted ? "Completed" : "Pending"}
                        <input type="checkbox" />
                        <button onChange={() => handleUpdate(value.id)}><span className="slider round"></span></button> 
                    </label>
                </div>
            );
        }
    })
}
export default TodoItem;