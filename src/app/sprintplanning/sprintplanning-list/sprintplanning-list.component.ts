import { Component, OnInit } from '@angular/core';
import { Sprint } from '../../shared/sprint.model';
import { UserStory } from '../../shared/userstory.model';

@Component({
  selector: 'app-sprintplanning-list',
  templateUrl: './sprintplanning-list.component.html',
  styleUrls: ['./sprintplanning-list.component.css']
})
export class SprintplanningListComponent implements OnInit {

  userStories: UserStory[] = [];
  sprints : Sprint[] = [
    new Sprint('Sprint 1', 'Creating the DB',  this.userStories),
    new Sprint('Sprint 2', 'Creating the Design',  this.userStories)
  ];

  constructor() { }

  ngOnInit() {
  }

}
