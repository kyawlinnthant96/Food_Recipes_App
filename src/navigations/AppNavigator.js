import React, {useEffect, useState} from 'react';

// Redux
import {Provider} from 'react-redux';
// Stack
import AuthStack from './stack/AuthStack';
import TabsStack from './tabs/TabsStack';
// context
import {DataContext} from '../context/DataContext/DataContext';
// pages
import Splash from '../pages/splash/Splash';
// firebase
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// redux store
import store from '../store';

const AppNavigator = () => {
  const [lang, setLang] = useState('en');
  const [initialAuth, setInitialAuth] = useState(false);
  const [user, setUser] = useState();
  const [info, setInfo] = useState('');
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userSession);
    return subscriber;
  }, []);

  // firebase persist user session
  const userSession = user => {
    if (!user) {
      setInitialAuth(false);
      setTimeout(() => {
        setSplash(false);
      }, 3000);
    } else {
      setUser(user);
      setInitialAuth(true);
      setTimeout(() => {
        setSplash(false);
      }, 3000);
      firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then(user => {
          setInfo(user.data());
        });
    }
  };

  // context
  const context = {
    info,
    user,
    lang,
    getAuth: value => {
      setInitialAuth(value);
    },
    getUserInfo: value => {
      setInfo(value);
    },
  };

  if (splash) {
    return <Splash />;
  } else if (initialAuth) {
    return (
      <Provider store={store}>
        <DataContext.Provider value={context}>
          <TabsStack />
        </DataContext.Provider>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <DataContext.Provider value={context}>
          <AuthStack />
        </DataContext.Provider>
      </Provider>
    );
  }
};

export default AppNavigator;
