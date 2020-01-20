export default class Task {
  title: string;
  description: string;
  expirationDate: Date;
  constructor(title: string, description: string, expirationDate: Date) {
    this.title = title;
    this.description = description;
    this.expirationDate = expirationDate;
  }
  static fromJson(json: any): Task {
    return new Task(json.title, json.description, new Date(json.expirationDate));
  }
}
