import React from 'react';
import Task from '../../types/Task';
import '../categories/CategoriesList.css';
import { IonCard } from '@ionic/react';

interface TaskReducedProps {
  task: Task;
}

const TaskReduced = ({ task }: TaskReducedProps) => {
  return (
    <IonCard className="subElement">
      {task.title}
      <br />
      {task.expirationDate.toLocaleDateString()}
    </IonCard>
  );
};

export default TaskReduced;
