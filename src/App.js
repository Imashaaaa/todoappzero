import React, { Component } from 'react';
import './App.css';
import TodoComponent from './TodoComponent.js'


class App extends Component{

  state = {
    todos: [
      {desc: 'eat', time: 'always', id: 1 },
      {desc: 'sleep', time: 'night', id: 2 },
      {desc: 'code', time: 'never', id: 3}
      
    ]
      
  }

  deleteTodo = (id) => {
    let newTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Technocrats</h1>
          <TodoComponent todos={this.state.todos} deleteTodo={ this.deleteTodo }/>
      </div>
    )
  }  

}

export default App;
