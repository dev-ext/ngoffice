import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../shared/services/task.service';

@Component({
  selector: 'ngf-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['../../todo/todo.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() task: any;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  public listoptions;

  constructor(
    private _taskservice: TaskService
  ) { }

  ngOnInit() {
  }


   delete(task) {
     this._taskservice.remove(task.$key)
       .then(res => {
         this.onDelete.emit(task.title);
       })
       .catch((error) => {
         console.log(error);
       });
   }

   markasDone(key, status) {
     const doneData = {
       done: status
     };

     this._taskservice.update(key, doneData);
   };

}
