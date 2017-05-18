import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngf-todo-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss', '../todo.scss']
})
export class EditComponent implements OnInit {
  @Input() task: any;
  constructor() { }

  ngOnInit() {
  }

}
