import React from 'react';
import { Card, Container } from  'react-bootstrap';

const TodoComponet = ({todos, deleteTodo}) => {

    return(
        todos.map(todo => {
            return(
                    <div className="todo" className="card list-group list-group-horizontal-lg col-md-6" style={{margin: 'auto'}} key={todo.id}>
                        <div style={{float: 'left', border: 'none'}} className="list-group-item col-md-6">Description:{todo.desc}</div>
                        <div style={{float: 'left', border: 'none'}} className="list-group-item col-md-2">Time:{todo.time}</div>
                        <div style={{float: 'left', border: 'none'}} className="list-group-item col-md-2">Id:{todo.id} </div>
                        <button className="btn btn-primary col-md-1" style={{margin: '3px'}}  onClick= {() => {deleteTodo(todo.id)}}>Delete</button>
                        <button className="btn btn-success col-md-1" style={{margin: '3px'}}  >Done</button>
                    </div>  
            )
        })
    )
}

export default TodoComponet;