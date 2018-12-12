import React, { Component } from 'react';
import uuid from 'uuid'
class AddTodo extends Component {
	constructor(){
		super();
		this.state = {
			newTodo:{}
		}
	}
	handleSubmit(e){
		if(this.refs.todo_title.value === ''){
			alert("Todo Title is required!");
		}else{
			this.setState({newTodo:{
				id:uuid.v4(),
				title: this.refs.todo_title.value
			}},function(){
				this.props.addTodo(this.state.newTodo);
				console.log(this.state.newTodo);
			});
		}
		e.preventDefault();

	}
  	render() {
	    return (
		    <div>
		      	<h3>Add Todo</h3>
		      	<form onSubmit = {this.handleSubmit.bind(this)}>
		      		<div>
		      			<label>Todo Title<br/></label>
		      			<input type="text" ref="todo_title"/>
		      		</div>
		      		<br/>
		      		<input type="submit" value="Add Todo"/>
		      		<br/>
		      	</form>
		    </div>
	    );
  }
}
export default AddTodo;
