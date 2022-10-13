import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../interface/task.interface';
import { TaskService } from '../services/task.service';
import {MatDialog} from'@angular/material/dialog';
import { ShowComponent } from '../show/show.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks: Observable<Array<ITask>> | undefined;
  refreshEmitter: any;
  constructor(private taskService: TaskService, public dialog: MatDialog){}


  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(){
    this.tasks=this.taskService.getTaskList();
  }
  openDialog(task:ITask){
    
    const dialogRef = this.dialog.open(ShowComponent, {
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTasks();
      this.refreshEmitter.emit(true);
    });
  }
}
