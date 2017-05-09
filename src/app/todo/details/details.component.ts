
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-todo-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss', '../todo.scss']
})
export class DetailsComponent implements OnInit {

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

  }

}
