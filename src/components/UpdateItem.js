
const UpdateItem = ({ handleUpdate, task, id, isCompleted, student }) => {
	return (
        <div>
            <div>
            <h2>Update</h2>
            <h5>Task: {task}</h5>
            <h5>Student: {student}</h5>
            <label className="switch">
                <input type="checkbox" />
                <span onChange={() => handleUpdate(id)} className="slider round"></span>
                <h6>{isCompleted ? "Completed" : "Pending"}</h6>
            </label>
            </div>
        </div>
	);
};

export default UpdateItem;
