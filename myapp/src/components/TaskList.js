import React from 'react'

const TaskList = ({title, description, deleteTask, index}) => {
    
  return (
    <div className='task-gap'>
      <ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Title: {title}</div>
      Description: {description}
    </div>
 
<button className="btn btn-danger rounded-pill btn-sm" type="submit" onClick={() => deleteTask(index)}>Delete Task</button>
  
  </li>
  </ul>
    </div>
  )
}

export default TaskList
