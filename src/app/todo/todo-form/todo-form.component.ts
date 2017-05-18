import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'ngf-todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent implements OnInit {
  @Input() key: string;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();

  taskForm: FormGroup;
  message: string;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    private _taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      info: ['']
    });
  }

  update(values, valid) {
    if (valid) {
      this._taskService.update(this.key, values);
      this.onUpdate.emit(this.key);
    }
  }

}
