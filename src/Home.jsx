import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Create from './Create'

const Home = () => {
    const[todos, setTodos] = useState([])

    const fetchTodos = () => {
        axios.get("http://localhost:3001/get")
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <div className="home">
            <h2>Todo List</h2>
            <Create onTaskAdd={fetchTodos} />
            {
                todos.length === 0 
                ?
                <div>No Record</div>
                :
                todos.map(todo => (
                    <div key={todo._id}>
                        {todo.task}
                    </div>
                ))
            }
        </div>
    )
}


export default Home
