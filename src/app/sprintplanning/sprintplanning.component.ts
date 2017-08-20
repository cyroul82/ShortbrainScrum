import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sprint } from '../shared/sprint.model';

@Component({
  selector: 'app-sprintplanning',
  templateUrl: './sprintplanning.component.html',
  styleUrls: ['./sprintplanning.component.css']
})
export class SprintplanningComponent implements OnInit {
  @Output() sprintSelected = new EventEmitter<Sprint>();
  constructor() { }

  ngOnInit() {
  }

  onSprintSelected(sprint: Sprint){
    this.sprintSelected.emit(sprint);
  }

}
