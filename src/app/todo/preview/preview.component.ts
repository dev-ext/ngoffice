import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['../todo.scss']
})
export class PreviewComponent implements OnInit {
  public menuToggle;

  constructor() { }

  ngOnInit() {
  }

}
