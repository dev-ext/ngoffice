import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['../../todo/todo.scss', './todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
  public listoptions;
  constructor() { }

  ngOnInit() {
  }

   viewMore(event: any) {
    event.stopPropagation();
    this.listoptions = !this.listoptions;
  }

}
