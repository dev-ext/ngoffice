import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngf-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss', '../todo.scss']
})
export class TodoHomeComponent implements OnInit {
  public sidebarActive;

  constructor() { }

  ngOnInit() {
  }

}
