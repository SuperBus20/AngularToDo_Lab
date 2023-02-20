import { Component } from '@angular/core';
import { Todo } from './todo.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';

  todos: Todo[] = [
    { task: 'Feed Cats', completed: false },
    { task: 'Buy groceries', completed: false },
    { task: 'Clean Litter Box', completed: true },
    { task: 'Rake Leaves', completed: true }
  ];
  newTask: string = "";

  addTask() {
    if (this.newTask.trim().length === 0){
      return;
    }
    const newTodo: Todo = {
      task: this.newTask,
      completed: false
    };
    this.todos.push(newTodo);
    this.newTask = ""
  }
  completeTask(task: Todo) {
    task.completed = true;
  }
}
