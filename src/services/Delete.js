import axios from 'axios'
const baseUrl = 'https://todos-go.herokuapp.com/api/todos';

const Delete = id => {
  const promise = axios({
    method: 'DELETE',
    url: `${baseUrl}/${id}`,
  })
  return promise;
}

export default Delete
