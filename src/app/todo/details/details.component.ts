
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../environments/environment';
import { TaskService } from '../../shared/services/task.service';

@Component({
  selector: 'ngf-todo-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss', '../todo.scss']
})
export class DetailsComponent implements OnInit {
  public task: any;
  public mode;
  private subParams;
  private subQuery: any;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private _taskservice: TaskService
  ) { }

  ngOnInit() {
   this.subParams = this.route.params.subscribe(params => {
     if (environment.debug) {
       console.log('params', params);
     }
     this.id = params.id;
     if ( this.id !== 'untitled') {
       this.task = this._taskservice.getbyId(this.id);
     }
   });

   this.subQuery = this.route.queryParams.subscribe(query => {
    if (environment.debug) {
      console.log('query', query);
    }
    this.mode = query['mode'];
   });

  }

}
