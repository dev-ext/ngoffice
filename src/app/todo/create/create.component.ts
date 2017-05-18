import { Component, OnInit } from '@angular/core';
import shortid from 'shortid';
import { Router } from '@angular/router';

@Component({
  selector: 'ngf-todo-create',
  templateUrl: './create.component.html',
  styleUrls: ['../todo.scss']
})
export class CreateComponent implements OnInit {
  id: string = shortid.generate();

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  redirect(event) {
    console.log(event)
    this._router.navigate(['todo', event])
  }

}
