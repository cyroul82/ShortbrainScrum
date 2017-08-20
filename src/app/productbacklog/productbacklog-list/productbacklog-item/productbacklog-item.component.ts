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

  dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("event : " +  ev.target.id);
  }

}
