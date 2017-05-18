import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TaskService {
  private _listName = 'tasks';
  private _tasks: FirebaseListObservable<any>;

  constructor(
   private  _afdb: AngularFireDatabase
  ) {
   this._tasks  = this._afdb.list(`/${this._listName}`);
  }

  getAll() {
    return  this._tasks;
  }

  getbyId(key) {
    return this._afdb.object(`${this._listName}/${key}`);
  }

  update(id, data) {
   return this._tasks.update(id, data);
  }

  remove(key) {
    console.log(key)
    return this._tasks.remove(key);
  }

}
