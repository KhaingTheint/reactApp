import React, { Component } from 'react';
class TodoItem extends Component {
	deleteTodos(id){
		this.props.onDelete(id);
	}
  render() {
    return (
    <ul>
      <li className="Todo">
      	<strong>{this.props.todo.title}</strong><a href="#" onClick={this.deleteTodos.bind(this,this.props.todo.id)}> X</a>
      </li>
    </ul>
    );
  }
}

export default TodoItem;
