import Task from './Task';

export default class Category {
  title: string;
  tasks: Task[];
  constructor(title: string, tasks: Task[]) {
    this.title = title;
    this.tasks = tasks;
  }
  static fromJson(json: any): Category {
    return new Category(
      json.title,
      json.tasks?.map((task: any) => Task.fromJson(task))
    );
  }
}
