import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css'

const AddTask = ({ addTask }) => {

    const [value, updateValue] = useState("");

    const handleSumbit = e => {


        e.preventDefault();

        if (value !== "") {

            addTask(value);
            updateValue("");

        }

    }

    return (

        <form onSubmit={handleSumbit}>
            <input

                type="text"
                value={value}
                placeholder="Enter your task to do"
                onChange={e => updateValue(e.target.value)}
            >

            </input>

            <button type="submit"><i class="material-icons">add</i></button>

        </form>

    );

};


const TodoList = () => {

    const addTask = text => updateTask([...tasks, { text }]);
    const [tasks, updateTask] = useState([])


    const toggleTask = (index) => {

        const newTask = [...tasks];

        if (newTask[index].isCompleted) {

            newTask[index].isCompleted = false;

        }
        else {

            newTask[index].isCompleted = true;

        }
        updateTask(newTask);

    }

    const removeTask = (index) => {

        const newTask = [...tasks];

        newTask.splice(index, 1);

        updateTask(newTask);

    }


    return (


        <div className="list-of-tasks-todo" >

            {tasks.map((task, index) => (

                <div className='task-status'>

                    <span onClick={() => toggleTask(index)} className={task.isCompleted ? "completed-task task-name" : "task-name"}>

                        {index}
                        {task.text}

                    </span>

                    <button><i class='material-icons' onClick={() => removeTask(index)}>delete</i></button>

                </div>

            ))}

            <AddTask addTask={addTask} />
        </div>

    );

}

ReactDOM.render(< TodoList />, document.getElementById('root'));