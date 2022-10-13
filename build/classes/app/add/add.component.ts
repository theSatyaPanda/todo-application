import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITaskTypeOption } from '../interface/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  taskForm!: FormGroup;
  typeOptions: Array<ITaskTypeOption> = [];
  router: any;

  constructor(private fb:FormBuilder, private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskForm= this.fb.group({
      title:['', Validators.required],
      dueDate:['', Validators.required],
      type:['', Validators.required],
      description:['', Validators.required],
      
    });
    this.typeOptions = this.taskService.getTypeOption();
  }

  addTask(){

    this.taskService.postTaskList(this.taskForm.value).subscribe((d)=>{
      console.log(d);
      this.router.navigateByUrl('/');
    },
    (error)=>{
      console.error(error);
    });
  }

}
