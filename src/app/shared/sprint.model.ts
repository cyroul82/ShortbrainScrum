import { UserStory } from './userstory.model';

export class Sprint {
    public name: string;
    public description: string;
    public userStories: UserStory[];
    public isValidated: boolean;

    constructor(name: string, description: string, userStories: UserStory[]) {
      this.name = name;
      this.description = description;
      this.userStories = userStories;
      this.isValidated = false;
    }
}
