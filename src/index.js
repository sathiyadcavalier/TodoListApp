import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


const AddTask = ({ addTask }) => {

    const [value, addValue] = useState("");

    const handleSubmit = e => {

        e.preventDefault();

        if (value !== "") {

            addTask(value);
            addValue("");


        }


    }

    return (




        <form onSubmit={handleSubmit} class="taskForm">

            <input
                type="text"
                value={value}
                placeholder="Enter you list to do"
                onChange={e => addValue(e.target.value)}
            ></input>

            <button type="submit"><span className='material-icons'>add</span></button>

        </form>



    );



};


const TodoList = () => {

    const addTask = text => updateTask([...tasks, { text }]);

    const [tasks, updateTask] = useState([

        { text: "Learn React Js", isCompleted: false },
        { text: "Learn Node Js", isCompleted: false }

    ]);

    const toggleUpdate = (index) => {

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

        const newTask = [...tasks]

        newTask.splice(index, 1);

        updateTask(newTask);

    }


    return (

        <div class="container">

            {tasks.map((task, index) => (

                <div className="tasks">

                    <span onClick={() => toggleUpdate(index)} className={task.isCompleted ? "task-pointer completed-task" : "task-pointer"}>

                        {index}
                        {task.text}

                    </span>

                    <button onClick={() => removeTask(index)}><span className='material-icons'>delete</span></button>

                </div>



            ))}

            <AddTask addTask={addTask} />

        </div>


    );

}

ReactDOM.render(<TodoList />, document.getElementById('root'));

