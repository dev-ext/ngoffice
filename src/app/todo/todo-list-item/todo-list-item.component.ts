import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngf-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['../../todo/todo.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() task: any;
  public listoptions;

  constructor() { }

  ngOnInit() {
  }

   viewMore(event: any) {
    event.stopPropagation();
    this.listoptions = !this.listoptions;
  }

}
