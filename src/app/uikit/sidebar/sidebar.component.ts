import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngf-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  @Input() authstate: boolean;
  @Output() onSignOut: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  signOut() {
    this.onSignOut.emit(true);
  }

}
