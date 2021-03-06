import axios from 'axios'

const baseUrl = 'https://todos-go.herokuapp.com/api/todos';

const Create = newTask => {
  const promise = axios({
    method: 'POST',
    url: `${baseUrl}`,
    data: newTask
  });

  return promise;
}

export default Create;
