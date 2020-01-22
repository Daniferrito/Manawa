import Category from './Category';

export default class MainData {
  categories: Category[];
  constructor(categories: Category[]) {
    this.categories = categories;
  }
  static fromJson(json: any): MainData {
    return new MainData(json.categories.map((category: any) => Category.fromJson(category)));
  }
}
