import { UserStory } from './userstory.model';

export class Sprint {
    public name: string;
    public description: string;
    public userStories: UserStory[];
    public isValidated: boolean;
    public id: number = 0;

    constructor(name: string, description: string, userStories: UserStory[], id:number) {
      this.name = name;
      this.description = description;
      this.userStories = userStories;
      this.id = id;
      this.isValidated = false;
    }
}
