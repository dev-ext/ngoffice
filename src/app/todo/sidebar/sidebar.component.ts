import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() onCloseSidebar: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeSidebar() {
    this.onCloseSidebar.emit(true);
  }

}
