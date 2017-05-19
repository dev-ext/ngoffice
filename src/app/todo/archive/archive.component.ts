import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../shared/services/task.service';

@Component({
  selector: 'ngf-todo-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss', '../todo.scss']
})
export class ArchiveComponent implements OnInit {
  tasks: any;

  constructor(
    private _taskservice: TaskService
  ) { }

  ngOnInit() {
    const queryDone = {
      orderByChild: 'done',
      equalTo: true
    }
    this._taskservice.getQuery(queryDone)
      .subscribe(res => {
        this.tasks = res;
      });
  }

}
