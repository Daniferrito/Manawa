import React from 'react';
import TaskReduced from '../tasks/TaskReduced';
import { IonCard } from '@ionic/react';
import Task from '../../types/Task';
import Category from '../../types/Category';

interface Props {
  category?: Category;
}

const CategoriesListItem = (props: Props) => {
  const { category } = props;

  if (category === undefined) return <>{'Error'}</>;

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
