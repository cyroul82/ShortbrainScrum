import { Component, OnInit } from '@angular/core';
import { UserStory } from '../../shared/userstory.model';

@Component({
  selector: 'app-productbacklog-list',
  templateUrl: './productbacklog-list.component.html',
  styleUrls: ['./productbacklog-list.component.css']
})
export class ProductbacklogListComponent implements OnInit {
  userStories: UserStory[] = [
    new UserStory('User Connexion', 'A user is able to connect to the app', 100),
    new UserStory('Add article', 'A user is able to add an article', 90)
  ];
  constructor() { }

  ngOnInit() {
  }

}
