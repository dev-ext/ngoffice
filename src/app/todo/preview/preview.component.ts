import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngf-todo-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['../todo.scss']
})
export class PreviewComponent implements OnInit {
  public menuToggle;
  @Input() task;

  constructor() { }

  ngOnInit() {
  }

}
