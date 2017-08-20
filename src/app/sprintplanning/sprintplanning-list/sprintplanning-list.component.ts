import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sprint } from '../../shared/sprint.model';
import { UserStory } from '../../shared/userstory.model';

@Component({
  selector: 'app-sprintplanning-list',
  templateUrl: './sprintplanning-list.component.html',
  styleUrls: ['./sprintplanning-list.component.css']
})
export class SprintplanningListComponent implements OnInit {
  @Output() sprintSelected = new EventEmitter<Sprint>();
  userStories: UserStory[] = [ new UserStory('test', 'description', 45, 5), new UserStory('test2', 'description2', 110, 3)];
  userStories2: UserStory[] = [ new UserStory('tedfqsdfst', 'qsdfq', 30, 6), new UserStory('teqsdfqst2', 'fqsd', 80, 4)];
  sprints : Sprint[] = [
    new Sprint('Sprint 1', 'Creating the DB',  this.userStories, 1),
    new Sprint('Sprint 2', 'Creating the Design',  this.userStories2, 2)
  ];

  constructor() { }

  ngOnInit() {
  }

  onSprintClick(sprint) {
    this.sprintSelected.emit(sprint);
  }

}
