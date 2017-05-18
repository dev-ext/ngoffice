import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TaskService {
  private _tasks: FirebaseListObservable<any>;

  constructor(
   private  _afdb: AngularFireDatabase
  ) {
   this._tasks  = this._afdb.list('/tasks');
  }

  getAll() {
    return  this._tasks;
  }

  update(id, data) {
   return this._tasks.update(id, data);
  }

  remove(key) {
    return this._tasks.remove(key);
  }

}
