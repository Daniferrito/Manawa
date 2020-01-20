import React from 'react';
import Task from '../../types/Task';
import { IonCard } from '@ionic/react';

interface TaskReducedProps {
  task?: Task;
}

const TaskReduced = (props: TaskReducedProps) => {
  const { task } = props;

  if (task === undefined) return <>{'Error'}</>;

  return (
    <IonCard className="subElement">
      {task.title}
      <br />
      {task.expirationDate.toLocaleDateString()}
    </IonCard>
  );
};

export default TaskReduced;
