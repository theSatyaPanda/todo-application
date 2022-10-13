import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import {ITask, ITaskTypeOption} from '../interface/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  updateTask: any;
  deleteTask: any;
  getTaskById: any;
  getTypeOptions: any;

  constructor(private httpclient: HttpClient) { }

  getTaskList(): Observable<ITask[]>{
    return this.httpclient
      .get<ITask[]>('http://localhost:8080/api/v1/task')      .pipe(map((d: Array<ITask>) => d ));

  }
  postTaskList(task:ITask): Observable<ITask>{
    return this.httpclient
      .post<ITask>('http://localhost:8080/api/v1/task', task)      .pipe(map((d: ITask) => d ));

  }
  getTypeOption():Array<ITaskTypeOption>{
    return[{type:'done'}, {type:'todo'}, {type:'pending'}];
  }
}
