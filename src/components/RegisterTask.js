import { useForm } from 'react-hook-form'

const RegisterTask = ({handleCreate}) => {
  const { handleSubmit, register, reset } = useForm()

  const onSubmit = values => {
    handleCreate(values)
    reset()
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit, e => {
        console.log(e)
      })}
    >
      <div>
        <label htmlFor='task'>Task</label>
        <input
          type='text'
          id='task'
          {...register('task', { required: true })}
        />
      </div>
      <div>
        <label htmlFor='student'>Student</label>
        <input
          type='text'
          id='student'
          {...register('student', { required: true })}
        />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default RegisterTask;
