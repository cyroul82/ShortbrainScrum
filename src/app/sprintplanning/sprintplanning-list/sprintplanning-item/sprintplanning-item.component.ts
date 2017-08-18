import { Component, OnInit, Input } from '@angular/core';
import { Sprint } from '../../../shared/sprint.model';


@Component({
  selector: 'app-sprintplanning-item',
  templateUrl: './sprintplanning-item.component.html',
  styleUrls: ['./sprintplanning-item.component.css']
})
export class SprintplanningItemComponent implements OnInit {
  @Input() sprint: Sprint;
  constructor() { }

  ngOnInit() {
  }

  onValidate(sprint) {
    let resp = confirm("Is this Sprint finished and validated by the Product Owner ?");
    if(resp){
      sprint.validate = true;
    }

  }

}
