
import React, {useState, useEffect} from 'react'
import TaskList from './TaskList';

const TaskForm = () => {

    const initialState = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
    const [tasks, setTasks] = useState(initialState);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log([...tasks, {title, description}])
        setTasks([...tasks, {title,description}])
        // localStorage.setItem('tasks', JSON.stringify(tasks))
        setTitle('')
        setDescription('')
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

   const deleteTaskHandler =(index) => {
    const filteredArr = tasks.filter((val, i) => {
        return i!== index
    })
    console.log(filteredArr)
    setTasks(filteredArr)
   }

  return (
    <div className='task-form'>
<h2 className='task'>Daily Goals</h2>
<form className="form-floating" onSubmit={submitHandler}>

<div className="mb-3">
  <label  className="form-label">Title</label>
  <input type="text" className="form-control" placeholder="enter title" value={title} onChange={titleChangeHandler} />
</div>

<div className="mb-3">
  <label  className="form-label">Description</label>
  <textarea className="form-control" placeholder='enter description' rows="3" value={description} onChange={descriptionChangeHandler}></textarea>
</div>

<div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>

</form>
{tasks.length===0 && <h3 style={{color: 'red', margin: '10px'}}>No Task Found</h3>}
{tasks.map((item, index) => (
    <TaskList key={index} title={item.title} description={item.description} deleteTask={deleteTaskHandler} index={index}/>
))}
    </div>
  )
}

export default TaskForm
