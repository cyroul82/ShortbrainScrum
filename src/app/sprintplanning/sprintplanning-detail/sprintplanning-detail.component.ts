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
    const userStoryId = event.dataTransfer.getData("text");
    let target = event.target;
    console.log("dans drop: " + event.target);

    // go up till the parent div listUserStory
    while(target.className !== 'listUserStory'){
      target = target.parentNode;
    }

    //Select the div cards
    target = target.querySelector('.cards');
    console.log(target);
    this.sprint.userStories.push(new UserStory("insert", "desc", 85, 10));
    target.appendChild(document.getElementById(userStoryId));
    target.removeChild(document.getElementById(userStoryId));
  }

  allowDrop(event) {
    event.preventDefault();
}


}
