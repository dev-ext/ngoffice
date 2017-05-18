import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngf-todo-create',
  templateUrl: './create.component.html',
  styleUrls: ['../todo.scss']
})
export class CreateComponent implements OnInit {
  

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  redirect(event) {
    this._router.navigate(['todo', event])
  }

}
