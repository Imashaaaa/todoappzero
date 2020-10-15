import React from 'react';

const TodoComponet = ({todos}) => {

    return(
        todos.map(todo => {
            return(
                <div className="todo" key={todo.id}>
                    <div>Description:{todo.desc}</div>
                    <div>Time:{todo.time}</div>
                    <div>Id:{todo.id}</div>
                </div>
            )
        })
    )
}

export default TodoComponet;