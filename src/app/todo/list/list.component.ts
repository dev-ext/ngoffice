import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'ngf-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss', '../todo.scss']
})
export class ListComponent implements OnInit {
public listoptions;
  public todolist: any;

  constructor(
    private _taskservice: TaskService
  ) { }

  ngOnInit() {
   this._taskservice.getAll().subscribe(tasks => {
     this.todolist = tasks;
   })
  }

}
