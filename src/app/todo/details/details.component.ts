<<<<<<< refs/remotes/origin/master
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
>>>>>>> details view navigation added

@Component({
  selector: 'app-todo-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss', '../todo.scss']
})
export class DetailsComponent implements OnInit {
<<<<<<< refs/remotes/origin/master
  public mode = true;
  public params: any;

  constructor(
    private _acroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._acroute.queryParams.subscribe(query => {
      this.mode = query.mode;
    });
    this._acroute.params.subscribe(params => {
      console.log(params);
    });
=======
  public mode;
  private subParams;
  private subQuery: any;
  id;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
   this.subParams = this.route.params.subscribe(params => {
     if (environment.debug) {
       console.log('params', params);
     }
     this.id = params;
   });

   this.subQuery = this.route.queryParams.subscribe(query => {
    if (environment.debug) {
      console.log('query', query);
    } 
    this.mode = query['mode'];
   });

>>>>>>> details view navigation added
  }

}
