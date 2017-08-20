import { Component, OnInit, Input } from '@angular/core';
import { Sprint } from '../../shared/sprint.model';
import { UserStory } from '../../shared/userstory.model';

@Component({
  selector: 'app-sprintplanning-detail',
  templateUrl: './sprintplanning-detail.component.html',
  styleUrls: ['./sprintplanning-detail.component.css']
})
export class SprintplanningDetailComponent implements OnInit {
  @Input() sprint: Sprint;
  userStory: UserStory;
  constructor() { }

  ngOnInit() {

  }

  getTotalBusinessValue(userStories: UserStory[]): number {
    let total: number = 0;
    for(let i=0 ; i < userStories.length ; i++){
      let userStory: UserStory = userStories[i];
      total += userStory.businessValue;
    }
    return total;
  }

  drop(event) {
    event.preventDefault();
    this.userStory = event.dataTransfer.getData("userStory");
    console.log(this.userStory.name);
    //event.target.appendChild(document.getElementById(data));
  }

  allowDrop(event) {
    event.preventDefault();
}


}
