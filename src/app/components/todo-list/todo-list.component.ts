import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:object[];
  todoTitle:string;
  todoId:number = 2;

  constructor() { }

  ngOnInit() {
    this.todoTitle = '';
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

}
