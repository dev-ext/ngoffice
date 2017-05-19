import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../shared/services/task.service';

@Component({
  selector: 'ngf-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss', '../todo.scss']
})
export class ListComponent implements OnInit {
  public listoptions;
  public todolist: any;
  public deleteMsg: string;

  constructor(
    private _taskservice: TaskService
  ) { }

  ngOnInit() {
    const query = {
      orderByChild: 'done',
      equalTo: false
    };
   this._taskservice.getQuery(query).subscribe(tasks => {
     console.log(tasks);
     this.todolist = tasks;
   })
  }

  showDeleteMsg(data) {
    this.deleteMsg = `${data.title}`;
    setTimeout(() => {
      this.deleteMsg = null;
    })
  }

}
