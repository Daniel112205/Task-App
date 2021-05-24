import axios from 'axios'

const baseUrl = 'https://todos-go.herokuapp.com/api/todos';

const create = newTask => {
  const promise = axios({
    method: 'POST',
    url: `${baseUrl}`,
    data: newTask
  })

  return promise
}

export default create
