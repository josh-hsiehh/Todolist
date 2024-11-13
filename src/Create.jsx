import React, { useState } from 'react'
import axios from 'axios'

function Create({ onTaskAdd }) {
  const[task, setTask] = useState("")
  
  const handleAdd = () => {
    if (!task) return;
    axios.post("http://localhost:3001/add", {task: task})
      .then(result => {
        console.log(result);
        setTask(""); // Clear input
        onTaskAdd(); // Notify parent component
      })
      .catch(err => console.log(err))
  }
  
  return (
    <div className="create_form">
        <input type="text" 
          value={task}
          placeholder='Enter Task' 
          onChange={(e) => setTask(e.target.value)}/>
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create