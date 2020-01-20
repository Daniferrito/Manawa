import React from 'react';
import './CategoriesList.css';
import TaskReduced from '../tasks/TaskReduced';
import { IonCard } from '@ionic/react';
import Task from '../../types/Task';
import Category from '../../types/Category';

interface CategoryListItemProps {
  category: Category;
}

const CategoriesListItem = ({ category }: CategoryListItemProps) => {
  return (
    <IonCard className="container">
      <p className="title">{category.title}</p>
      {category.tasks.slice(0, 2).map((task: Task) => (
        <TaskReduced key={task.title} task={task} />
      ))}
    </IonCard>
  );
};

export default CategoriesListItem;
