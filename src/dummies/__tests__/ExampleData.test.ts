import * as ExampleData from '../ExampleData.json';
import MainData from '../../types/MainData';
import Category from '../../types/Category.js';
import Task from '../../types/Task.js';

function isMainData(o: object): o is MainData {
  const mD = o as MainData;
  return mD.categories !== undefined;
}
function isCategory(o: object): o is Category {
  const c = o as Category;
  return c.tasks !== undefined && c.title !== undefined;
}
function isTask(o: object): o is Task {
  const t = o as Task;
  return t.title !== undefined && t.expirationDate !== undefined;
}

test('is of correct type', () => {
  expect(isMainData(ExampleData)).toBeTruthy();
});

test('all categories are of right type', () => {
  ExampleData.categories.forEach(category => {
    expect(isCategory(category));
  });
});

test('all tasks are of right type', () => {
  ExampleData.categories.forEach(category => {
    category.tasks?.forEach(task => {
      expect(isTask(task));
    });
  });
});

test('has at least one task', () => {
  expect(
    ExampleData.categories
      .map(category => category.tasks?.length)
      .filter(length => length !== undefined && length > 0).length
  ).toBeGreaterThan(0);
});
