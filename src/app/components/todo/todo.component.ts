import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor() { }


  ngOnInit(): void {
    // this.todos = [
    //   {
    //     content: "First Todo",
    //     completed: false,
    //   },
    //   {
    //     content: "Second  Todo",
    //     completed: true,
    //   }
    // ]

  }

  toggleDone(id: Number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
    })
  }

  deleteTask(id: any) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo(data: any) {
    if (data.todo && data.todo.length > 0) {
      this.todos.push({
        content: data.todo,
        completed: false,
      })
    } else {
      alert("Please fill the text")
    }

  }
}
