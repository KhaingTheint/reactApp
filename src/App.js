import React, { Component } from 'react';
import uuid from 'uuid'
import $ from 'jquery'
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      projects : [],
      todos: []
    }
  }
  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataTypes: 'json',
      cache : false,
      success: function(data){
          this.setState({todos : data},function(){
          // console.log(this.state);
        });
      }.bind(this),
      error: function(xhr , status, err){
        console.log(err);
      }
    });
  }
  getProjects(){
    this.setState({projects:
      [
        {
          id:uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id:uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id:uuid.v4(),
          title: 'Ecommance Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }
  componentDidMount(){
    this.getTodos();
  }
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }
  handleAddTodo(todo){
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todos:todos});
  }
  handleTodosDelete(id){
      let todos = this.state.todos;
      let index = todos.findIndex(x => x.id === id);
      todos.splice(index,1);
      this.setState({todos:todos});
  }
  render() {
  return (
    <div className="App">
      <AddProject addProject ={this.handleAddProject.bind(this)}/>
      <Projects projects = {this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      <hr/>
      <AddTodo addTodo = {this.handleAddTodo.bind(this)}/>
      <Todos onDelete = {this.handleTodosDelete.bind(this)} todos = {this.state.todos}/>
    </div>
  );
  }
}

export default App;