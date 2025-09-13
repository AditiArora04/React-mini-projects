import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos, setTodos] = useState([{task: "sleep", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    // let upperCaseAll = () => {
    //     setTodos((prevTodos) => (
    //         prevTodos.map((todo) => {
    //             return {
    //                 ...todo, task: todo.task.toUpperCase(),
    //             };
    //         })
    //     ));
    // };

    // let upperCaseOne = (id) => {
    //     setTodos((prevTodos) => (
    //         prevTodos.map((todo) => {
    //             if(todo.id == id) {
    //                 return {
    //                     ...todo, task: todo.task.toUpperCase(),
    //                 };
    //             } else{
    //                 return todo;
    //             }
    //         })
    //     ));
    // };

    let markAllDone = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo, isDone: true,
                };
            })
        ));
    };


    let markAsDone= (id) => {
            setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else{
                    return todo;
                }
            })
        ));
    }; 

    return(
        <div>
            <h1>Todo List</h1> <br /><br /><br />
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}/> &nbsp; &nbsp;
            <button onClick={addNewTask}>Add Task</button> <br /><br /><br />
            <hr />
            <h4>Tasks to do:</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}> 
                            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {} } >{todo.task}</span> &nbsp; &nbsp;&nbsp; &nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button> &nbsp; &nbsp;
                            <button onClick={() => markAsDone(todo.id)}> Mark as done </button> 
                        </li>
                    ))
                }
            </ul>
            <button onClick={markAllDone}>Mark All Done</button>
        </div>
    );
}