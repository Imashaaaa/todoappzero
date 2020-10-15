import React from 'react';

const TodoComponet = ({todos, deleteTodo}) => {

    return(
        todos.map(todo => {
            return(
                <div className="todo" key={todo.id}>
                    <div>Description:{todo.desc}</div>
                    <div>Time:{todo.time}</div>
                    <div>Id:{todo.id}</div>
                    <button onClick= {() => {deleteTodo(todo.id)}}>Delete</button>
                </div>
            )
        })
    )
}

export default TodoComponet;