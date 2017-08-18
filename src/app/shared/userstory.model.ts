export class UserStory {
    public name: string;
    public description: string;
    public businessValue: number;

    constructor(name: string, description: string, businessValue: number) {
      this.name = name;
      this.description = description;
      this.businessValue = businessValue;
    }
}
