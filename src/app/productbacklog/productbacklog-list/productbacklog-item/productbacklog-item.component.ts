import { Component, OnInit, Input } from '@angular/core';
import { UserStory } from '../../../shared/userstory.model';

@Component({
  selector: 'app-productbacklog-item',
  templateUrl: './productbacklog-item.component.html',
  styleUrls: ['./productbacklog-item.component.css']
})
export class ProductbacklogItemComponent implements OnInit {
  @Input() userStory: UserStory;
  constructor() { }

  ngOnInit() {
  }

  dragStart(ev, userStory: UserStory) {
    ev.dataTransfer.setData("userStory", userStory);
    console.log("event : " + userStory);
  }

}
