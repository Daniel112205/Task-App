import { useEffect, useState } from "react";
import UpdateItem from "./UpdateItem";

const TodoItem = ({data, handleUpdate}) => {
    const [dataValue, setDataValue] = useState(data);
    useEffect(()=> {
        if (data) {
            setDataValue(data);
            console.log('success',dataValue);
        }
    },[data, dataValue])
    const list = dataValue.map(value => (
        <UpdateItem
          task={value.task}
          key={value.id}
          student={value.student}
          id={value.id}
          isCompleted={value.isCompleted}
          handleUpdate={handleUpdate}      
        />
      ))
    return(
        <div style={{display: 'flex'}}>
            {list}
        </div>
    );
}
export default TodoItem;