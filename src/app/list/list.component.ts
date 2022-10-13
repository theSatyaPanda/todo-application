import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../interface/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks: Observable<Array<ITask>> | undefined;
  constructor(private taskService: TaskService){}


  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(){
    this.tasks=this.taskService.getTaskList();
  }

}
