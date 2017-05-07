import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss', '../todo.scss']
})
export class DetailsComponent implements OnInit {
  public mode = true;

  constructor(
    private _acroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._acroute.queryParams.subscribe(params => {
      this.mode = params.mode;
    });
  }

}
