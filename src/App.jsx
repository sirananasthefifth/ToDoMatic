import './App.css';
import React, { useState } from 'react';


function Title() {
  return (
    <div>
      <h1 class="title">ToDo Matic</h1>
      <h2>What needs to be done?</h2>
    </div>
  )
}

function Filters() {
  return (
    <div class="row">
      <button class="filter-button">All</button>
      <button class="filter-button">Active</button>
      <button class="filter-button">Completed</button>
    </div>
  )
}

function AddTask(props) {
  let [newTask, setNewTask] = useState("")
  function handler(oldArray) {
    
    let oldArrayCopy = [...oldArray];

    oldArrayCopy.push(newTask);
    

    return oldArrayCopy;
  }

  

  return (
    <div>
      <div class="column add-task">
        <input
          type="text" 
          class="text-input" 
          name="newTask"
          onChange={(e) => { 
            console.log(e.target.value);
            setNewTask(e.target.value);
            console.log(newTask);
          }}
          ></input>
        <button class="add-button"
        onClick={() => props.changeTasks(handler)}>Add</button>
      </div>
    </div>
  )
}

function Task(props) {
  return (
    <li>
      <div class="row">
        <input type="checkbox" class="checkbox"></input>
        <p class="task-text">{props.title}</p>
      </div>
      <button class="task-button edit-button">Edit</button>
      <button class="task-button delete-button">Delete</button>
    </li>
  )
}

function TaskList(props) {
  return (
    <div>
      <h2>{props.children.length} tasks remaining</h2>
      <ul>
        {props.children}
      </ul>
    </div>
  )
}

function App() {
  let initialTasks = ["Eat", "Sleep"];
  const [tasks, changeTasks] = useState(initialTasks);


  return (
    <div class="content">
      <Title />

      <AddTask tasks={tasks} changeTasks={changeTasks}/>

      <Filters />

      <TaskList>
        {
          tasks.map(
            function(task) {
              return <Task title={task} />
            }
          )
        }
          
      </TaskList>

    </div>
  );
}

export default App;
