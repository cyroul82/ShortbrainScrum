import { Component, OnInit } from '@angular/core';
import { Sprint } from '../shared/sprint.model';

@Component({
  selector: 'app-productbacklog',
  templateUrl: './productbacklog.component.html',
  styleUrls: ['./productbacklog.component.css']
})
export class ProductbacklogComponent implements OnInit {
  sprint: Sprint;
  constructor() { }

  ngOnInit() {
  }

  onSprintSelected(sprint: Sprint){
    this.sprint = sprint;
    console.log("onSprintSelected : " + sprint.name);
  }

}
