import axios from "axios";

const baseUrl = 'https://todos-go.herokuapp.com/api/todos';

const Read = () => {
    const promise = axios.get(`${baseUrl}`);
    return promise;
}
export default Read;