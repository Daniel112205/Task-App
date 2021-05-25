import axios from 'axios';
const baseUrl = 'https://todos-go.herokuapp.com/api/todos';

const Update = (id, data) => {
  const promise = axios({
    method: 'PUT',
    url: `${baseUrl}/${id}`,
    data: data
  })

  return promise
}
export default Update;