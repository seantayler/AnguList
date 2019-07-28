import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[];
  todoTitle:string = '';
  todoId:number = 2;
  beforeEditCache:string = ''; 

  constructor() { }

  ngOnInit() {
    this.todos = [{
      'id': 1,
      'title': 'finish todo app',
      'completed': false,
      'editing': false
    }]
  }

  addTodo():void {
    if(!this.todoTitle.trim().length){
      return; 
    }
    this.todos.push({
      id: this.todoId,  
      title: this.todoTitle,
      completed: false,
      editing: false
    })
    this.todoTitle = ''
    this.todoId++; 
  }

  deleteTodo(id:number):void {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  editTodo(todo:Todo):void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo:Todo):void {
    if(todo.title.trim().length === 0){
      todo.title = this.beforeEditCache;
    }
    todo.editing = false; 
  }

  cancelEdit(todo:Todo):void {
    todo.title = this.beforeEditCache;
    todo.editing = false; 
  }

  remaining():number {
    return this.todos.filter(todo => !todo.completed).length
  }

  atLeastOneCompleted():boolean {
    return this.todos.filter(todo => todo.completed).length > 0
  }

  clearCompleted():void {
    this.todos = this.todos.filter(todo => !todo.completed)
  }

  checkAllTodos():void {
    if(this.todos.filter(todo => !todo.completed).length > 0){
      this.todos.forEach(todo => todo.completed = true)
    } else if(this.todos.filter(todo => !todo.completed).length === 0){
      this.todos.forEach(todo => todo.completed = false)
    }
  }

}
