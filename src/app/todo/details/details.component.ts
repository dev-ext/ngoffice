import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss', '../todo.scss']
})
export class DetailsComponent implements OnInit {
  public editmode = true;

  constructor() { }

  ngOnInit() {
  }

}
