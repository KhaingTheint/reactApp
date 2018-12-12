import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
class Todos extends Component {
	deleteTodos(id){
		this.props.onDelete(id);
	}
  	render() {
  		let todoItems;
		if(this.props.todos){
			todoItems = this.props.todos.map(todo => {
				return(
					<TodoItem onDelete = {this.deleteTodos.bind(this)} key ={todo.title} todo={todo}/>
				);
			});
		}	
	    return (
	      <div className="Todos">
	      	<h3>Todos Lists</h3>
	      	{todoItems}
	      </div>
	    );
  }
}
// Projects.propTypes ={
// 	projects:React.propTypes.array,
// 	onDelete:React.propTypes.func
// }
export default Todos;
