export class UserStory {
    public name: string;
    public description: string;
    public businessValue: number;
    public id: number;

    constructor(name: string, description: string, businessValue: number, id: number) {
      this.name = name;
      this.description = description;
      this.businessValue = businessValue;
      this.id = id;
    }
}
