import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import shortid from 'shortid';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../shared/services/task.service';

@Component({
  selector: 'ngf-todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent implements OnInit {
  @Input() task: any;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @Input() mode: string;
  key: string;
  taskForm: FormGroup;
  message: string;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      info: [''],
      done: false
    });
    console.log(this.mode);

    if (this.mode === 'add') {
      this.key = shortid.generate();
    } else {
      this.task.subscribe(res => {
        this.taskForm.setValue(res);
        this.key = res.$key;
      })
    }

  }

  update(values, valid) {
    console.log(values, this.key)
    if (valid) {
      this._taskService.update(this.key, values)
        .then(() => {
          if (this.mode === 'add') {
            this._router.navigate([`todo/${this.key}`]);
          }
        });
      this.onUpdate.emit(this.key);
    }
  }

}
