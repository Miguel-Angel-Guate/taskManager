import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router, ActivationEnd, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.scss']
})
export class TaskviewComponent implements OnInit {

  lists: any[];
  tasks: any[];
  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        console.log(params)
        this.taskService.getTasks(params.listId).subscribe((tasks: any[]) =>{
          this.tasks = tasks;

        })
      }
    )
    this.taskService.getLists().subscribe((lists: any[])  => {
      this.lists = lists;
    })
  }

}
