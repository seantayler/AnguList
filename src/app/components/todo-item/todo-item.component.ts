import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)'}),
        animate(250, style({ opacity: 1, transform: 'translateY(0px)'}))
      ]),
      transition(':leave', [
        animate(250, style({ opacity: 0, transform: 'translateY(30px)'}))
      ])
    ])
  ]
})

export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  // @Output() checkedItem = new EventEmitter();
  // // @Output() blurredItem = new EventEmitter();
  // // @Output() enteredItem = new EventEmitter();
  // @Output() doubleClickedItem = new EventEmitter();
  // @Output() cancelledItem = new EventEmitter();
  // @Output() deletedItem = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // doneEdit(todo:Todo):void {
  //   this.checkedItem.emit(todo)
  // }

  // editTodo(todo:Todo):void {
  //   this.doubleClickedItem.emit(todo)
  // }

  // cancelEdit(todo:Todo):void {
  //   this.cancelledItem.emit(todo)
  // }

  // deleteTodo(todo:Todo):void {
  //   this.deletedItem.emit(todo)
  // }


}
