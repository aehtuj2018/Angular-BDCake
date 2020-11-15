import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[];
  constructor() { }

  ngOnInit(): void {
  }

}
