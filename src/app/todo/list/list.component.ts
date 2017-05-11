import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngf-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss', '../todo.scss']
})
export class ListComponent implements OnInit {
public listoptions;

  constructor() { }

  ngOnInit() {
  }

}
