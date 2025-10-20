/* import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoList2() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
        }
        else {
            alert("Task cannot be empty");
        }
        setNewTask("");
    }

    function deleteTask(index) {
        const updatedTasks = setTasks(t => t.filter((_, i) => i !== index));
        setTasks(updatedTasks);
    }


    return (
        <div>
            <div className="to-do-list">
                <h1>To-Do List</h1>
                <input type="text" value={newTask} onChange={handleInputChange} />
                <button className="button" onClick={addTask}>Add Task</button>
            </div>

            <div className="task-list">
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span clasName="task-text">{task}</span>
                            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>

    );

}



export default TodoList2; */