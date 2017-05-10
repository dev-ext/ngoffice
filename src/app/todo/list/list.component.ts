import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss', '../todo.scss']
})
export class ListComponent implements OnInit {
public listoptions;

  constructor() { }

  ngOnInit() {
  }

}
