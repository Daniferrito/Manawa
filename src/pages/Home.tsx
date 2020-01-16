import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home = ({ thing }: { thing?: string }) => {
  if (thing === undefined) {
    thing = 'oyster';
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your {thing}.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
